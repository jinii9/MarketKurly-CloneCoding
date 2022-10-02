import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

class Best extends Component {
    render() {
        return (
            <div>
                <div>
                    <Header />
                </div>

                {/*  */}
                <div id="section">
                    <div class="best-text">BEST 상품</div>
                    <div class="best-filter">
                        <div class="total">총 302개</div>
                        <ul class="filter-kind">
                            <li class="kind-wrap">
                                <a class="kind-item">추천순</a>
                                <a class="kind-item__info"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xMiA1YzMuODY0IDAgNyAzLjEzNiA3IDdzLTMuMTM2IDctNyA3LTctMy4xMzYtNy03IDMuMTM2LTcgNy03em0wIDEuM0E1LjcwOCA1LjcwOCAwIDAgMCA2LjMgMTJjMCAzLjE0MiAyLjU1OCA1LjcgNS43IDUuNyAzLjE0MiAwIDUuNy0yLjU1OCA1LjctNS43IDAtMy4xNDItMi41NTgtNS43LTUuNy01Ljd6bS0uMTIyIDcuOTgxYy41NTIgMCAuODk4LjM0Ljg5OC44NjUgMCAuNTE5LS4zNDYuODYtLjg5OC44Ni0uNTQgMC0uODk3LS4zNDEtLjg5Ny0uODYgMC0uNTI0LjM1Ny0uODY1Ljg5Ny0uODY1ek0xMi4wMyA4YzEuNDggMCAyLjQ3Ljg1NCAyLjQ3IDIuMDQ5IDAgLjgyNy0uNDEgMS40MDUtMS4xNDYgMS44NDMtLjcwOC40MTYtLjkwOC42OTItLjkwOCAxLjIyN3YuMzA4aC0xLjI1NGwtLjAwNi0uMzY4Yy0uMDQ4LS44MS4yNjUtMS4yOTcgMS4wMTEtMS43MzVsLjE1OS0uMDk5Yy41NDgtLjM1Ni43MzktLjYzNy43MzktMS4xMjggMC0uNTYyLS40NTQtLjk2Ny0xLjEzNi0uOTY3LS42OTcgMC0xLjE0NS40MjEtMS4xODkgMS4wOEg5LjVDOS41NDMgOC45MyAxMC40MjQgOCAxMi4wMyA4eiIgZmlsbD0iI0NDQyIgZmlsbC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=" alt="물음표" /></a>
                                {/* <!-- <div class="info__detail">
                                    소비자 인기도(판매량, 판매금액, 조회수 등), 상품 출시일, 수요 적합성, 상품 운영상 필요 등을 종합적으로 고려한 순서입니다.
                                </div> --> */}
                            </li>
                            <li><a class="kind-item">신상품순</a></li>
                            <li><a class="kind-item">판매량순</a></li>
                            <li><a class="kind-item">혜택순</a></li>
                            <li><a class="kind-item">낮은 가격순</a></li>
                            <li><a class="kind-item">높은 가격순</a></li>

                        </ul>
                    </div>
                    <div class="best-main">

                        

                        {/* <div class="product-wrap">
                            <div class="image-wrap">
                                <img src="https://img-cf.kurly.com/cdn-cgi/image/width=676,format=auto/shop/data/goods/1655775819130l0.jpg" alt="상품 이미지" loading="lazy" />
                                <button type="button"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="장바구니 아이콘" /></button>
                            </div>
                            <div class="info-wrap">
                                <div class="delivery">샛별배송</div>
                                <div class="title">[스윗밸런스] 오늘의 샐러드 8종 (리뉴얼)</div>
                                <div class="price">5,400 원~</div>
                                <p>다채로운 토핑을 얹은 샐러드</p>
                                <div class="only-wrap">
                                    <div class="only">Kurly Only</div>
                                </div>
                            </div>
                        </div>
                        <div class="product-wrap">
                            <div class="image-wrap">
                                <img src="https://img-cf.kurly.com/cdn-cgi/image/width=676,format=auto/shop/data/goods/1655775819130l0.jpg" alt="상품 이미지" loading="lazy" />
                                <button type="button"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="장바구니 아이콘" /></button>
                            </div>
                            <div class="info-wrap">
                                <div class="delivery">샛별배송</div>
                                <div class="title">[스윗밸런스] 오늘의 샐러드 8종 (리뉴얼)</div>
                                <div class="price">5,400 원~</div>
                                <p>다채로운 토핑을 얹은 샐러드</p>
                                <div class="only-wrap">
                                    <div class="only">Kurly Only</div>
                                </div>
                            </div>
                        </div>
                        <div class="product-wrap">
                            <div class="image-wrap">
                                <img src="https://img-cf.kurly.com/cdn-cgi/image/width=676,format=auto/shop/data/goods/1655775819130l0.jpg" alt="상품 이미지" loading="lazy" />
                                <button type="button"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="장바구니 아이콘" /></button>
                            </div>
                            <div class="info-wrap">
                                <div class="delivery">샛별배송</div>
                                <div class="title">[스윗밸런스] 오늘의 샐러드 8종 (리뉴얼)</div>
                                <div class="price">5,400 원~</div>
                                <p>다채로운 토핑을 얹은 샐러드</p>
                                <div class="only-wrap">
                                    <div class="only">Kurly Only</div>
                                </div>
                            </div>
                        </div>
                        <div class="product-wrap">
                            <div class="image-wrap">
                                <img src="https://img-cf.kurly.com/cdn-cgi/image/width=676,format=auto/shop/data/goods/1655775819130l0.jpg" alt="상품 이미지" loading="lazy" />
                                <button type="button"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="장바구니 아이콘" /></button>
                            </div>
                            <div class="info-wrap">
                                <div class="delivery">샛별배송</div>
                                <div class="title">[스윗밸런스] 오늘의 샐러드 8종 (리뉴얼)</div>
                                <div class="price">5,400 원~</div>
                                <p>다채로운 토핑을 얹은 샐러드</p>
                                <div class="only-wrap">
                                    <div class="only">Kurly Only</div>
                                </div>
                            </div>
                        </div>
                        <div class="product-wrap">
                            <div class="image-wrap">
                                <img src="https://img-cf.kurly.com/cdn-cgi/image/width=676,format=auto/shop/data/goods/1655775819130l0.jpg" alt="상품 이미지" loading="lazy" />
                                <button type="button"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="장바구니 아이콘" /></button>
                            </div>
                            <div class="info-wrap">
                                <div class="delivery">샛별배송</div>
                                <div class="title">[스윗밸런스] 오늘의 샐러드 8종 (리뉴얼)</div>
                                <div class="price">5,400 원~</div>
                                <p>다채로운 토핑을 얹은 샐러드</p>
                                <div class="only-wrap">
                                    <div class="only">Kurly Only</div>
                                </div>
                            </div>
                        </div> */}
                    </div>


                    {/* <!-- 위로 올리는 화살표 버튼 --> */}
                    <div></div>

                    {/* <!-- 옆에 서브 메뉴 --> */}
                    <div></div>
                </div>
            </div>
        );
    }
}

export default Best;