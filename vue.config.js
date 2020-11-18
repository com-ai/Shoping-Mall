module.export = {
    configureWebpack: {
        reslove: {
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'network': '@/network',
                'router': '@/router',
                'store': '@/store',
                'views': '@/views',
                'common': '@/common',
            }
        }
    }
}