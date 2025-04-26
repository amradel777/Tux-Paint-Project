import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com'],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // i18n: {
  //   locales: ['ar'],
  //   defaultLocale: 'ar',
  //   localeDetection: false,
  // },
  // experimental: {
  //   // optimizeFonts: true,
  //   scrollRestoration: true,
  // },
  // compiler: {
  //   removeConsole: process.env.NODE_ENV === 'production',
  // },
};

export default nextConfig;
