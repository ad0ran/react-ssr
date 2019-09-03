import path from 'path';
import { Configuration, EnvironmentPlugin, HotModuleReplacementPlugin } from 'webpack';
import { smart } from 'webpack-merge';
import config from './webpack.config';

const sharedPlugins = [
    new EnvironmentPlugin({
        NODE_ENV: 'local',
    }),
];

const client: Configuration = smart(config.client, {
    mode: 'development',
    devtool: 'source-map',
    // devServer: {
    //     contentBase: [
    //         path.resolve(process.cwd(), 'build', 'client'),
    //         path.resolve(process.cwd(), 'src', 'client', 'assets'),
    //     ],
    //     historyApiFallback: true,
    //     publicPath: '/',
    // },
    entry: {
        app: [
            'webpack-hot-middleware/client?path=/__hmr',
            path.resolve(process.cwd(), 'src', 'client', 'index.tsx'),
        ],
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        ...sharedPlugins,
    ],
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },
});

const server: Configuration = smart(config.server, {
    plugins: [
        ...sharedPlugins,
    ],
});

export default { client, server };
