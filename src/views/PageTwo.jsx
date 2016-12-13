import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Header from '../components/Header';
import Content from '../components/Content'
import * as Actions from '../redux/actions'

class HomePage extends Component {
    render() {

        const {todos, actions} = this.props;

        return (
            <div>
                <Header actions={actions} />
                <Content todos={todos} actions={actions} />
            </div>
        )

    }
}


function mapStateToProps(state) {
    return {
        todos: state.todos
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
)(HomePage);