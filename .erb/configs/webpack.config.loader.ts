/**
 * webpack默认基础的loader配置
 * TODO 特别注意这边是基础的loader，如果对应开发需要添加loader请到对应文件当中去修改
 */

const webpackTransformationLoader = [
    {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
            loader: 'ts-loader',
            options: {
                transpileOnly: true,
                compilerOptions: {
                    module: 'esnext',
                },
            },
        },
    },
];

const webpackSourceLoader = [
    {
        test: /\.l?(c|e)ss$/,
        use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    modules: true,
                    sourceMap: true,
                    importLoaders: 1,
                },
            },
            'less-loader',
        ],
        include: /\.module\.l?(c|e)ss$/,
    },
    {
        test: /\.l?(c|e)ss$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
        exclude: /\.module\.l?(c|e)ss$/,
    },
    {
        test: /\.worker\.(js|ts)$/,
        use: {
            loader: 'worker-loader',
            options: {
                inline: false,
            },
        },
    },
    {
        test: /\.(png|jpg|gif|jpeg|webp|ico|cur|glb|ttf|woff|woff2|hdr)(\?.*)?$/,
        use: [
            {
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'img/[name].[hash:7].[ext]',
                    esModule: true,
                },
            },
        ],
    },
    {
        test: /\.(wav|mp3|mp4|re3d|glb|hdr)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
    },
    {
        test: /\.svg$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    prettier: false,
                    svgo: false,
                    svgoConfig: {
                        plugins: [{ removeViewBox: false }],
                    },
                    titleProp: true,
                    ref: true,
                },
            },
            'file-loader',
        ],
    },
];

export default {
    webpackSourceLoader,
    webpackTransformationLoader,
};
