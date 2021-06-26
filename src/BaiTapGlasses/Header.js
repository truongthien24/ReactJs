import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="container-fluid" style={{position: 'absolute', top: '0'}}>
                <div className="row">
                    <div className="col-12 text-white" style={{backgroundColor: 'rgba(0,0,0,0.5)', padding: '10px'}}>
                        <h2>TRY GLASS APP ONLINE</h2>
                    </div>
                </div>
            </div>
        )
    }
}
