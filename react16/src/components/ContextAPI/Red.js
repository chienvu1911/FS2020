import React, { Component } from 'react';
import Blue from './Blue';
import AppContext from './AppContext';

class Red extends Component {
    render() {
        return (
            <div className="red">
                {this.context.number}
                <Blue />
            </div>
        );
    }
}

Red.contextType = AppContext;

export default Red;
