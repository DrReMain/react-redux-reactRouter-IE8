import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as Actions from '../redux/actions'

import style from '../styles/less/app.less'

class PageOne extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        jsons: 'init state'
    }

    handleClick() {
        this.props.actions.fetchGithub('/static/data.json');
    }

    componentWillMount() {
        console.log('start fetch inside component')
        fetch('/static/data.json')
            .then((res) => res.json())
            .then((res) => {
                this.setState({jsons: JSON.stringify(res)})
            }).catch(function (err) {
            console.log('parsing failed', err)
        })

    }

    render() {

        const {json} = this.props;

        return (
            <div>
                <h1>PageOne</h1>
                <img className={style.img} src={require('../assets/react.png')}/>
                <p>
                    <button onClick={this.handleClick.bind(this)}>fetch</button>
                    点击发起fetch请求github数据
                </p>
                <div className={style.jsonData}>
                    {json}
                    <br/>
                    {this.state.jsons}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        json: state.fetchApi.json
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}


module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(PageOne)