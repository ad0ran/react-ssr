import express from 'express';
import path from 'path';
import React from 'react';
import { StaticRouter, StaticRouterContext } from 'react-router';
import url from 'url';
import webpack, { Configuration } from 'webpack';
import wdm from 'webpack-dev-middleware';
import whm from 'webpack-hot-middleware';
import App from './../client/components/app';
import templateFactory from './template-factory';

const initialize = (config: Configuration) => {
    if (!config) {
        throw new Error ('Invalid configuration');
    }

    const app = express();
    const compiler = webpack(config);

    const instance = wdm(compiler, {
        publicPath: config.output!.publicPath!,
        serverSideRender: true,
    });

    instance.waitUntilValid(() => {
        app.listen(3000, () => console.log('Listening on port 3000'));
    });

    if (module && !module.hot) {
        app.use(express.static(path.resolve(__dirname, '..', '..', 'build', 'client')));
    }

    app.use(instance);

    if (module && module.hot) {
        app.use(whm(compiler, {
            path: '/__hmr',
            log: console.log,
        }));
    }

    app.use((req, res, next) => {
        const context: StaticRouterContext = {};
        const webpackStats: webpack.Stats = res.locals.webpackStats;
        const webpackStatsObj = webpackStats.toJson();

        const { assetsByChunkName, publicPath } = webpackStatsObj;

        const normalized = [...Object.keys(config.entry!).map((key) => assetsByChunkName![key])].flat();

        const template = templateFactory({
            body: (
                <StaticRouter location={req.url} context={context}>
                    <App />
                </StaticRouter>
            ),
            scripts: normalized
                .filter((x: string) => x.endsWith('.js'))
                .map((x, i) => {
                    const src = url.resolve(publicPath!, x);
                    return (<script key={i} src={src} defer />);
                }),
            css: normalized
                .filter((x: string) => x.endsWith('.css'))
                .map((x, i) => {
                    const src = url.resolve(publicPath!, x);
                    return (<link key={i} rel="stylesheet" type="text/css" href={src} />);
                }),
        });

        if (context.url) {
            res.redirect(context.url);
        } else {
            res.setHeader('Content-Type', 'text/html');
            res.send(template);
        }

        res.end();
    });

};

switch (process.env.NODE_ENV) {
    default: {
        // tslint:disable-next-line: no-var-requires
        const config = require('./../../webpack.config').default;
        initialize(config.client);
        break;
    }

    case 'local': {
        // tslint:disable-next-line: no-var-requires
        const config = require('./../../webpack.local').default;
        initialize(config.client);
        break;
    }
}
