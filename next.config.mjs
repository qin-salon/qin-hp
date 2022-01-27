/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  future: { strictPostcssConfiguration: true },
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,
  // experimental: { concurrentFeatures: true, serverComponents: true },
};

export default nextConfig;
