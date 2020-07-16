// This was originally a jQuery script and we're gonna try to vanilla-fy it.
// Most of this script is just form validation and we're going to handle that
// within the Vue components. This will just submit the form in a way that
// mailchimp can accept.
//
// http://s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js

export class FormSubmitError extends Error {}


// assumes: email and fname are valid values
export default function submitMailchimpForm(u, decoy, email, fname) {
  const url = `https://facebook.us15.list-manage.com/subscribe/post-json?u=${u}&c=?`

  const data = {
    EMAIL: email,
    FNAME: fname,
    [decoy]: '',
  }

  return new Promise((resolve, reject) => {

  // rolling our own AJAX, because mailchimp embedded form sends
  // a GET request with a JSON body. Both axios and whatwg-fetch will
  // not allow you to do that.
    const xhr = new XMLHttpRequest()

    xhr.onload = () => {
      const resBody = 'response' in xhr ? xhr.response : xhr.responseText

      if (xhr.status !== 200) {
        reject(new FormSubmitError('Could not successfully submit that request'))
        console.error(xhr.status, xhr.statusText, resBody)
        return
      }

      let body

      try {
        body = JSON.parse(resBody)
      } catch (error) {
        reject(new FormSubmitError('Could not parse response from server'))
        console.error(xhr.status, xhr.statusText, resBody)
        return
      }

      if (!body.result) {
        reject(new FormSubmitError('Could not read response from server'))
        console.error(xhr.status, xhr.statusText, body)
        return
      }

      if (body.result !== 'success') {
        reject(new FormSubmitError('Server did not return successful'))
        console.error(xhr.status, xhr.statusText, body)
        return
      }

      resolve(true)
    }

    xhr.onerror = () => {
      reject(new FormSubmitError('Network error sending request'))
    }

    xhr.ontimeout = () => {
      reject(new FormSubmitError('Network timeout sending request'))
    }

    xhr.open('GET', url)

    xhr.withCredentials = true

    xhr.setRequestHeader('Content-Type', 'application/json; charset=utr-8')
    xhr.setRequestHeader('Accept', 'application/json')

    xhr.send(JSON.stringify(data))
  })
}