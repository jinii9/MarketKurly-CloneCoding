import {React, useEffect, useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import {useLocation} from 'react-router-dom';
import { NumericFormat } from 'react-number-format';
import styled, { createGlobalStyle }  from 'styled-components';


const Detail = () => {

const location = useLocation();
const item = location.state;
// console.log(item);

const [count, setCount] = useState(1);
const [total, setTotal] = useState(item.salesPrice);
// const [countCheck, setCountCheck] = useState(false);
console.log(count);
// console.log(countCheck);


let originalPrice = item.salesPrice;
originalPrice = originalPrice.substring(0, originalPrice.length-1).replace(",","");
originalPrice = parseInt(originalPrice, 10);
// console.log('num:' + num);



const addCount = () => {
    let changePrice = originalPrice;

    setCount(count + 1);
    // // console.log('test'+count);
    // console.log('item' + item.salesPrice);
    
    changePrice = originalPrice * (count+1);
    console.log('바뀐 값:' + changePrice);

    changePrice = changePrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    changePrice = changePrice + '원'; 

    // console.log('total ' + num);
    setTotal(changePrice);
}

const minCount = () => {
    let changePrice = originalPrice;

    if(count < 2) {
        setCount(1);
        setTotal(item.salesPrice);
    } else {
        setCount(count-1);

        changePrice = originalPrice * (count-1);;
        changePrice = changePrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        changePrice = changePrice + '원';
        setTotal(changePrice);
    }
        
}



    return (
        <>
            <GlobalStyle />
            <Header />
            <Section>
                <ImageWrap image={item.image} />
                <ProductWrap>
                    <Delivery>{item.delivery}</Delivery>
                    <TitleWrap>
                        <Title>{item.name}</Title>
                        <SharingButton />
                    </TitleWrap>
                    
                    <Description>{item.description}</Description>
                    <PriceWrap>
                        <DiscountRate>{item.discountRate}</DiscountRate>
                        <SalesPrice>
                            {/* <span>{item.salesPrice}</span> */}
                            {item.salesPrice}
                        </SalesPrice>
                    </PriceWrap>
                    <DimmedPrice>{item.dimmedPrice}</DimmedPrice>

                    <Benefit>로그인 후, 할인 및 적립 혜택이 제공됩니다.</Benefit>

                    <ProductInfoWrap>
                        <ProductInfoList>
                            <ProductInfoTitle>배송</ProductInfoTitle>
                            <ProductInfoDes>
                                <p>{item.delivery}</p>
                                <p>23시 전 주문 시 내일 아침 7시 전 도착 
                                    <br/> (대구·부산·울산 샛별배송 운영시간 별도 확인)
                                </p>
                            </ProductInfoDes>
                        </ProductInfoList>
                        <ProductInfoList>
                            <ProductInfoTitle>판매자</ProductInfoTitle>
                            <ProductInfoDes>
                                <p>컬리</p>
                            </ProductInfoDes>
                        </ProductInfoList>
                        <ProductInfoList>
                            <ProductInfoTitle>포장타입</ProductInfoTitle>
                            <ProductInfoDes>
                                <p>{item.packingType}</p>
                                <p>택배배송은 에코 포장이 스트로폼으로 대체됩니다.</p>
                            </ProductInfoDes>
                        </ProductInfoList>
                        <ProductInfoList>
                            <ProductInfoTitle>판매단위</ProductInfoTitle>
                            <ProductInfoDes>
                                <p>1팩</p>
                            </ProductInfoDes>
                        </ProductInfoList>
                        <ProductInfoList>
                            <ProductInfoTitle>중량/용량</ProductInfoTitle>
                            <ProductInfoDes>
                                <p>300g</p>
                            </ProductInfoDes>
                        </ProductInfoList>
                        <ProductInfoList>
                            <ProductInfoTitle>원산지</ProductInfoTitle>
                            <ProductInfoDes>
                                <p>상시페이지 별도포기</p>
                            </ProductInfoDes>
                        </ProductInfoList>
                        <ProductInfoList>
                            <ProductInfoTitle>알레르기정보</ProductInfoTitle>
                            <ProductInfoDes>
                                <p>- 대두, 밀, 쇠고기, 닭고기, 우유, 조개류(굴) 함유<br />
                                    - 본 제품은 알류, 메밀, 땅콩, 고등어, 게, 새우, 돼지고기, 복숭아, 토마토, 아황산류, 호두, 오징어, 조개류(전복, 홍합 포함), 잣을 사용한 제품과 같은 제조시설에서 제조
                                </p>
                            </ProductInfoDes>
                        </ProductInfoList>
                        <ProductInfoList>
                            <ProductInfoTitle>유통기한(또는 소비기한)정보</ProductInfoTitle>
                            <ProductInfoDes>
                                <p>출고일 기준, 유통기한 만기 180일 이상 남은 상품을 보내드립니다. (총유통기한:365일)</p>
                            </ProductInfoDes>
                        </ProductInfoList>
                        <ProductInfoList>
                            <ProductInfoTitle>상품선택</ProductInfoTitle>
                            <ProductInfoDes NumberWrapValid="1px solid rgb(244,244,244)">
                                <p>{item.name}</p>
                                <p>적립제외상품</p>
                                <NumberWrap>
                                    <Number>
                                       {/* <button type='button' aria-label='수량 내리기' onClick={minCount} count>-</button>  */}
                                       <DownBtn type='button' aria-label='수량 내리기' onClick={minCount} count={count}></DownBtn>
                                       <div>{count}</div>
                                       {/* <button type='button' aria-label='수량 올리기' onClick={addCount}></button>  */}
                                       <UpBtn type='button' aria-label='수량 올리기' onClick={addCount} count={count}></UpBtn>
                                    </Number>
                                    
                                    <NumberPrice>
                                        <DimmedPrice dimmedValid>{item.dimmedPrice}</DimmedPrice>
                                        <SalesPrice salesPrice>{item.salesPrice}</SalesPrice>
                                    </NumberPrice>
                                </NumberWrap>
                            </ProductInfoDes>
                        </ProductInfoList>

                        <ProductInfoList totalPrice>
                            <TotalPrice>
                                <span>총 상품금액 :</span>
                                <span >{total}</span>
                            </TotalPrice>
                            <FinalBtn></FinalBtn>
                        </ProductInfoList>
                    </ProductInfoWrap>
                </ProductWrap>
            </Section>

            <Footer />
            
        
            <Nav></Nav> {/* 사이드바 */} 
            <SelectButton></SelectButton> {/* 상품선택 버튼 */}
            <Top></Top> {/* 위로 올라가기 */}
        </>
    );
};

export default Detail;

// const Highest = styled.div`
//     font-size : 62.5%;
// `;
const GlobalStyle = createGlobalStyle`
    html {
        font-size : 62.5%;
    }
`;

const Section = styled.div`
    width: 1050px;
    margin: 0 auto;
    padding-top: 180px;
    /* border: 1px solid black; */
    
    display: flex;
    justify-content: space-between;

`;
const ImageWrap = styled.div`
    width: 43rem;
    height: 55.2rem;
    background: url(${(props) => props.image}) no-repeat 0% 0% / cover;
    // background: url(https://img-cf.kurly.com/shop/data/goods/1653034699910l0.jpeg) 0% 0% / cover, url(https://res.kurly.com/_next/static/images/noimg-150x195-2c819ff….svg) 50% 50% / contain no-repeat rgb(245, 245, 245);
    /* border: 1px solid black; */
`;
const ProductWrap = styled.div`
    width: 56rem;
    /* border: 1px solid black; */

`;
const Delivery = styled.div`
    font-size: 1.4rem;
    font-weight: bold;
    line-height: 1.36;
    letter-spacing: -0.5px;
    color: rgb(153,153, 153);
    margin-bottom: 6px;
`;
const TitleWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Title = styled.h2`
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 1.36;
    letter-spacing: -0.5px;
    /* border: 1px solid red; */
`;
const SharingButton = styled.div`
    width: 4rem;
    height: 4rem;
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBzdHJva2U9IiNEREQiIGN4PSIyMCIgY3k9IjIwIiByPSIxOS41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAuNSAxMSkiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIxLjgiPgogICAgICAgICAgICA8Y2lyY2xlIGN4PSIzIiBjeT0iOSIgcj0iMi4xIi8+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMTM3KSI+CiAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSI4Ljg2MyIgY3k9IjMiIHI9IjIuMSIvPgogICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgZD0iTTAgOC4xMzYgNi4zNjMgNC41Ii8+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgNS4xMzcgMTgpIj4KICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9IjguODYzIiBjeT0iMyIgcj0iMi4xIi8+CiAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBkPSJNMCA4LjEzNiA2LjM2MyA0LjUiLz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==) 50% 50% no-repeat;
`;
const Description = styled.p`
    padding-top: 5px;
    font-size: 1.4rem;
    color: rgb(181, 181, 181);
    line-height: 19px;
    letter-spacing: -0.5px;
`;
const PriceWrap = styled.div`
    display: flex;
`
const DiscountRate = styled.div`
    font-size: 2.8rem;
    font-weight: bold;
    color: rgb(250, 98, 47);
    padding-right: 9px;
`;
const SalesPrice = styled.div`
    font-size: ${(props) => (props.salesPrice? '1.2rem' : '2.8rem')};
    font-weight: bold;
    padding-top: ${(props) => (props.salesPrice? '9px' : '0px')};
`;
const DimmedPrice = styled.div`
    padding-top: 9px;
    font-size: ${(props) => (props.dimmedValid? '1.2rem' : '1.6rem')};
    margin-right: ${(props) => (props.dimmedValid? '4px' : '0px')};
    color: rgb(181, 181, 181);
    text-decoration: line-through;
    letter-spacing: -0.5px;
`;
const Benefit = styled.div`
    font-size: 1.4rem;
    color: rgb(95, 0, 128);
    line-height: 19px;
    letter-spacing: -0.5px;
    margin-top: 14px;
`;
const ProductInfoWrap = styled.div`
    margin-top: 20px;
`;
const ProductInfoList = styled.dl`
    border-top: 1px solid rgb(244, 244, 244);
    display: flex;
    /* width: 100%; */
    padding: 17px 0px 18px;
    font-size: 1.4rem;
    letter-spacing: -0.5px;
    /* border: 1px solid red; */
    justify-content: ${(props) => (props.totalPrice)? 'flex-end': ''};
    align-items: ${(props) => (props.totalPrice)? 'flex-end': ''};
`;
const ProductInfoTitle = styled.dt`
    flex: 1 1 0%;
    width: 12.8rem;
    /* height: 100%; */
    color: rgb(102, 102, 102);
    line-height: 19px;
    /* border: 1px solid red; */
`;
const ProductInfoDes = styled.dd`
    /* border: 1px solid red; */
    flex: 2 1 0%;
    border: ${(props) => (props.NumberWrapValid)};
    padding: ${(props) => (props.NumberWrapValid? '13px' : '0px')};

    & > p:first-child {
        /* border: 1px solid green; */
        line-height: 19px;
    }
    & > p:nth-child(2) {
        font-size: 1.2rem;
        color: rgb(102, 102, 102);
        padding-top: 4px;
        line-height: 16px;
    }
`;
const NumberWrap = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 12px;

`;
const Number = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid rgb(221, 223, 225);
    border-radius: 3px;
    width: 8.8rem;
    justify-content: space-between;
    
    
    /* & > button:first-child {
        width: 2.8rem;
        height: 2.8rem;
        background: url(${(props)=>(props.checking?'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMCAxNHYySDEwdi0yeiIgZmlsbD0iI0RERCIgZmlsbC1ydWxlPSJub256ZXJvIi8+Cjwvc3ZnPgo=':'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMCAxNHYySDEwdi0yeiIgZmlsbD0iIzMzMyIgZmlsbC1ydWxlPSJub256ZXJvIi8+Cjwvc3ZnPgo=')});
    } */
    /* & > button:last-child {
        width: 2.8rem;
        height: 2.8rem;
        background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xNiAxMHY0aDR2MmgtNHY0aC0ydi00aC00di0yaDR2LTRoMnoiIGZpbGw9IiMzMzMiIGZpbGwtcnVsZT0ibm9uemVybyIvPgo8L3N2Zz4K);
    } */
    & > div {
        
    }
`;
const DownBtn = styled.button`
        width: 2.8rem;
        height: 2.8rem;
        /* background-color:${(props) => (props.count===1 ? "green" : "red")}         */
        background: url(${(props)=>(props.count===1?'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMCAxNHYySDEwdi0yeiIgZmlsbD0iI0RERCIgZmlsbC1ydWxlPSJub256ZXJvIi8+Cjwvc3ZnPgo=':'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMCAxNHYySDEwdi0yeiIgZmlsbD0iIzMzMyIgZmlsbC1ydWxlPSJub256ZXJvIi8+Cjwvc3ZnPgo=')});
`;
const UpBtn = styled.button`
        width: 2.8rem;
        height: 2.8rem;
        background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xNiAxMHY0aDR2MmgtNHY0aC0ydi00aC00di0yaDR2LTRoMnoiIGZpbGw9IiMzMzMiIGZpbGwtcnVsZT0ibm9uemVybyIvPgo8L3N2Zz4K);
`;
const NumberPrice = styled.div`
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
`;

// 
const TotalPrice = styled.div`

    & > span:nth-child(1) {
        padding-right: 12px;
        font-size: 1.3rem;
        font-weight: bold;
    }
    & > span:nth-child(2) {
        padding-right: 36px;
        font-size: 3.2rem;
        font-weight: bold;
    }
`;
const FinalBtn = styled.div``;


const Nav = styled.div`
`;

const SelectButton = styled.div`
`;

const Top = styled.div`
`;
