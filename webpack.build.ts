import config from './webpack.config';

export default (env: any) => {
    switch (env.NODE_ENV) {
        default:
            return config.server;
    }
};
