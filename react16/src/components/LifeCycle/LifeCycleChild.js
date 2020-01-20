import React, { PureComponent } from 'react';

class LifeCycleChild extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name
        }
        console.log('Inside Constructor child', props);
    }

    componentWillMount() {
        console.log('Inside ComponentWillMount child');       
    }
    
    componentDidMount() {
        console.log('Inside ComponentDidMount child');       
    }


    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log('ComponentWillReceiveProps inside child component', nextProps);
        this.setState({
            name: nextProps.name
        })
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('shouldComponentUpdate inside child component', nextProps, nextState);
    //     return nextProps.name !== this.props.name || nextState.name !== this.state.name;
    // }
    
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate inside child component', nextProps, nextState);
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate inside child component', prevProps, prevState);
    }
    
    onHandleUpdateParent = () => {
        this.props.updateName('zoro');    
    }

    render() {
        console.log('Inside render method child');
        return (
            <div>
                <button onClick={this.onHandleUpdateParent}>Update name of parent</button>
            </div>
        );
    }
}

export default LifeCycleChild;