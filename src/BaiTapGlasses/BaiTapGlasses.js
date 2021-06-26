import React, { Component } from 'react'
import Header from './Header'
import Product from './Product'
export default class BaiTapGlasses extends Component {
    render() {
        return (
            <div className="py-5" style={{backgroundImage: 'url(./img/background.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', position: 'relative'}}>
                <div className="overlay" style={{width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', position: 'absolute', top: '0'}}></div>
                <Header/>
                <Product/>
            </div>
        )
    }
}
