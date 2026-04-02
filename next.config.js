const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

/** @type {import('next').NextConfig} */
const adminPath = process.env.NEXT_PUBLIC_ADMIN_PATH || "admin";

const nextConfig = {
  experimental: {
    cpus: 1,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https://nbpkoreare.s3.ap-northeast-2.amazonaws.com https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com https://images.unsplash.com; font-src 'self' data:; connect-src 'self' https://*.sanity.io https://nbpkoreare.s3.ap-northeast-2.amazonaws.com; media-src 'self' https://nbpkoreare.s3.ap-northeast-2.amazonaws.com https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com; frame-src 'self' https://maps.google.com https://www.google.com; frame-ancestors 'self'",
          },
        ],
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
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

  async redirects() {
    return [
      // 옛 PHP 사이트 URL → 새 사이트 리다이렉트
      { source: "/customer/news.php", destination: "/news", permanent: true },
      { source: "/customer/:path*", destination: "/support", permanent: true },
      { source: "/business/performance_view.php", destination: "/performance", permanent: true },
      { source: "/business/coffee_performance.php", destination: "/performance", permanent: true },
      { source: "/business/:path*.php", destination: "/business", permanent: true },
      { source: "/bbs/:path*", destination: "/", permanent: true },
      { source: "/eng/careers/:path*", destination: "/", permanent: true },
      { source: "/eng/business/:path*", destination: "/business", permanent: true },
      { source: "/eng/customer/:path*", destination: "/support", permanent: true },
      { source: "/eng/:path*.php", destination: "/en", permanent: true },
    ];
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
