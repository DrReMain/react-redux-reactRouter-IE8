import React, {Component} from 'react'
import NavLink from './NavLink'

class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>React Router Tutorial</h1>
                <ul role="nav">
                    <li><NavLink to="/one">ONE</NavLink></li>
                    <li><NavLink to="/two">TWO</NavLink></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

module.exports = HomePage