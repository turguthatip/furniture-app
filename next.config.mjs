/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'turguthatip.github.io',
            port: '',
            pathname: '/furniture-app/**',
          },
        ],
      },
};

export default nextConfig;
