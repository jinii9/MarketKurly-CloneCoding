// 여러개의 Product 컴포넌트들을 보여줌 (일단 나는 여기다가 리스트들 작성)
import React, { Component } from 'react';
import Product from './Product';
// 슬라이더 import
import Slider from "react-slick";
import './slick-carousel/slick/slick.css';
import './slick-carousel/slick/slick-theme.css';

// import styled from "styled-components";

// const div = styled.div`
//     width: 100%;
//     height: 50px;
//     background: red;
// `;

// import styled from "@emotion/styled";

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, position:"absolute", top: "calc(45% - 50px)", width:"60px", height:"60px", backgroundImage: "url("+"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPGRlZnM+CiAgICAgICAgPGZpbHRlciB4PSItMTQlIiB5PSItMTQlIiB3aWR0aD0iMTI4JSIgaGVpZ2h0PSIxMjglIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJhIj4KICAgICAgICAgICAgPGZlT2Zmc2V0IGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiLz4KICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMiIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIi8+CiAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4wOCAwIiBpbj0ic2hhZG93Qmx1ck91dGVyMSIgcmVzdWx0PSJzaGFkb3dNYXRyaXhPdXRlcjEiLz4KICAgICAgICAgICAgPGZlT2Zmc2V0IGR5PSIxIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIyIi8+CiAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4wMyAwIiBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIyIiByZXN1bHQ9InNoYWRvd01hdHJpeE91dGVyMiIvPgogICAgICAgICAgICA8ZmVNb3JwaG9sb2d5IHJhZGl1cz0iLjUiIG9wZXJhdG9yPSJkaWxhdGUiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dTcHJlYWRPdXRlcjMiLz4KICAgICAgICAgICAgPGZlT2Zmc2V0IGluPSJzaGFkb3dTcHJlYWRPdXRlcjMiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIzIi8+CiAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4wMiAwIiBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIzIiByZXN1bHQ9InNoYWRvd01hdHJpeE91dGVyMyIvPgogICAgICAgICAgICA8ZmVNZXJnZT4KICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0ic2hhZG93TWF0cml4T3V0ZXIxIi8+CiAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49InNoYWRvd01hdHJpeE91dGVyMiIvPgogICAgICAgICAgICAgICAgPGZlTWVyZ2VOb2RlIGluPSJzaGFkb3dNYXRyaXhPdXRlcjMiLz4KICAgICAgICAgICAgPC9mZU1lcmdlPgogICAgICAgIDwvZmlsdGVyPgogICAgICAgIDxjaXJjbGUgaWQ9ImIiIGN4PSIyNSIgY3k9IjI1IiByPSIyNSIvPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSA1NSA1KSI+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iIzAwMCIgZmlsdGVyPSJ1cmwoI2EpIiB4bGluazpocmVmPSIjYiIvPgogICAgICAgICAgICA8dXNlIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNiIi8+CiAgICAgICAgPC9nPgogICAgICAgIDxwYXRoIGQ9Ik0zMi43MTUgMzguNjk5YTEgMSAwIDAgMS0xLjMxOS4wOThsLS4wOTUtLjA4Mi04LTcuODE3YTEgMSAwIDAgMS0uMTA4LTEuMzA2bC4wOC0uMDk2IDcuNzIzLTguMTgyYTEgMSAwIDAgMSAxLjUzNSAxLjI3NmwtLjA4LjA5Ni03LjA0OSA3LjQ2OSA3LjI5NyA3LjEzYTEgMSAwIDAgMSAuMDk4IDEuMzE5bC0uMDgyLjA5NXoiIGZpbGw9IiMzMzMiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogICAgPC9nPgo8L3N2Zz4K"+")", zIndex:"100"}}
        onClick={onClick}
      />
    );
}
  
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={className}
        style={{ ...style, position:"absolute", top: "calc(45% - 50px)", width:"60px", height:"60px", transform: "translate(0%, -50%) rotate(180deg)", backgroundImage: "url("+"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPGRlZnM+CiAgICAgICAgPGZpbHRlciB4PSItMTQlIiB5PSItMTQlIiB3aWR0aD0iMTI4JSIgaGVpZ2h0PSIxMjglIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJhIj4KICAgICAgICAgICAgPGZlT2Zmc2V0IGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiLz4KICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMiIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIi8+CiAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4wOCAwIiBpbj0ic2hhZG93Qmx1ck91dGVyMSIgcmVzdWx0PSJzaGFkb3dNYXRyaXhPdXRlcjEiLz4KICAgICAgICAgICAgPGZlT2Zmc2V0IGR5PSIxIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIyIi8+CiAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4wMyAwIiBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIyIiByZXN1bHQ9InNoYWRvd01hdHJpeE91dGVyMiIvPgogICAgICAgICAgICA8ZmVNb3JwaG9sb2d5IHJhZGl1cz0iLjUiIG9wZXJhdG9yPSJkaWxhdGUiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dTcHJlYWRPdXRlcjMiLz4KICAgICAgICAgICAgPGZlT2Zmc2V0IGluPSJzaGFkb3dTcHJlYWRPdXRlcjMiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIzIi8+CiAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4wMiAwIiBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIzIiByZXN1bHQ9InNoYWRvd01hdHJpeE91dGVyMyIvPgogICAgICAgICAgICA8ZmVNZXJnZT4KICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0ic2hhZG93TWF0cml4T3V0ZXIxIi8+CiAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49InNoYWRvd01hdHJpeE91dGVyMiIvPgogICAgICAgICAgICAgICAgPGZlTWVyZ2VOb2RlIGluPSJzaGFkb3dNYXRyaXhPdXRlcjMiLz4KICAgICAgICAgICAgPC9mZU1lcmdlPgogICAgICAgIDwvZmlsdGVyPgogICAgICAgIDxjaXJjbGUgaWQ9ImIiIGN4PSIyNSIgY3k9IjI1IiByPSIyNSIvPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSA1NSA1KSI+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iIzAwMCIgZmlsdGVyPSJ1cmwoI2EpIiB4bGluazpocmVmPSIjYiIvPgogICAgICAgICAgICA8dXNlIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNiIi8+CiAgICAgICAgPC9nPgogICAgICAgIDxwYXRoIGQ9Ik0zMi43MTUgMzguNjk5YTEgMSAwIDAgMS0xLjMxOS4wOThsLS4wOTUtLjA4Mi04LTcuODE3YTEgMSAwIDAgMS0uMTA4LTEuMzA2bC4wOC0uMDk2IDcuNzIzLTguMTgyYTEgMSAwIDAgMSAxLjUzNSAxLjI3NmwtLjA4LjA5Ni03LjA0OSA3LjQ2OSA3LjI5NyA3LjEzYTEgMSAwIDAgMSAuMDk4IDEuMzE5bC0uMDgyLjA5NXoiIGZpbGw9IiMzMzMiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogICAgPC9nPgo8L3N2Zz4K"+")"}}
        onClick={onClick}
        />
    );
}

class ProductList extends Component {

    state = {
        information: [
            {   
                id: 0,
                name: '[홀리차우] 스위트앤사워포크',
                image:'https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1657617005703l0.jpg',
                discountRate: '25%',
                salesPrice: '4,950원',
                dimmedPrice: '12,900원',
            },
            {   
                id: 1,
                name: '[자연에찬] 강화순열무 나박김치',
                image:'https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1653034669549l0.jpeg',
                // discountRate: '25%',
                salesPrice: '4,950원',
                // dimmedPrice: '12,900원',
            },
            {   
                id: 2,
                name: '[홀리차우] 스위트앤사워포크',
                image:'https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1653040305679l0.jpg',
                discountRate: '25%',
                salesPrice: '4,950원',
                dimmedPrice: '12,900원',
            },
            {   
                id: 3,
                name: '[홀리차우] 스위트앤사워포크',
                image:'https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1576637818415l0.jpg',
                discountRate: '25%',
                salesPrice: '4,950원',
                dimmedPrice: '12,900원',
            },
            {   
                id: 4,
                name: '[홀리차우] 스위트앤사워포크',
                image:'https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1576637818415l0.jpg',
                discountRate: '25%',
                salesPrice: '4,950원',
                dimmedPrice: '12,900원',
            },
        ]
    }

    render() {
        // 슬라이더 셋팅
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4, // 슬라이드 수
            slidesToScroll: 1,
            prevArrow: <SamplePrevArrow />,            
            nextArrow: <SampleNextArrow />,

        };

        const {information} = this.state;
        const list = information.map(
            info => (<Product info={info} key={info.id} />)
        )
         
        
        return (
            
            <div>
                <Slider {...settings}>
                    {list}
                {/* <Product /> */}
                </Slider>


            </div>

            
        );
    }
}
export default ProductList;