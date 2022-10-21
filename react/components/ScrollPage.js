import React, {useRef, useState} from 'react';
import styled, { createGlobalStyle }  from 'styled-components';

const ScrollPage = () => {
    // 더미데이터 (일단 이런 식으로 넣기)
    const productData = {
        image: "https://img-cf.kurly.com/shop/data/goodsview/20220712/gv30000337391_1.jpg",
        smallTitle: "시원한 단맛으로 색다른 별미 김치",
        title: " [자연에찬] 강화순열무 나박김치",
        explain: "미식의 고장하면 전라도나 제주도를 먼저 떠올리는 분이 많으시겠지만, 알고 보면 강화도 또한 맛으로는 빠지지 않는 지역입니다. 다른 곳에서 흔히 볼 수 없는 작물이나 해산물이 나서 고유의 음식들이 많이 발달했죠. 그중에서도 순무 김치는 조선시대 임금에게까지 진상됐을 정도로 명성이 자자한 강화도의 별미인데요. 원래 지중해 연안에서 자생하던 식물이 강화도에 들어와 지금까지도 지역의 특산물로 그 명맥을 잇고 있습니다. 이번에 자연에찬은 튼실하게 익은 강화도 순무로 나박김치를 만들었어요.",
        detailInfo: "https://img-cf.kurly.com/shop/data/goodsview/20220712/gv30000337394_1.jpg",
    }




    const tabRef = useRef([]);

    // const [currentTab, setCurrentTab] = useState(false);

    const tabData = ["상품설명", "상세정보", "후기", "문의"];

    console.log(tabData);
    // console.log(currentTab);

    return (
        <>  
        <GlobalStyle />
            <NavWrap>
                {/* 여기를 누르면 */}
                {tabData.map((data,index) => (
                    <NavItem
                        key={index}
                        onClick= {() => {
                            tabRef.current[index].scrollIntoView(true);
                            window.scrollBy(0, -250);
                            // setCurrentTab(true);
                        }}
                        // currentTab={currentTab} 
                    >
                        {data}
                    </NavItem>
                ))}
            </NavWrap>
            {/*  여기로 옵니다 */}
            <div>
                <Explain ref={elem => (tabRef.current[0] = elem)}>
                    <div><img src={productData.image} /></div>
                    <h3>{productData.smallTitle}</h3>
                    <h3>{productData.title}</h3>
                    <p>{productData.explain}</p>
                </Explain>

                <DetailInfo ref={elem => (tabRef.current[1] = elem)}>
                    <img src={productData.detailInfo} />
                </DetailInfo>

                <Review ref={elem => (tabRef.current[2] = elem)}>
                    <h2>PRODUCT REVIEW</h2>
                    <ul>
                        <li><Dot/>상품에 대한 문의를 남기는 공간입니다. 해당 게시판의 성격과 다른 글은 사전동의 없이 담당 게시판으로 이동될 수 있습니다.</li>
                        <li><Dot/>배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은 마이컬리 내 1:1 문의 에 남겨주세요.</li>
                    </ul>
                </Review>

                <QNA ref={elem => (tabRef.current[3] = elem)}>
                    {/* 문의 */}
                </QNA>
            </div>
        </>
    );
};

export default ScrollPage;

const GlobalStyle = createGlobalStyle`
    html {
        font-size : 62.5%;
        margin: 0 auto;
    }
`;
const NavWrap = styled.div`
    display: flex;
    width: 101rem;
    height: 6rem;
    margin-top: 5rem;
    z-index: 1;
    position: sticky;
    top: 15.5rem;
    /* box-shadow: rgb(221 221 221) 0px -0.5px 0px 0px inset; */
    /* border: 1px solid rgb(238, 238, 238); */
    padding-bottom: 4rem;
`;
const NavItem = styled.button`
    border: 1px solid rgb(238, 238, 238);
    display: flex;
    flex: 1 1 0%;
    justify-content: center;
    align-items: center;

    font-size: 1.6rem;
    font-weight: bold;
    
    color: rgb(102, 102, 102);
    background-color: rgb(250, 250, 250);


    &:focus {
        color: rgb(95, 0, 128);
        background-color: rgb(255, 255, 255);

    }
`;

const Explain = styled.div`
    /* margin: 0 auto; */
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
    color: rgb(102,102,102);
    margin-bottom: 17rem;

    & > h3:nth-child(2) {
        margin: 7.5rem auto;
        font-size: 2.4rem;
        margin-bottom: 1.4rem;
        line-height: 1.5rem;
        text-align: center;
        font-weight: 500;
        /* border: 1px solid red; */
    }
    & > h3:nth-child(3) {
        padding-bottom: 3.5rem;
        border-bottom: 1px solid rgb(193, 193, 193);
        font-size: 3.8rem;
        line-height: 4.6rem;
        text-align: center;
        font-weight: 500;
    }
    & > p:nth-child(4) {
        margin-top: 2.8rem;
        font-size: 1.8rem;
        line-height: 3.2rem;
        color: rgb(55, 55, 55);
    }
`;
const DetailInfo = styled.div``;
const Dot = styled.span`
    float: left;
    width: 0.4rem;
    height: 0.4rem;
    margin: 0.7rem 0.8rem 0 0;
    background-color: #514859;
`;
const Review = styled.div`
    & > h2 {
        font-size: 1.3rem;
        font-weight: 700;
        padding-bottom: 0.5rem;
    }
    & > ul li {
        font-size: 1.2rem;
        color: #666;
        line-height: 1.8rem;
        letter-spacing: -.3px;
        font-weight: 400;
        /* border: 1px solid red; */
    }

`;
const QNA = styled.div`
        /* padding-top: 10rem;
        font-size: 1.3rem;
        font-weight: 700;
        padding-bottom: 0.5rem;
        padding-bottom: 10rem; */
`;
