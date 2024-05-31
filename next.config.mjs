/** @type {import('next').NextConfig} */
const nextConfig = {
  // assetPrefix: `http://localhost:9090/${process.env.SESSION_BACKEND_STATIC_TOKEN}/`,
  basePath: `/${process.env.SESSION_BACKEND_STATIC_TOKEN}`
};

export default nextConfig;
