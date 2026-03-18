/** @type {import('next').NextConfig} */
const adminPath = process.env.NEXT_PUBLIC_ADMIN_PATH || "admin";

const nextConfig = {
  images: {
    unoptimized: true,
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

module.exports = nextConfig;
