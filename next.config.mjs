import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  serverExternalPackages: ['@takumi-rs/image-response'],
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/docs',
        destination: '/docs/sem5/dbms',
        permanent: false,
      },
      {
        source: '/docs/sem5',
        destination: '/docs/sem5/dbms',
        permanent: false,
      },
      {
        source: '/docs/semester-5',
        destination: '/docs/sem5/dbms',
        permanent: true,
      },
      {
        source: '/docs/semester-5/:path*',
        destination: '/docs/sem5/:path*',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/docs/:path*.mdx',
        destination: '/llms.mdx/docs/:path*',
      },
    ];
  },
};

export default withMDX(config);
