import { RouteConfig } from 'react-router-config';
import App, { PageOne, PageThree, PageTwo } from './../client/components/app';

const routes: RouteConfig[] = [
    {
        path: '/',
        component: App,
        routes: [
            {
                path: '/page-one',
                component: PageOne,
            },
            {
                path: '/page-two',
                component: PageTwo,
            },
            {
                path: '/page-three',
                component: PageThree,
            },
        ],
    },
];

export default routes;
