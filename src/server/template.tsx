import { ReactElement } from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import './../client/assets/favicon.ico';

export interface ITemplate {
    body: ReactElement;
    title?: string;
    scripts?: ReactElement[];
    css?: ReactElement[];
}

export default (template: ITemplate) => {
    const {
        body,
        title = 'React SSR',
        scripts = [],
        css = [],
    } = template;

    return `
        <!DOCTYPE html>
        <html>
            <head>
                <title>${title}</title>
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <link rel="icon" href="favicon.ico" type="image/x-icon" />
                ${css.map((x) => renderToStaticMarkup(x))}
            </head>
            <body>
                <div id="app-root">${renderToString(body)}</div>
                ${scripts.map((x) => renderToStaticMarkup(x))}
            </body>
        </html>
    `;
};
