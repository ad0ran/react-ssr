import React from 'react';
import { hydrate } from 'react-dom';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter } from 'react-router-dom';
import App from './../client/components/app';

const Index = () => {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
};

const HotIndex = hot(Index);

hydrate(module && module.hot ? <HotIndex /> : <Index />, document.getElementById('app-root'));
