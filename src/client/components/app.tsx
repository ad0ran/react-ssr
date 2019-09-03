import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
// import routes from './../../shared/routes';

export const PageOne = () => {
    return (
        <>
            <h1>Page 1</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quo ratione tempore facilis aliquam id et ipsam, nesciunt, cumque quidem eligendi cum! Itaque hic laudantium explicabo eveniet quod quidem earum reiciendis veniam, qui delectus asperiores nihil soluta quos, adipisci accusamus et enim eos deserunt eum recusandae modi obcaecati perferendis dicta! Autem est veritatis sapiente magni non numquam ab, amet rem architecto debitis quod. Saepe inventore dignissimos, itaque quo numquam, autem, officia voluptas assumenda voluptatem accusantium voluptates placeat vero rem dolorem.</p>
        </>
    );
};

export const PageTwo = () => {
    return (
        <h1>Page 2</h1>
    );
};

export const PageThree = () => {
    return (
        <h1>Page 3</h1>
    );
};

const Main = () => {
    return (<h1>Home!</h1>);
};

export default function App() {
    return (
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/page-one" component={PageOne} />
            <Route path="/page-two" component={PageTwo} />
            <Route path="/page-three" component={PageThree} />
            <Redirect to="/" />
        </Switch>
    );
}
