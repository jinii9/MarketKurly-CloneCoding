import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import ProductList from './ProductList';
import Slide from './Slide';
import Timer from './Timer';
import { useSelector } from "react-redux";

const Home = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            
            {/* -----------------------------section-------------------------------- */}
            <div id="home-section">
                <div type="MAIN-BANNERS" className="main-banner">
                    {/* <!-- 나중에 swiper 이용해서 바꿔줄 것 --> */}
                    <div className="main-banner__main">
                        <img className="main-banner-image" src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/28125769-9291-4b7f-83cd-e42b762b0765.jpg" alt="main-banner-1" />
                        
                    </div>
                    
                    <div className="main-banner__arrow"></div>
                    
                    <div className="main-banner__num"></div>
                </div>

                <div type="TODAY-RECOMMEND-PRODUCTS" className="recommend">
                    <div className="recommend__text">이 상품 어때요?</div>
                    <div className="swiper mySwiper">
                        <div className="swiper-wrapper">
                            {/* 제품 슬라이드 */}
                                {/* <div className="swiper-slide">
                                    <div className="swiper-slide-wrap">
                                    <div className="image-container">
                                        <img src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1653034669549l0.jpeg" alt="상품 이미지" loading="lazy" />
                                        <button type="button"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="장바구니 아이콘" /></button>
                                    </div>
                                    
                                    <div className="product-info">
                                        <h3 className="product-name">[홀리차우] 스위트앤사워포크</h3>
                                        <div className="product-price">
                                            <div className="discount-rate">25%</div>
                                            <div className="sales-price">4,950원</div>
                                            <div className="dimmed-price">12,900원</div>
                                        </div>
                                    </div>
                                    </div>  
                                </div> */}


                                <Slide />
                                {/* <ProductList /> */}


                            {/* 제품 슬라이드 */}
                        </div>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                    </div>
                    <button type="button"></button>
                </div>

                <div type="LINE-BANNERS" className="line-banner">
                    <a href="https://www.kurly.com/shop/goods/goods_list.php?category=580">
                        <img src="https://product-image.kurly.com/banner/random-band/pc/img/44664545-bd54-4954-bb5d-c00ee3f82124.jpg" alt />
                    </a>
                </div>

                <div type="SPECIAL-DEALS" className="special-deal">
                    <div className="deal-time">
                        <h2>일일특가</h2>
                        <h3>24시간 한정 특가</h3>
                        <div className="time-count">
                            <span className="time-count__img"></span>
                            {/* <span className="time-count__timer" id="timer"></span> */}
                            {/* <Timer /> */}
                        </div>
                        <p>망설이면 늦어요!</p>
                    </div>
                    <div className="deal-info">
                        <div className="deal-info__image">
                            <img src="https://product-image.kurly.com/product/image/48b28fcb-fde8-4f3e-88e1-a4ac209ddd55.jpg" alt="상품 이미지" loading="lazy" />
                            <span>일일특가</span>
                            <button type="button"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="장바구니 아이콘" /></button>
                        </div>
                        <div className="deal-info__text">
                            <div className="product-description">닭갈비와 떡볶이의 오묘한 조화</div>
                            <div className="product-name">춘천 국물 닭갈비 떡볶이</div>
                            <div className="product-price-wrap">
                                <div className="discount-rate">30%</div>
                                <div className="sales-price">8,750원</div>
                                <div className="dimmed-price">12,500원</div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ------------------------------footer--------------------------*/}
            <div id="footer">
                <div className="footer-wrap"></div>
                <div className="end"></div>
            </div>



        </div>
    );
};

export default Home;