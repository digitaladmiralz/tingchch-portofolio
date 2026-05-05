const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/dashboard', destination: '/', permanent: false },
      { source: '/guestbook', destination: '/', permanent: false },
      { source: '/playground', destination: '/', permanent: false },
      { source: '/blog', destination: '/', permanent: false },
      { source: '/blog/:path*', destination: '/', permanent: false },
      { source: '/learn', destination: '/', permanent: false },
      { source: '/learn/:path*', destination: '/', permanent: false },
    ];
  },
};

module.exports = nextConfig;
