import React, {Component} from 'react'
import {Router, Route} from 'react-router'

import HomePage from './views/HomePage'
import PageOne from './views/PageOne'
import PageTwo from './views/PageTwo'


module.exports = class App extends Component {
    render() {
        return (
            <Router>
                <Route path="/" component={HomePage}>
                    <Route path="/one" component={PageOne}/>
                    <Route path="/two" component={PageTwo}/>
                </Route>
            </Router>
        )
    }
}