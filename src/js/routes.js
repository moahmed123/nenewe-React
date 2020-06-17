/*
    This is here where all the routes lives
 */

import React, { Component } from 'react'
import { Route } from 'react-router-dom'

// Layout
import PageLayout from './layouts/PageLayout';

// Pages
import PageHome from './pages/Home';
import restaurant from './pages/restaurant';
import loginPageOne from './pages/login/loginPageOne';
import loginPageTwo from './pages/login/loginPageTwo';


class Routes extends Component {
    render() {
        return (
            <PageLayout>
                <Route exact={true} path="/" component={PageHome} />
                <Route exact={true} path="/restaurant" component={restaurant} />
                <Route exact={true} path="/login" component={loginPageOne} />
                <Route exact={true} path="/continueLogin" component={loginPageTwo} />
            </PageLayout>
        )
    }
}

export default Routes;