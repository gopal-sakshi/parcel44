const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        createProxyMiddleware("/test1/path44", {
            target: "http://localhost:12000/",
        })
    );

    app.use('/code-flow-identityserver', (req, res, next) => {
        res.setHeader('Cross-Origin-Opener-Policy', 'unsafe-none');
        res.setHeader('Cross-Origin-Embedder-Policy', 'unsafe-none');
        next();
    });
};
