import React, { Component } from 'react'
import Model from './Model'
import ProducList from './ProducList'

export default class Product extends Component {
    //Thuộc tính state
    //Xác định các phần tử sẽ thay đổi khi người dùng handleEvent lên trang web 

    arrProduct = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./img/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./img/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./img/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./img/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./img/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./img/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./img/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./img/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./img/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]

    state = {
        glass: this.arrProduct[1].url,
        name: this.arrProduct[1].name,
        desc: this.arrProduct[1].desc,
    }

    //Xuất danh sách sản phẩm
    renderProduct = () => {
        let jsx = this.arrProduct.map((item, index)=> {
            return <div className="col-2">
                <div style={{border: '1px solid violet', padding: '5px'}} onClick={()=> {
                    // alert(`hello, ${item.name}`);
                    {this.changeGlasses(item)};
                }}>
                    <img src={item.url} style={{width: '100%'}}></img>
                </div>
            </div>
        })
        return jsx;
    }

    //Định nghĩa cho hàm onClick
    changeGlasses = (itemClick) => {
        this.setState({
            glass: itemClick.url,
            name: itemClick.name,
            desc: itemClick.desc,
        })
    }
    
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        {/* <Model/> */}
                        <div className="row">
                            <div className="col-6 d-flex justify-content-center">
                                <div style={{width: '300px', height: '350px', position: 'relative'}}>
                                    <img className="w-100 h-100" src="./img/model.jpg"></img>
                                    <div style={{position: 'absolute', bottom: '0', backgroundColor: '#ff5e008c', textAlign: 'left', padding: '5px'}}>
                                        <h4 className="text-primary">{this.state.name}</h4>
                                        <p className="text-white">{this.state.desc}</p>
                                    </div>
                                    <div style={{position: 'absolute', top: '25%', left: '50%', transform: 'translateX(-50%)'}}>
                                        <img className="w-100 h-100" src={this.state.glass}></img>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 d-flex justify-content-center">
                                <div style={{ width: '300px', height: '350px', position: 'relative'}}>
                                    <img className="w-100 h-100" src="./img/model.jpg"></img>
                                    <div style={{position: 'absolute', top: '25%', left: '50%', transform: 'translateX(-50%)'}}>
                                        <img className="w-100 h-100" src={this.state.glass}></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="row" style={{backgroundColor: 'white', padding: '31px 20px'}}>
                            {this.renderProduct()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
