import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import path from 'path';
import { Configuration } from 'webpack';
import { smartStrategy } from 'webpack-merge';
import nodeExternals from 'webpack-node-externals';

const client: Configuration = {
    mode: 'development',
    name: 'client-configuration',
    context: process.cwd(),
    node: {
        __dirname: true,
        process: true,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },
    entry: {
        app: path.resolve(process.cwd(), 'src', 'client', 'index.tsx'),
    },
    output: {
        path: path.resolve(process.cwd(), 'build', 'client'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[name]-[chunkhash].js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                exclude: /node_modules/ig,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cwd: process.cwd(),
                        babelrc: false,
                        presets: [
                            ['@babel/preset-env', {
                                targets: {
                                    browsers: ['defaults'],
                                    node: process.versions.node,
                                },
                                modules: 'cjs',
                                useBuiltIns: 'usage',
                                corejs: {
                                    version: 3,
                                    proposals: true,
                                },
                            }],
                            '@babel/preset-react',
                            '@babel/preset-typescript',
                        ],
                        plugins: [
                            '@babel/plugin-syntax-dynamic-import',
                            ['@babel/plugin-proposal-decorators', { legacy: true }],
                            ['@babel/plugin-proposal-class-properties', { loose : true }],
                        ],
                    },
                },
            },
            {
                test: /\.(ico)$/,
                use: {
                    loader: 'file-loader',
                },
            },
        ],
    },
};

export default {
    client ,
    server: smartStrategy({
        output: 'replace',
        entry: 'replace',
    })(client, {
        entry: {
            server: path.resolve(__dirname, 'src', 'server', 'index.tsx'),
        },
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].js',
            chunkFilename: '[name]-[chunkhash].js',
            library: 'react-ssr-server',
            libraryTarget: 'commonjs2',
        },
        target: 'node',
        plugins: [
            new CleanWebpackPlugin(),
        ],
        externals: [nodeExternals()],
        module: {
            rules: [
                {
                    test: /\.(ico)$/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'client',
                        },
                    },
                },
            ],
        },
    }),
};
