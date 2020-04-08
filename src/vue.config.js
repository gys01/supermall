module.exports = {
    configureWebpack: {
        resolve: {
            // 配置别名 为了引用的时候省略掉  ./
            alias: {
                // 'assets':'@/assets',
                // 'common':'@/common',
                // 'components':'@/components',
                // 'network':'@/network',
                // 'views':'@/views',
            }
        }
    }
}
