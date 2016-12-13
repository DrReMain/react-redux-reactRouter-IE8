import React, {Component} from 'react'

class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>PageOne</h1>
                <img src={require('../assets/react.png')}/>
            </div>
        )
    }
}

module.exports = HomePage