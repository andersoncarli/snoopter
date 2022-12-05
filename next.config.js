/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");

module.exports = {
  ...nextTranslate(),
  // reactStrictMode: true, // problems with useEffect & useLayoutEffect
  swcMinify: true,
}

console.log(module.exports)
