// This was originally a jQuery script and we're gonna try to vanilla-fy it.
// Most of this script is just form validation and we're going to handle that
// within the Vue components. This will just submit the form in a way that
// mailchimp can accept.
//
// http://s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js


// assumes: email and name are valid values

export default function submitMailchimpForm (email, fname) {
  const url = `https://facebook.us15.list-manage.com/subscribe/post-json?u=30e8b4a961e3a2a2ecf92c181&amp;id=70c3b63a7d&c=?`
  const data = {
    EMAIL: email,
    FNAME: fname,
    "b_30e8b4a961e3a2a2ecf92c181_70c3b63a7d": '',
  }
  console.log('sending', data)

  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000)
  })
}