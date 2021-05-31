import React, { Component } from 'react'

class LifeCycleComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
    }

    static getDrivedStateFromProps() {
        console.log('getDrivedStateFromProps');
        
    }

    componentDidMount() {
        console.log('componentDidMount');
    }
    
    shouldComponentUpdate(nextprops, nextState) {
        console.log('shouldComponentUpdate');
        console.group('shouldComponentUpdate');
        console.log('next State', nextState );
        console.log('prevState', this.state);
        console.groupEnd();
        if(nextState.count >= 4) {
            return false
        }
        return true
    }

    getSnapshotBeforeUpdate() {
        console.log('getSnapshotBeforeUpdate');
        return null
    }
    
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    onChange = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        console.log('render');
        return (
            <div>
                <button onClick={this.onChange}>Component Button {this.state.count}</button>
            </div>
        )
    }
}

export default LifeCycleComp
