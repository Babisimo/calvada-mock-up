/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // This is the magic line for GoDaddy/Apache
  trailingSlash: true,   // Helps Apache find your folders/files easily
  images: {
    unoptimized: true,   // Required for static export
  },
};

export default nextConfig;
