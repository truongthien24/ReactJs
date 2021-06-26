import React, { Component } from 'react'

export default class ModelLeft extends Component {
    render() {
        return (
            <div style={{width: '300px', height: '350px', position: 'relative'}}>
                <img className="w-100 h-100" src="./img/model.jpg"></img>
                <p style={{position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'orange'}}>Tui tên là Thiện nè</p>
            </div>
        )
    }
}
