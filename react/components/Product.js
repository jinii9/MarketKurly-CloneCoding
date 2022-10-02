// 각 Product 정보를 보여주는 컴포넌트
import React, { Component } from 'react';

class Product extends Component {
    // static defaultProps = {
    //     {   
    //         info: {
    //             id: 0,
    //             name: '[홀리차우] 스위트앤사워포크',
    //             image:'https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1653034669549l0.jpeg',
    //             discountRate: '25%',
    //             salesPrice: '4,950원',
    //             dimmedPrice: '12,900원',
    //         }
    //     }
    // }

    // state = {
    //     id: '',
    //     name: '',
    //     image:'',
    //     discountRate: '',
    //     salesPrice: '',
    //     dimmedPrice: '',
    //     only: true, 
    //     description: '매콤달콤한 매력의 밥도둑',
        
    //     check: false,
    // }

    
    // handleChange = (e) => { // e:이벤트 객체
    //     this.setState({
    //         [e.target.name]: e.target.value // 이벤트 target: input, value: 가지고 있는 value 값
    //     });
    // }
    // handleSend = (e) => {
    //     e.preventDefault();
    //     this.props.onShow(this.state);
    // }

    render() {

        const {id, name, image, discountRate, salesPrice, dimmedPrice} = this.props.info;
        // this.props.onShow(this.state);
        return (
            <div className="swiper-slide">
                <div className="swiper-slide-wrap">
                    <div className="image-container">
                        <img name="image" src={image} alt="상품 이미지" loading="lazy" />
                        <button type="button"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="장바구니 아이콘" /></button>
                    </div>
                    
                    <div className="product-info">
                        <h3 className="product-name">{name}</h3>
                        <div className="product-price">
                            <div className="discount-rate">{discountRate}</div>
                            <div className="sales-price">{salesPrice}</div>
                            <div className="dimmed-price">{dimmedPrice}</div>
                        </div>
                    </div>
                </div>  
            </div>
        );
    }
}

export default Product;