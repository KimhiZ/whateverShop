module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://qqshop.com:80',
                ws: true,
                changeOrigin: true
            },
        }
    },

    lintOnSave: false
}