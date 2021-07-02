import React, { Component } from 'react'
import XeHoi from './XeHoi';
export default class BaiTapXeHoi extends Component {
    //Lấy dữ liệu từ có sẵn
    products = [
        { id: 1, name: 'black car', img: './img/black-car.jpg', price: 1000 },
        { id: 2, name: 'red car', img: './img/red-car.jpg', price: 2000 },
        { id: 3, name: 'silver car', img: './img/silver-car.jpg', price: 3000 },
        { id: 3, name: 'Steel car', img: './img/steel-car.jpg', price: 4000 }
    ];

    //Bắt đầu dùng thuộc tính state để xác định các phần tử, thẻ sẽ thay đổi nội dung khi người dùng handle event lên trang web
    state = {
        hinhAnh: this.products[0].img,
        name: this.products[0].name,
        price: this.products[0].price 
    }


    //Định nghĩa hàm renderXeHoi()
    renderXeHoi = () => {
        let jsx = this.products.map((item,index)=> {
            return <XeHoi products={item} xemChiTiet={this.xemChiTiet}/>
        }); 
        return jsx;
    }


    //Định nghĩa nút xemChiTiet
    xemChiTiet = (sanPhamClick) => {
        this.setState({
            hinhAnh: sanPhamClick.img,
            name: sanPhamClick.name,
            price: sanPhamClick.price
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>Danh sách xe</h2>
                        </div>
                        {this.renderXeHoi()}
                    </div>
                </div>
                <div className="modal" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3>{this.state.name}</h3>
                                <div className="close" data-dismiss="modal">&times;</div>
                            </div>
                            <div className="modal-body">
                                <img src={this.state.hinhAnh} style={{width: '100%'}}></img>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button className="btn btn-primary" onClick = {()=> {
                                    alert('Chưa save được :v');
                                }}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
