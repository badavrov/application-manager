import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';

import Home from './Home'
import Create from './Create';
import View from './View';
import Edit from './Edit';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" render={props => <Home {...props}/>}/>
            <Route exact path="/create" render={props => <Create {...props}/>}/>
            <Route exact path="/view" render={props => <View {...props}/>}/>
            <Route exact path="/edit/:index" render={props => <Edit {...props}/>}/>

        </Switch>
    </BrowserRouter>
);