module.export = {
    configureWebpack: {
        reslove: {
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'views': '@/views',
                'common': '@/common',
                'router': '@/router',
                'store': '@/store',
            }
        }
    }
}