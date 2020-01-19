import React, { Component } from 'react';

class UpdateState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                name: ''
            }
        }
    }
    
    onHandleUpdateState = () => {
        let data = {...this.state.data, name: 'chien'};
        this.setState({
            data
        })
    }

    render() {
        return (
            <div>
                {this.state.data.name}
                <button onClick={this.onHandleUpdateState}>
                    Update
                </button>
            </div>
        );
    }
}

export default UpdateState;