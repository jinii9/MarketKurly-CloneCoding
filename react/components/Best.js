import React from 'react';
import Header from './Header';
import ProductList from './ProductList';
// import styles from '../css/Best.module.css';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css'

const Best = () => {

    return (
        <div>
            <div>
                <Header />
            </div>           
            
            <div id="best-section">
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
                    
                    {/* Best.js -> Product.js : state값을 true로 바꿔서, Props로 값 전달 */}
                    
                    
                    
                    {/* <Product onCheck = {this.state.check} /> */}
                    <ProductList settings={'best'} />
   
                </div>


                {/* <!-- 위로 올리는 화살표 버튼 --> */}
                <div></div>

                {/* <!-- 옆에 서브 메뉴 --> */}
                <div></div>
            </div>
        </div>
    );
};

export default Best;