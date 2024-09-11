/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "axnltwnaohxbryepquby.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/product-images/**",
      },
    ],
  },
};
// https://axnltwnaohxbryepquby.supabase.co/storage/v1/object/public/product-images/iphone15-thumbnail.jpg
export default nextConfig;
