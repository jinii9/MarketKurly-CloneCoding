import React, {useState} from 'react';
import Header from './Header';
import styled, { createGlobalStyle } from 'styled-components';
import Footer from './Footer';
import { useSelector } from 'react-redux';

function BasketItem ({item, onBasketFinalPrice}) {
    const [count, setCount] = useState(1);
    const [total, setTotal] = useState(item.salesPrice);
    const [finalPrice, setFinalPrice] = useState();

    // onBasketFinalPrice();

    let originalPrice = item.salesPrice;
    originalPrice = originalPrice.substring(0, originalPrice.length-1).replace(",","");
    originalPrice = parseInt(originalPrice, 10);

    const addCount = () => {
        let changePrice = originalPrice;
    
        setCount(count + 1);
        
        changePrice = originalPrice * (count+1);
        console.log('바뀐 값:' + changePrice);
    
        changePrice = changePrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        changePrice = changePrice + '원'; 
    
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

    return(
        <ItemWrap>
            <Label>
                <input type="checkbox"></input>
            </Label>
            <ItemImg><img src={item.image} /></ItemImg>
            <ItemTitle>{item.name}</ItemTitle>
            <NumberWrap>
                <Number>
                    <DownBtn type='button' aria-label='수량 내리기' onClick={minCount} count={count}></DownBtn>
                    <div>{count}</div>
                    <UpBtn type='button' aria-label='수량 올리기' onClick={addCount} count={count}></UpBtn>
                </Number>
            </NumberWrap>
            <TotalPrice>{total}</TotalPrice>
            <DeletedItem></DeletedItem>
        </ItemWrap>
    )
} 

// {info.map((item) => (
//     <div key={item.id}>
//         {item.id}
//         {item.name}
//         {item.image}
//         {item.salesPrice}
//         {item.packingType}
//     </div>
// ))}

const Basket = () => {
    const {info} = useSelector((state) => state.BasketReducer);
    // console.log(info);

    const onBasketFinalPrice = (data) => {
        // console.log(data);
    };

    return (
        <>
            <GlobalStyle />
            <Header />
            <Section>
                <Title>장바구니</Title>
                <BasketWrap>
                    <ItemBasket>
                        <SelectedWrap>
                            <Label>
                                <input type="checkbox"></input>
                            </Label>
                            <SelectedAll>전체선택</SelectedAll>
                            <Line />
                            <DeletedBtn>선택삭제</DeletedBtn>
                        </SelectedWrap>
                        <ItemList>
                            {/* 제품 나열 */}
                            {info.map((item) => (
                                <ul key={item.id}><BasketItem item={item} onBasketFinalPrice={onBasketFinalPrice}/></ul>
                            ))}
                            {/* <Label></Label> */}
                        </ItemList>
                    </ItemBasket>

                    <InfoBasket>
                        <DeliveryWrap>
                            <DeliveryTitle>
                                <img src='https://res.kurly.com/pc/service/cart/2007/ico_location.svg'/>
                                <h3>배송지</h3>
                            </DeliveryTitle>
                            <p>서울 강동구 고덕로333</p>
                            <p>샛별배송</p>
                            <button>배송지 변경</button>
                        </DeliveryWrap>
                        <PriceWrap>
                            <BasketPrice>
                                <span>상품금액</span>
                                <span>원</span>
                            </BasketPrice>
                            <BasketPrice>
                                <span>상품할인금액</span>
                                <span>원</span>
                            </BasketPrice>
                            <BasketPrice>
                                <span>상품할인금액</span>
                                <span>원</span>
                            </BasketPrice>
                            <BasketPrice final>
                                <span>결제예정금액</span>
                                <span>원</span>
                            </BasketPrice>
                        </PriceWrap>
                        <OrderWrap>
                            <button>주문하기</button>
                            <ul>
                                <li><Dot/>쿠폰/적립금은 주문서에서 사용 가능합니다</li>
                                <li><Dot/>[주문완료] 상태일 경우에만 주문 취소 가능합니다.</li>
                                <li><Dot/>쿠폰, 적립금 사용 금액을 제외한 실 결제 금액 기준으로 최종 산정됩니다.</li>
                                <li><Dot/>상품별로 적립금 지급 기준이 다를 수 있습니다. (상품 상세 페이지에서 확인 가능합니다)</li>
                            </ul>
                        </OrderWrap>
                    </InfoBasket>
                </BasketWrap>
            </Section>
            <Footer />
        </>
    );
};

export default Basket;

const GlobalStyle = createGlobalStyle`
    html {
        font-size : 62.5%;
    }
`;
const Section = styled.div`
    width: 105rem;
    margin: 0 auto;
    padding-bottom: 8rem;
`;
const Title = styled.h2`
    padding: 20rem 0rem 4.8rem;
    font-weight: bold;
    font-size: 2.8rem;
    line-height: 3.5rem;
    text-align: center;  
`;
const BasketWrap = styled.div`
    display: flex;
    justify-content: space-between;
`;
const ItemBasket = styled.div`
    width: 74.2rem;
`;
const SelectedWrap = styled.div`
    display: flex;
    align-items: center;
    padding: 0rem 1rem 1rem 0.2rem;
    /* padding: 18px 10px 16px 2px; */

    & * {
        font-weight: bold;
        font-size: 1.4rem;
        line-height: 2.6rem;
    }
`;
const SelectedAll = styled.div`
`;
const Line = styled.div`
    width: 0.1rem;
    height: 1.4rem;
    background-color: rgb(221, 221, 221);
    margin: 0.1rem 2.1rem 0rem 2.2rem;
`;
const DeletedBtn = styled.button`
    margin: 0;
    padding: 0;
`;

const ItemList = styled.div`
    border-top: 1px solid rgb(51, 51, 51);
`;

// BasketItem styled
const ItemWrap = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 2rem 0rem;
`;
const Label = styled.div`
    & input {
        appearance: none;
        width: 2.4rem;
        height: 2.4rem;
        margin-right: 1.2rem;
        background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgc3Ryb2tlPSIjREREIj4KICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjY5LjAwMDAwMCwgLTEwOTAuMDAwMDAwKSB0cmFuc2xhdGUoMTAwLjAwMDAwMCwgOTM2LjAwMDAwMCkgdHJhbnNsYXRlKDU1My4wMDAwMDAsIDE0Mi4wMDAwMDApIHRyYW5zbGF0ZSgxNi4wMDAwMDAsIDEyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMS41Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik03IDEyLjY2N0wxMC4zODUgMTYgMTggOC41Ii8+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K") no-repeat;
        background-size: contain ;
    }
`;
const ItemImg = styled.div`
    margin-right: 2rem;
    & img {
        width: 6rem;
        height: 7.8rem;
    }
`;
const ItemTitle = styled.div`
    display: flex;
    align-items: center;
    width: 34.5rem;
    margin-right: 2rem;

    font-size: 1.6rem;
    font-weight: bold;
    /* padding-top: 0.8rem; */
    line-height: 2.2rem;

`;
const NumberWrap = styled.div``;
const Number = styled.div`
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    border: 1px solid rgb(221, 223, 225);
    border-radius: 0.3rem;
    width: 8.8rem;
    justify-content: space-between;
`;
const DownBtn = styled.button`
        width: 2.8rem;
        height: 2.8rem;
        background: url(${(props)=>(props.count===1?'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMCAxNHYySDEwdi0yeiIgZmlsbD0iI0RERCIgZmlsbC1ydWxlPSJub256ZXJvIi8+Cjwvc3ZnPgo=':'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMCAxNHYySDEwdi0yeiIgZmlsbD0iIzMzMyIgZmlsbC1ydWxlPSJub256ZXJvIi8+Cjwvc3ZnPgo=')}) center center;
`;
const UpBtn = styled.button`
        width: 2.8rem;
        height: 2.8rem;
        background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xNiAxMHY0aDR2MmgtNHY0aC0ydi00aC00di0yaDR2LTRoMnoiIGZpbGw9IiMzMzMiIGZpbGwtcnVsZT0ibm9uemVybyIvPgo8L3N2Zz4K) center center;
`;
const TotalPrice = styled.div`
    width: 12.7rem;
    text-align: right;
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 2.4rem;
`;
const DeletedItem = styled.button`
    width: 3rem;
    height: 3rem;
    margin-left: 0.9rem;
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMSA5Ljc2MiAyMC4yMzggOSAxNSAxNC4yMzggOS43NjIgOSA5IDkuNzYyIDE0LjIzOCAxNSA5IDIwLjIzOGwuNzYyLjc2MkwxNSAxNS43NjIgMjAuMjM4IDIxbC43NjItLjc2MkwxNS43NjIgMTV6IiBmaWxsPSIjQ0NDIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==) center center / cover;
`;

const InfoBasket = styled.div`
    width: 28.4rem;
    padding-top: 5rem;
`;
const DeliveryWrap = styled.div`
    padding: 2.3rem 1.9rem 2rem;
    border: 1px solid rgb(242, 242, 242);

    & p:nth-child(2) {
        font-size: 1.6rem;
        font-weight: bold;
        line-height: 2.4rem;
        padding-top: 1.2rem;
    }
    & p:nth-child(3) {
        color: rgb(95, 9, 128);
        font-size: 1.4rem;
        font-weight: bold;
        padding: 0.7rem 0rem 1.2rem;
    }
    & > button {
        width: 100%;
        height: 3.6rem;
        border-radius: 0.3rem;
        border: 1px solid rgb(95, 9, 128);
        /* padding: 0rem 10rem; */

        color: rgb(95, 9, 128);
        font-size: 1.2rem;
        font-weight: bold;
    }
    
`;
const DeliveryTitle = styled.div`
    display: flex;
    align-items: center;
    & img {
        padding-right: 0.5rem;
    }
    & h3 {
        font-size: 1.6rem;
        font-weight: bold;
        line-height: 2rem;
    }
`;
const PriceWrap = styled.div`
    padding: 1.9rem 1.8rem 1.8rem 2rem;
    background-color: rgb(250, 250, 250);
    border: 1px solid rgb(242, 242, 242);
`;
const BasketPrice = styled.div`
    display: flex;
    justify-content: space-between;
    & span {
        font-size: 1.6rem;
        line-height: 2.4rem;
        padding-top: ${(props) => (props.final? '1.8rem' : '0rem')};
    }
`;

const OrderWrap = styled.div`
    padding: 2rem 0rem 0rem;
    & button {
        width: 100%;
        height: 5.6rem;
        border-radius: 0.3rem;
        background-color: rgb(95, 0, 128);
        font-size: 1.6rem;
        font-weight: bold;
        color: #ffffff;
    }
    & ul {
        padding: 1.6rem 0rem;
    }
    & li {
        padding-top: 0.4rem;
        color: rgb(102, 102, 102);
        font-size: 1.2rem;
        line-height: 1.6rem;
        padding-left: 0.7rem;

        display: flex;
    }
`;
const Dot = styled.div`
    /* border: 1px solid red; */
    width: 0.1rem;
    height: 0.1rem;
    margin: 0.6rem 0.6rem 0rem -0.6rem;
    background-color: rgb(153,153,153);
`;
