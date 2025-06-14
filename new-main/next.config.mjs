/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Allow cross-origin requests from preview domains
  allowedDevOrigins: [
    'brain-bubble-ui.preview.emergentagent.com',
    'app-only.preview.emergentagent.com',
    '290fa822-145b-46a0-b7b6-a99bb7f336df.preview.emergentagent.com',
    'localhost:3000'
  ],
}

export default nextConfig