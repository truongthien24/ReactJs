import React, { Component } from 'react'

export default class ProducList extends Component {

    render() {
        return (
            <div className="row" style={{backgroundColor: 'white', padding: '31px 20px'}}>
                {this.renderProduct()}
            </div>
        )
    }
}
