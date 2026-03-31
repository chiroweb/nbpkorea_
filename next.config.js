const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

/** @type {import('next').NextConfig} */
const adminPath = process.env.NEXT_PUBLIC_ADMIN_PATH || "admin";

const nextConfig = {
  experimental: {
    cpus: 1,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "NBPKOREAre.s3.ap-northeast-2.amazonaws.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "nbpkoreare.s3.ap-northeast-2.amazonaws.com",
        pathname: "/**",
      },
    ],
  },

  async rewrites() {
    // If custom path is set, rewrite /nbp6600/* → /admin/*
    if (adminPath === "admin") return [];
    return [
      { source: `/${adminPath}`, destination: "/admin" },
      { source: `/${adminPath}/:path*`, destination: "/admin/:path*" },
    ];
  },
};

module.exports = withNextIntl(nextConfig);
