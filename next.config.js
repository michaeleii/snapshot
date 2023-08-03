/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "lzrslhygdxwyshinircf.supabase.co",
      "oaidalleapiprodscus.blob.core.windows.net",
    ],
  },
  rewrites: async () => [
    {
      source: "/api/:path*",
      destination: "https://xuwaojgdqf.us17.qoddiapp.com/api/:path*",
    },
  ],
};

module.exports = nextConfig;
