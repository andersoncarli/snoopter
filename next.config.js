/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");

module.exports = {
  // eslint: {
  //   // Warning: This allows production builds to successfully complete even if
  //   // your project has ESLint errors.
  //   ignoreDuringBuilds: true,
  // },
  ...nextTranslate(),
  // reactStrictMode: true, // problems with useEffect & useLayoutEffect
  swcMinify: true,
}

console.log(module.exports)
