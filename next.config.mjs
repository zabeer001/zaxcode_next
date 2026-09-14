/** @type {import('next').NextConfig} */
const dashboardUrl = (
  process.env.NEXT_PUBLIC_DASHBOARD_URL
  || (process.env.NODE_ENV === 'development' ? 'http://localhost:97' : 'https://dashboard.zaxcode.com')
).replace(/\/$/, '');

const nextConfig = {
  output: 'standalone',
  async redirects() {
    return [
      { source: '/about', destination: '/#about', permanent: true },
      { source: '/portfolio', destination: '/#systems', permanent: true },
      { source: '/tutors', destination: '/#systems', permanent: true },
      { source: '/tutors/:path*', destination: '/#systems', permanent: true },
      { source: '/book-tutors', destination: '/#contact', permanent: true },
      { source: '/tuition-jobs', destination: '/#services', permanent: true },
      { source: '/sign-in', destination: `${dashboardUrl}/sign-in`, permanent: false },
    ];
  },
};

export default nextConfig;
