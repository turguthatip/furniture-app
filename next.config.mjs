// @ts-check
import path from 'path';
import { fileURLToPath } from 'url';
import withExportImages from 'next-export-optimize-images';

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  turbopack: {
    root: path.dirname(fileURLToPath(import.meta.url)),
  },
};

export default withExportImages(nextConfig);
