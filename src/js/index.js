// @ts-check

// function targetBlank () {
//   // remove subdomain of current site's url and setup regex
//   let internal = location.host.replace('www.', '')
//   internal = new RegExp(internal, 'i')

//   const a = document.getElementsByTagName('a') // then, grab every link on the page
//   for (let i = 0; i < a.length; i++) {
//     const href = a[i].host // set the host of each link
//     if (!internal.test(href)) { // make sure the href doesn't contain current site's host
//       a[i].setAttribute('target', '_blank') // if it doesn't, set attributes
//     }
//   }
// }
// targetBlank()
