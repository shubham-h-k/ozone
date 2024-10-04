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
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        port: "",
        pathname: "/images/I/**",
      },
      {
        protocol: "https",
        hostname: "images-eu.ssl-images-amazon.com",
        port: "",
        pathname: "/images/S/amazon-avatars-global/**",
      },
    ],
  },
};

export default nextConfig;

// https://axnltwnaohxbryepquby.supabase.co/storage/v1/object/public/product-images/iphone15-thumbnail.jpg
// https://m.media-amazon.com/images/I/61uA2UVnYWL._SL1500_.jpg
// https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png
//https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/2695f261-371f-446e-9759-ed23954018d7._CR0,0,680,680_SX48_.jpg
