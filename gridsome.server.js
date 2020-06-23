// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const {
  DSA_DRAFTS_ALLOWED,
  NODE_ENV
} = process.env

const showDrafts = NODE_ENV !== 'production' &&
  (DSA_DRAFTS_ALLOWED === 'true' || DSA_DRAFTS_ALLOWED === true)

module.exports = function (api) {

  api.onCreateNode(options => {
    // Global draft handling here
    if (!showDrafts && 'draft' in options && options.draft === true) {
      return null
    }

    return options
  })
}
