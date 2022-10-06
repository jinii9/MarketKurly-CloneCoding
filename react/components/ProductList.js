import React, { useState, Fragment } from 'react';
// 슬라이더 import
import Slider from "react-slick";
import './slick-carousel/slick/slick.css';
import './slick-carousel/slick/slick-theme.css';
// classnames
import classnames from 'classnames';

function Product ({product, check}) {
    // console.log(check);
    const only = product.only;
    return(
        // <div className={classnames("product-wrap", {'swiper-slide': check})}>
        // <div className={check!=='best' ? "swiper-slide": 'product-wrap'}>
        check!=='best' ? (
        <div className="swiper-slide">
            <div className="swiper-slide-wrap">
                <div className="image-container">
                    <img name="image" src={product.image} alt="상품 이미지" loading="lazy" />
                    <button type="button"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="장바구니 아이콘" /></button>
                </div>
                
                <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <div className="product-price">
                        <div className="discount-rate">{product.discountRate}</div>
                        <div className="sales-price">{product.salesPrice}</div>
                        <div className="dimmed-price">{product.dimmedPrice}</div>
                    </div>
                </div>
            </div>  
        </div> ) : (
                    <div class="product-wrap">
                        <div class="image-wrap">
                            <img src={product.image} alt="상품 이미지" loading="lazy"/>
                            <button type="button"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="장바구니 아이콘" /></button>
                        </div>
                        <div class="info-wrap">
                            <div class="delivery">{product.delivery}</div>
                            <div class="title">{product.name}</div>
                            {/* <div class="price">5,400 원~</div> */}
                            <div className="product-price">
                                <div className="discount-rate">{product.discountRate}</div>
                                {/* <div className="sales-price">{product.salesPrice}</div> */}
                                <div className={classnames("sales-price", {'sales-price-menu': check})}>{product.salesPrice}</div>
                                <div className="dimmed-price">{product.dimmedPrice}</div>
                            </div>                            
                            <p>{product.description}</p>
                            {only===true &&
                                <div class="only-wrap">
                                    <div class="only">Kurly Only</div>
                                </div>
                            }
                        </div>
                    </div>
        )
    )
}
// sales-price-menu
const ProductList = ({settings}) => {
    // console.log('settings:' + settings)
    const [products, setProducts] = useState([
        {   
            id: 0,
            name: '[홀리차우] 스위트앤사워포크',
            image:'https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1657617005703l0.jpg',
            discountRate: '25%',
            salesPrice: '4,950원',
            dimmedPrice: '12,900원',
            delivery: '샛별배송',
            description: '매콤달콤한 매력의 밥도둑',

            only: true,            
        },
        {   
            id: 1,
            name: '[자연에찬] 강화순열무 나박김치',
            image:'https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1653034669549l0.jpeg',
            // discountRate: '25%',
            salesPrice: '4,950원',
            // dimmedPrice: '12,900원',
            delivery: '샛별배송',
            only: false, 
            description: '매콤달콤한 매력의 밥도둑',
        },
        {   
            id: 2,
            name: '[홀리차우] 스위트앤사워포크',
            image:'https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1653040305679l0.jpg',
            discountRate: '25%',
            salesPrice: '4,950원',
            dimmedPrice: '12,900원',
            only: true, 
            description: '매콤달콤한 매력의 밥도둑',
        },
        {   
            id: 3,
            name: '[홀리차우] 스위트앤사워포크',
            image:'https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1576637818415l0.jpg',
            discountRate: '25%',
            salesPrice: '4,950원',
            dimmedPrice: '12,900원',
            only: true, 
            description: '매콤달콤한 매력의 밥도둑',
        },
        {   
            id: 4,
            name: '[홀리차우] 스위트앤사워포크',
            image:'https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1657617005703l0.jpg',
            discountRate: '25%',
            salesPrice: '4,950원',
            dimmedPrice: '12,900원',
            delivery: '샛별배송',
            description: '매콤달콤한 매력의 밥도둑',

            only: true,            
        },
        {   
            id: 5,
            name: '[자연에찬] 강화순열무 나박김치',
            image:'https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1653034669549l0.jpeg',
            // discountRate: '25%',
            salesPrice: '4,950원',
            // dimmedPrice: '12,900원',
            delivery: '샛별배송',
            only: true, 
            description: '매콤달콤한 매력의 밥도둑',
        },
        {   
            id: 6,
            name: '[홀리차우] 스위트앤사워포크',
            image:'https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1653040305679l0.jpg',
            discountRate: '25%',
            salesPrice: '4,950원',
            dimmedPrice: '12,900원',
            only: true, 
            description: '매콤달콤한 매력의 밥도둑',
        },
        {   
            id: 7,
            name: '[홀리차우] 스위트앤사워포크',
            image:'https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1576637818415l0.jpg',
            discountRate: '25%',
            salesPrice: '4,950원',
            dimmedPrice: '12,900원',
            only: true, 
            description: '매콤달콤한 매력의 밥도둑',
        },
    ])

    // console.log(products);
    // const settings = {setting};
    // console.log(settings)
    return (
        settings==='best' ? (
            <Fragment>
                {products.map(product => (<Product product={product} key={product.id} check={"best"}/>))}
            </Fragment>
        ) : (
            <Fragment>
                <Slider {...settings}>
                    {products.map(product => (<Product product={product} key={product.id}/>))}
                </Slider>                
            </Fragment>          
        )
        
        
        
        
        // <div>
        // <Slider {...settings}>
        //      {products.map(product => (<Product product={product} key={product.id}/>))}
        // </Slider>
        // </div>
    );
};

export default ProductList;
// dots: false,
// infinite: true,
// speed: 500,
// slidesToShow: 4, // 슬라이드 수
// slidesToScroll: 1,
// prevArrow: <SamplePrevArrow />,            
// nextArrow: <SampleNextArrow />,
