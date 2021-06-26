import React, { Component } from 'react'
import ModelLeft from './ModelLeft'
import ModelRight from './ModelRight'

export default class Model extends Component {
    
    render() {
        return (
            <div className="row">
                <div className="col-6">
                    <ModelLeft/>
                </div>
                <div className="col-6">
                    <ModelRight/>
                </div>
            </div>
        )
    }
}
