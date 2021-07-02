import React, { Component } from 'react'

export default class XeHoi extends Component {
    render() {
        const {products} = this.props;
        const {xemChiTiet} = this.props;
        
        return (
            <div className="col-4">
                <div className="card">
                    <img src={products.img}></img>
                    <div className="card-body">
                        <h3>{products.name}</h3>
                        <h4>{products.price}</h4>
                        <button className="btn btn-success" data-target="#myModal" data-toggle="modal" onClick={()=> {xemChiTiet(products)}}>Xem chi tiết</button>
                    </div>
                </div>
            </div>
        )
    }
}
