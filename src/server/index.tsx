import express from 'express';
import path from 'path';
import React from 'react';
import webpack, { ICompiler } from 'webpack';
import config from './../../webpack.config';
import App from './../client/app';
import templateFn from './template';

const app = express();

const init: ICompiler.Handler = (err, stats) => {
    if (err) {
        throw err;
    }

    if (stats.hasErrors()) {
        throw stats.toJson().errors;
    }

    const something = stats.toJson();
    // console.log('chunks', something.chunks);

    app.use(express.static(path.resolve(__dirname, '..', '..', 'build', 'client')));

    app.use('*', (req, res, next) => {
        const template = templateFn({
            body: (<App />),
            scripts: something
                .chunks!
                .flatMap((x) => x.files.map((file, i) => (<script key={i} src={file} defer />))),
        });

        res.setHeader('Content-Type', 'text/html');
        res.send(template);
        res.end();
    });

    app.listen(3000, () => {
        console.log('listening on port 3000');
    });
};

webpack(config.client, init);
