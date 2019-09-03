import config from './webpack.config';
import local from './webpack.local';

export default (env: any) => {
    switch (env.NODE_ENV) {
        case 'local':
            return local.server;
        default:
            return config.server;
    }
};
