module.exports = {
    devServer: {
        host: 'localhost',
        port: 35571,
        https: false,
        open: false,//自动启动浏览器
        proxy: {
            "/acm": {
                target: "http://localhost:32275",
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/acm':''
                }
            }
        }
    }
}