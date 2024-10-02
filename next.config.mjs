/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: false,
  trailingSlash: false,
  images: {
    unoptimized: true,
  }, 
  //typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    //ignoreBuildErrors: true,
  //},
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
}

export default nextConfig;
