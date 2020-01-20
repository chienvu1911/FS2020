import React, { Component } from 'react';
import LifeCycleChild from './LifeCycleChild';
import withCoupon from '../HigherOrder/withCoupon';

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'chien'
        }
        console.log('Inside Constructor parent', props);
    }
    
    componentWillMount() {
        console.log('Inside ComponentWillMount parent');       
    }
    
    componentDidMount() {
        console.log('Inside ComponentDidMount parent');       
    }
    
    onHandleChangeName = () => {
        this.setState({
            name: 'vu'
        })
    }

    onHandleUpdateName = (name) => {
        this.setState({
            name
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate inside parent component', nextProps, nextState);
        return nextProps.name !== this.props.name || nextState.name !== this.state.name;
    }
    
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate inside parent component', nextProps, nextState);
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate inside parent component', prevProps, prevState);
    }

    render() {
        console.log('Inside render method parent');
        
        return (
            <div>
                <LifeCycleChild name={this.state.name} updateName={this.onHandleUpdateName.bind(this)}/>
                <button onClick={this.onHandleChangeName}>Change Name</button>
            </div>
        );
    }
}

const LifeCycleWithCoupon = withCoupon(LifeCycle);
export default LifeCycleWithCoupon;