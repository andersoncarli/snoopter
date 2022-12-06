module.exports = {
  "locales": ["en-US", "pt-BR"],
  "defaultLocale": "en-US",
  "defaultNS": "common",
  "pages": {
    "*": ["common"],
    "/About": ["common"]
  },

  // You can use a dynamic import, fetch, whatever. You should
  // return a Promise with the JSON file.
  // "loadLocaleFrom": (lang, ns) => {
  //   console.log('LANG!!', lang, ns)
  //   let file = `./locales/${lang}.${ns}.json`
  //   import(file).then((m) => m.default)
  // },
}
