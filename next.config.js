/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "lzrslhygdxwyshinircf.supabase.co",
      "oaidalleapiprodscus.blob.core.windows.net",
    ],
  },
  headers: async () => [
    {
      // matching all API routes
      source: "/create/generate",
      headers: [
        { key: "Access-Control-Allow-Credentials", value: "true" },
        {
          key: "Access-Control-Allow-Origin",
          value: process.env.NEXT_PUBLIC_API_URL,
        },
        {
          key: "Access-Control-Allow-Methods",
          value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
        },
        {
          key: "Access-Control-Allow-Headers",
          value:
            "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
        },
      ],
    },
  ],
};

module.exports = nextConfig;
