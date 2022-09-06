const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use((_, res, next) => {
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
    next();
  });
};