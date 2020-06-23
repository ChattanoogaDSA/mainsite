// riffing off filesystem source plugin
// https://github.com/gridsome/gridsome/blob/master/packages/source-filesystem/index.js

const path = require('path')
const crypto = require('crypto')

const globby = require('globby')
const fs = require('fs-extra')
const mime = require('mime-types')
const slash = require('slash')

const isDev = process.env.NODE_ENV === 'development'
const chokidar = isDev ? require('chokidar') : null

class DsaForestry {
  static defaultOptions () {
    return {
      Alert: './content/alerts/**/*.md',
      Article: './content/articles/**/*.md',
      Callout: './content/callouts/**/*.md',
      FooterGroup: './content/footer-groups/**/*.md',
      Home: './content/home/home.md',
      Settings: './content/settings/settings.md',
      Topic: './content/topics/**/*.md',
      Event: './content/events/**/*.md',
    }
  }

  constructor (api, options) {
    this.api = api
    this.context = api.context

    api.loadSource(async actions => {
      this.actions = actions

      this.actions.addSchemaTypes(this.schemaAdditions())

      await Promise.all(Object.entries(options).map(async ([typeName, sourcePath]) => {
        return this.loadCollection(typeName, sourcePath)
      }))

      this.applyReferences()
      if (isDev) this.watchFiles(options)
    })
  }

  schemaAdditions () {
    return `
      type Topic implements Node @infer {
        articles: [Article] @reference(by: "id")
      }
      
      type Article implements Node @infer {
        topic: Topic @reference(by: "id")
      }
      
      type Home implements Node @infer {
        callouts: [HomeCallout]
      }
      
      type HomeCallout {
        template: String
        callout: Callout @reference(by: "id")
        callouts: [Callout] @reference(by: "id")
      }
    `
  }

  applyReferences () {
    // create inverse of Article.topic (becomes Topic.articles[])
    const topicsCollection = this.actions.getCollection('Topic')
    const articlesCollection = this.actions.getCollection('Article')
    for (const topic of topicsCollection.data()) {
      const articles = articlesCollection.findNodes({'topic': {'$eq': topic.id}})
      topic.articles = articles.map(a => a.id)
      topicsCollection.updateNode(topic)
    }
  }

  async loadCollection (typeName, sourcePath) {
    const collection = this.actions.addCollection(typeName)
    const files = await globby(sourcePath)
    return Promise.all(files.map(async file => {
      const option = await this.createNodeOptions(file)
      collection.addNode(option)
    }))
  }

  watchFiles (typeMap) {
    const requireRefUpdates = ['Article']

    Object.entries(typeMap).forEach(([typeName, sourcePath]) => {
      const collection = this.actions.getCollection(typeName)
      const watcher = chokidar.watch(sourcePath, {
        cwd: this.context,
        ignoreInitial: true
      })

      const applyRefs = requireRefUpdates.includes(typeName) ? this.applyReferences : () => {}

      watcher.on('add', async file => {
        const options = await this.createNodeOptions(slash(file))
        collection.addNode(options)
        applyRefs()
      })

      watcher.on('unlink', file => {
        const absPath = path.join(this.context, slash(file))
        collection.removeNode({'internal.origin': absPath})
        applyRefs()
      })

      watcher.on('change', async file => {
        const options = await this.createNodeOptions(slash(file))
        collection.updateNode(options)
        applyRefs()
      })
    })
  }

  async createNodeOptions (file) {
    const relPath = path.relative(this.context, file)
    const origin = path.join(this.context, file)
    const content = await fs.readFile(origin, 'utf8')
    const { dir, name, ext = '' } = path.parse(file)
    const mimeType = mime.lookup(file) || `application/x-${ext.replace('.', '')}`

    return {
      // this ID fits the format of how Forestry identifies documents
      id: `${dir}/${name}${ext}`.replace(/^\.\//, ''),
      path: this.createPath({ dir, name }),
      fileInfo: {
        extension: ext,
        directory: dir,
        path: file,
        name
      },
      internal: {
        mimeType,
        content,
        origin,
      }
    }
  }

  createPath ({ dir, name }) {
    const { permalinks = {}} = this.api.config
    const pathSuffix = permalinks.trailingSlash ? '/' : ''

    const segments = slash(dir).split('/').map(segment => {
      return this.actions.slugify(segment)
    })

    segments.push(this.actions.slugify(name))

    const res ='/' + segments.filter(Boolean).join('/').replace(/\/+$/, '')

    return (res + pathSuffix) || '/'
  }
}

module.exports = DsaForestry