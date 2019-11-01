module.exports = {
    // 基本路径
    publicPath: '/',
    // 输出文件目录
    outputDir: 'dist',
    // eslint-loader 是否在保存的时候检查
    lintOnSave: true,
    // webpack配置
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: () => {},
    configureWebpack: () => {},
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: true,
    // css相关配置
    css: {
    // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {
            // 定制vant样式
            less: {
                modifyVars: {
                    red: '#FA5A5A',
                    blue: '#4A90E2',
                    orange: '#F67B29',
                    'text-color': '#333',
                    'active-color': '#F67B29'
                }
            }
        },
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
    },
    // use thread-loader for babel & TS in production build
    // enabled by default if the machine has more than 1 cores
    parallel: require('os').cpus().length > 1,
    // webpack-dev-server 相关配置
    devServer: {
        open: true,
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: null, // 设置代理
        disableHostCheck: true, // 解决npm安装无法热更新问题
        overlay: {
            warnings: true,
            errors: true
        }, // 当出现编译器错误或警告时，在浏览器中显示全屏覆盖层
        before: app => {}
    },
    // 第三方插件配置
    pluginOptions: {
    // ...
    }
}
