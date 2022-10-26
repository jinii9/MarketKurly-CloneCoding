import React, { useState, Fragment, useEffect } from 'react';
// 슬라이더 import
import Slider from "react-slick";
import './slick-carousel/slick/slick.css';
import './slick-carousel/slick/slick-theme.css';
// classnames
import classnames from 'classnames';
// 스켈레톤
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import data from "../data";

import { Link } from 'react-router-dom';
// 리덕스
import { useDispatch } from 'react-redux';
import { BasketAction } from '../reducers/basketReducer';

function SkeletonCard () {
    return (
        <>
            {Array(6)
            .fill()
            .map((item, index) => (
                <div class="product-wrap">
                <div class="image-wrap">
                    {/* <img src={product.image} alt="상품 이미지" loading="lazy"/> */}
                    {/* <button type="button"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="장바구니 아이콘" /></button> */}
                    <Skeleton width={"100%"} height={"100%"} />
                </div>
                <div class="info-wrap">
                    <div class="delivery"><Skeleton height={20} width={"calc(100% + 10px)" }/></div>
                    <div class="title"><Skeleton height={20} width={"calc(100% + 10px)" }/></div>
                    {/* <div class="price">5,400 원~</div> */}
                    <div className="product-price">
                        <Skeleton height={20} width={"200px"}/>
                        {/* <div className="discount-rate"><Skeleton/></div> */}
                        {/* <div className="sales-price">{product.salesPrice}</div> */}
                        {/* <div className={classnames("sales-price", {'sales-price-menu': check})}>{product.salesPrice}</div> */}
                        {/* <div className="dimmed-price">{<Skeleton/>}</div> */}
                    </div>                            
                    {/* <p><Skeleton/></p> */}
                    {/* {only===true &&
                        <div class="only-wrap">
                            <div class="only">Kurly Only</div>
                        </div>
                    } */}
                </div>
            </div>
            ))}
        </>
    )
}

function Product ({product, check}) {
    const dispatch = useDispatch();
    // 장바구니 리덕스 추가
    const goAction = (e, item) => {
        console.log(item);
        e.preventDefault();
        dispatch(
            BasketAction({
                id: item.id,
                name: item.name,
                image: item.image,
                salesPrice: item.salesPrice,
                packingType: item.packingType,
            }),
        );
        // localStorage부분

    }
    
    

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
                    <div class="product-wrap"> {/* 베스트페이지 */}
                        {/* <Link to="/Detail" state={{ */}
                        <Link to={`/Detail/${product.id}`} state={{
                            name: product.name,
                            image: product.image,
                            discountRate: product.discountRate,
                            salesPrice: product.salesPrice,
                            dimmedPrice: product.dimmedPrice,
                            delivery: product.delivery,
                            only: product.only,
                            description: product.description,
                            packingType: product.packingType,
                        }}>
                        <div class="image-wrap">
                            <img src={product.image} alt="상품 이미지" loading="lazy"/>
                            {/* <a href='javascript:void(0);'> */}
                                <button type="button" onClick={(e) => goAction(e,product)}><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="장바구니 아이콘" /></button>
                            {/* </a> */}
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
                        </Link>
                    </div>
        )
    )
}
// sales-price-menu
const ProductList = ({settings, onProducts}) => {
    // console.log('settings:' + settings)
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const dummyData = data.dummyData;
    
    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setProducts(dummyData);
            // console.log(dummyData);
            setLoading(false);

        },3000);
        return () => clearTimeout(timer);
    } , [])

    // console.log(products)
    // onProducts(products);
    // console.log(products);
    // const settings = {setting};
    // console.log(settings)
    return (
        settings==='best' ? (
            // <Fragment>
            //     {products.map(product => (<Product product={product} key={product.id} check={"best"}/>))}
            // </Fragment>

            <Fragment>
                {products.length > 0 ? (
                    products.map(product => (<Product product={product} key={product.id} check={"best"}/>))
                ) : (<SkeletonCard/>)}
                {/* (products.map(product => (<Loading product={product}/>)))} */}
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
