/** @type {import('next').NextConfig} */
const nextConfig = {
  // uncomment output to build using npm run build
  // output: "export",

  // trailingSlash: true,
  // distDir: "build",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "godrejinfotech.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
