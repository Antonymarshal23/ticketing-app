const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(
  '/api/users',
  createProxyMiddleware({
    target: 'http://localhost:3001',
    changeOrigin: true,
  })
);
app.use(
  '/api/customers/orders',
  createProxyMiddleware({
    target: 'http://localhost:3003',
    changeOrigin: true,
    pathRewrite: {
      '^/api/customers/orders': '/api/customers/orders',
    },
  })
);

app.use(
  '/api/customers/tickets',
  createProxyMiddleware({
    target: 'http://localhost:3002',
    changeOrigin: true,
    pathRewrite: {
      '^/api/customers/tickets': '/api/tickets',
    },
  })
);
app.use(
  '/api/customers/payments',
  createProxyMiddleware({
    target: 'http://localhost:3004',
    changeOrigin: true,
  })
);
app.use(
  '/api/customers',
  createProxyMiddleware({
    target: 'http://localhost:3001',
    changeOrigin: true,
  })
);

app.use(
  '/api/tickets',
  createProxyMiddleware({
    target: 'http://localhost:3002',
    changeOrigin: true,
  })
);

app.use(
  '/api/orders',
  createProxyMiddleware({
    target: 'http://localhost:3003',
    changeOrigin: true,
  })
);



app.use(
  '/api/payments',
  createProxyMiddleware({
    target: 'http://localhost:3004',
    changeOrigin: true,
  })
);

app.use(
  '/api/customers/checkout',
  createProxyMiddleware({
    target: 'http://localhost:3004',
    changeOrigin: true,
  })
);

app.listen(3000, () => {
  console.log('Gateway running on http://localhost:3000');
});

app.on('error', (err) => {
  console.error('Gateway error:', err);
});

process.on('exit', (code) => {
  console.log('Gateway process exited with code:', code);
});

process.on('SIGINT', () => {
  console.log('Gateway received SIGINT');
});

process.on('SIGTERM', () => {
  console.log('Gateway received SIGTERM');
});