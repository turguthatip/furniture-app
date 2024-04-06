/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    basePath: '/https://turguthatip.github.io/furniture-app/',
    images: {
        loader: 'akamai',
        path: './',
      },
};

export default nextConfig;
