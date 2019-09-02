import express from 'express';
import path from 'path';
import React from 'react';
import { StaticRouter, StaticRouterContext } from 'react-router';
import url from 'url';
import webpack from 'webpack';
import wdm from 'webpack-dev-middleware';
import config from './../../webpack.config';
import App from './../client/components/app';
import templateFn from './template';

const app = express();
const compiler = webpack(config.client);

const instance = wdm(compiler, {
    publicPath: config.client.output!.publicPath!,
    serverSideRender: true,
});

instance.waitUntilValid(() => {
    app.listen(3000, () => console.log('Listening on port 3000'));
});

app.use(express.static(path.resolve(__dirname, '..', '..', 'build', 'client')));

app.use(instance);

app.use((req, res, next) => {
    const context: StaticRouterContext = {};
    const webpackStats: webpack.Stats = res.locals.webpackStats;
    const webpackStatsObj = webpackStats.toJson();

    const { chunks, publicPath } = webpackStatsObj;

    const template = templateFn({
        body: (
            <StaticRouter location={req.url} context={context}>
                <App />
            </StaticRouter>
        ),
        scripts: chunks!
            .flatMap((x) => x.files.map((file, i) => {
                const src = url.resolve(publicPath!, file);
                return (<script key={i} src={src} defer />);
            })),
    });

    if (context.url) {
        res.redirect(context.url);
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.send(template);
    }

    res.end();
});
