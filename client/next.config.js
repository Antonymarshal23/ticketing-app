module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3000/api/:path*',
      },
      {
        source: '/customer/checkout/:ticketId',
        destination: '/customer/checkout/:ticketId',
      },
      {
        source: '/customer',
        destination: '/',
      },
      {
        source: '/customer/tickets',
        destination: '/tickets',
      },
      {
        source: '/customer/orders',
        destination: '/orders',
      },
      {
        source: '/customer/checkout/:ticketId',
        destination: '/checkout/:ticketId',
      },
    ];
  },
};