import ESLintPlugin from 'eslint-webpack-plugin';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    config.plugins.push(
      new ESLintPlugin({
        extensions: ['ts', 'tsx'],
        emitWarning: dev,
      })
    );
    return config;
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
