/** @type {import('next').NextConfig} */
const nextConfig = {
   experimental: {
     serverComponentsExternalPackages: ['postgres', 'bcrypt']
   }
};
export default nextConfig;