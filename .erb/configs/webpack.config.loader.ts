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

const webpackDevelopLoader = [
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
            {
                loader: 'less-loader',
                options: {
                    lessOptions: {
                        javascriptEnabled: true,
                    },
                },
            },
        ],
        include: /\.module\.l?(c|e)ss$/,
    },
    {
        test: /\.l?css$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
        exclude: /\.module\.l?css$/,
    },
    {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
    },
    {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
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
    webpackDevelopLoader,
    webpackTransformationLoader,
};
