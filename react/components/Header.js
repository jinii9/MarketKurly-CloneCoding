import React, { Component, Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import styled, { createGlobalStyle }  from 'styled-components';
import data from '../data';

const Header = () => {
    
    const [clientInfo, setClientInfo] = useState({
       id:'',
       loginId:'',
       password:'',
       name:'', 
    });
    /////////////////////////////////////////////////////
    // 리덕스 코딩
    const { loginId, password } = useSelector((state) => state.LoginReducer); // 비구조할당으로 받아오기
    
    const tokenCheck = localStorage.getItem('token');
    // console.log(tokenCheck);
    /////////////////////////////////////////////////////            


    useEffect(() => {
        if(localStorage.getItem('token')) {
            console.log('확인:' + localStorage.getItem('token'))
            
            const loginData = data.loginData;
            // console.log(loginData)
 
            const value = loginData.filter((info) => info.loginId===loginId);
            console.log('value: ');
            // console.log(value[0]);
            // console.log(value[0].id);
            
            setClientInfo({
                // ...clientInfo,
                id: value[0].id,
                loginId: value[0].loginId,
                password: value[0].password,
                name: value[0].name,
            });
            


        }
    },[])
    console.log(clientInfo);


    return (
        <div id="header">
            {/* <Fragment> */}
            <div className="header-main">

        {/*///////////////////////////////////////////////////// 리덕스 값 잘 바뀌는지 test */}
        {/* <h1 style={{"font-size":"40px"}}>TEST</h1>
        <h1 style={{"font-size":"20px"}}>TEST1 {loginId}</h1>
        <h1 style={{"font-size":"20px"}}>TEST2 {password}</h1> */}
        {/*///////////////////////////////////////////////////// test */}


                <MemInfo>
                    {/* <Sign>회원가입</Sign> */}
                    <Line></Line>
                    {/* <a href="login.html" className="login">로그인</a> */}
                    
                    {/* <Login><Link to="/Login" style={{color:"black", textDecoration: "none"}}>로그인</Link></Login> */}
                    {!localStorage.getItem('token') ? (
                        <Fragment>
                            <Sign>회원가입</Sign>
                            <Line></Line>
                            {/* <a href="login.html" className="login">로그인</a> */}
                            
                            <Login><Link to="/Login" style={{color:"black", textDecoration: "none"}}>로그인</Link></Login>
                        </Fragment>
                    ) : (
                        <Fragment>
                            {/* <Sign>회원가입</Sign> */}
                            {/* <Line></Line> */}
                            {/* <a href="login.html" className="login">로그인</a> */}
                            
                            {/* <Login tokenCheck={tokenCheck}><Link to="/Login" style={{color:"black", textDecoration: "none"}}>로그인</Link></Login> */}
                            <Login tokenCheck={tokenCheck}>
                                {clientInfo.name}
                                <span style={{'padding-left':'0.5rem'}}> 님</span>
                            </Login>
                            
                        </Fragment>
                    )}

                    <Line></Line>
                    





                    <Service>
                        <Center href="#" className="service-btn">
                            고객센터
                            <Arrow></Arrow>
                        </Center>
                    </Service>
                </MemInfo>

                <div className="header-wrap">
                    <div className="header-wrap__item1">
                        <Link to="/" style={{color:"black", textDecoration: "none"}}>
                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODIiIGhlaWdodD0iNDIiIHZpZXdCb3g9IjAgMCA4MiA0MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0ibm9uZSI+CiAgICAgICAgPHBhdGggZD0iTTAgMGg4MnY0MkgweiIvPgogICAgICAgIDxwYXRoIGQ9Ik02Mi41Ljk2NWMxLjAyNi0uNTU3IDIuNDY2LS43MTggMy4zNTYuMTA3Ljg5LjgyNS42NzYgMi4wNDggMCAzLjk3MyAwIDAtMS41MDUgNC4wNjYtMy4wNTUgOC4yNjJsLS4zOTggMS4wOGMtMS40MTQgMy44My0yLjc2MiA3LjQ4Ny0yLjkyNyA3Ljk2My0xLjQ5OCA0LjI0NSAxLjk2NyA0LjEyMiA0LjAyNC0uMTUyIDEuMTU5LTIuMzk0IDIuNjQ0LTYuMzU3IDIuNjQ0LTYuMzU3LjUyNC0xLjU2My42ODItMi41MDQuMzU5LTIuODI4LS4xMDctLjExMy4wNDUtLjI1Mi4xOC0uMzIzIDIuMjY5LTEuMTQ5IDQuNjMtLjA3MiAzLjMzNiAzLjMxbC0uMDU0LjEzOGMtLjM4Ny45NzgtMi42OCA2LjczMy0yLjY4IDYuNzMzLS42NzYgMS42Ni0uNTk1IDMuMjM2LjQxOCAzLjIzNi42ODYtLjAwNCAxLjQ2LS4zODUgMi4zMDQtMS4wODggMS44MTgtMS41MDQgMy4yMjItNC4zMTIgMy43MjctNS40NTQuMjMtLjUwOCAxLjA4Ny0yLjQyIDEuNzY2LTQuMzYxLjIzNi0uNjY1LjM2OS0xLjM2LjM5NS0yLjA2NWEuNDQzLjQ0MyAwIDAgMSAuMTk0LS40NTkgMy41NzggMy41NzggMCAwIDEgMS42Ny0uNDIgMS44MDUgMS44MDUgMCAwIDEgMS40NjUuNzA1Yy40NDMuNTk4LjU2NiAxLjU3OS4xMDMgMi44MDgtLjEyLjMyLTMuNzc1IDkuOTU4LTMuNzc1IDkuOTU4di4wMjZjMi4wNDEtMS4yMjMgMy44Ny0xLjMxMyA0Ljk1My0uODU0bC0uMDAzLS4wMTNjMS40OTUuNjQ3IDEuOTkgMi40NC45MzggMy41NTktLjEwMy4xMS0uMzYyLjA4NC0uMzYyLS4wOS0uMDk0LTEuMjUzLTIuNTE3LTMuNDk1LTYuMTA5LTEuMDc1bC0uMTQ1LjM4NS0xLjA2OCAyLjgwOGMtMi42MiA3LjAxOC01LjQwMyAxMi4xMzYtOS40MTUgMTEtMi42ODgtLjc2LTIuMzc3LTQuNjA3LjUxNS03Ljc5YTU0LjkgNTQuOSAwIDAgMSA2LjQ5LTUuODk4Yy4wNjgtLjE4OC4xMy0uMzUuMTg4LS41MTEuMjc4LS43OC40OTEtMS40MzQuNzkyLTIuMjY1bC4xNTktLjUxOGMtLjE3OC4yLS40OTguNTczLS43MTIuODEyLS43MTIuOC0yLjQ5NCAyLjc1Ny01LjMyOSAyLjIwN2wtLjIzNC0uMDUyYy0yLjA1LS41MDgtMi42MDgtMS45ODYtMi42NTUtMy4yNzctMi4xNDIgMi42NTYtNC4zNTEgMy40MjYtNS44MDcgMy4zOS0xLjk0OC0uMDQ4LTMuMzc4LTEuNTE0LTIuNDI3LTQuMjkgMS4wNTgtMy4xMDYgNS41LTE1LjMzMiA2Ljc5NS0xOSAuNDg1LTEuNTguNjY2LTIuNTguMTg0LTIuOTc0LS4xMjMtLjEwMy4wNTItLjI2NS4yLS4zNDZ6bTguMzY0IDI4Ljc3OGMtMS4xMDMuODgtNS41MjYgNC41My02Ljc1MiA3LjQ0MS0uNTA1IDEuMTk3LS4zNzYgMi4xNDkuNDg4IDIuMjMzIDEuOTYuMTk0IDQuMDEyLTMuODE4IDYuMjI4LTkuNTEyek0xNi4wMjggNS4zNTJjLS4wODcuMzMyLTEuMzE5IDMuODYtMi43MDEgNy43NDlsLS4yMDkuNTg2LS4yMS41ODktLjIxNS42MDRjNC42OTEtMS4xMjMgMTMuMDY0LTYuNTcgMTQuMDM1LTEwLjA4NS4xMi0uMTYxLjI5LS4yMi41NjYtLjAzNS40OTUuMzMuNjg2IDEuMTU1LjQ5NSAxLjkxOC0uNzY0IDMuMDM4LTYuNDE2IDcuMzQxLTExLjM3OSA5LjU1NC42MTIgMS42MzcgMi42ODIgNi4yNjcgNC4yMDYgOS4xMTEgMS42NjMgMy4xMTkgMy40MiA0LjU3NSA2LjE0NyA0LjczNyAxLjQ2LjA4NSAzLjAxNC0uNDQ3IDMuODkzLTEuMjJsLjE0OC0uMTQtLjAxMy4wM2MuMTk0LS4yMDQuNTExLjA3Ny4zNjYuMzIzYTYuNSA2LjUgMCAwIDEtNC45OTIgMi44NjdjLTYuMzQ1LjQyNy04Ljc3NC0zLjg3LTEzLjMwNC0xNC40OTQtLjM2Ni4xMjYtLjgwOS4yODgtMS4yNTUuNDUtLjA3NS4xODctMi4wNyA1LjY0Mi0yLjEzIDUuODIzLS45NDQgMi44Ny0xLjAwNSA0LjQ0Mi0uMzU4IDQuODk1LjE0NS4wOS4wNzQuMzMzLS4xNzguNDE0LTIuNTI3Ljc5Ni00Ljg1My0uNjk2LTMuNTU5LTQuNDQyIDEuMTYxLTMuMzE2IDUuNjktMTYuMTggNi45MTQtMTkuNjI2LjQyNy0xLjI5NC4xOTctMi4xMjUtLjQ5Mi0yLjMwNkM4LjUwNiAxLjc4Ljg3NyA4Ljc0OSAxLjk3MSAxNS4xODRjLjE5IDEuMTIuOTggMS43NDcgMS4zNzggMS42NjNhLjEzMy4xMzMgMCAwIDEgLjE1Ni4xNTkgMS41MDggMS41MDggMCAwIDEtMS44NDUgMS4wMzJDLjQ5IDE3Ljc4Mi4xMDcgMTYuNTI3LjA0MyAxNS44OC0uNjAxIDkuMjIgNi4xNDggMS4yMyAxMi4zODkuNThjMi4zNzgtLjI1IDQuNjEuOTYgMy42NCA0Ljc3MnptMjQuMDQgOS45MTMtLjA2LjIwNy0yLjgzIDguMTZjLS4zMDQuODUtLjEgMS43MzcuNTAxIDEuOTAyIDEuNzU3LjQ4MiA0LjAyOC0yLjE0NSA1LjEzMS00LjczM2E2Ny43OTQgNjcuNzk0IDAgMCAwIDEuNDc2LTMuODE1Yy41ODItMS42NDMgMS4xMDYtMy4xODMuNzgzLTMuOTA4LS4wNzUtLjE2OC4wNDUtLjI1Ni4yMjMtLjM1LjUwNS0uMjU1IDIuMjI2LS44MjUgMy4xNDEuMDY4LjY5NS42NzQuNjA5IDEuNzcxLS4wMyAzLjQzN2wtLjA5Ni4yNDIuMjItLjI3M2MyLjcwMy0zLjMgNC43OTItNC4yOTIgNi41NjMtMy41OTdsLjE0Ny4wNjJjMi4zODEgMS4wNzQgMS4xNDYgNS4yMTUtMi4xMTYgNS40OC0uMi4wMTctLjM1Ni0uMTI2LS4xNTgtLjQwNy4zOTUtLjYwNS4zNTYtMS45MDktLjc5Ni0yLjAyMi0xLjE1Mi0uMTEzLTIuODMgMS4yMDctNC4wMzggMi44NDQtMS4wODQgMS40NS0yLjIgMy45MTEtMy4zMjIgNy4yNzMtLjI3Mi44MTgtLjE0MyAxLjAxMi0uMTEgMS4wNjdhLjEuMSAwIDAgMSAwIC4wOTRjLS4xNDMuMjcyLS45NjUuNTk2LTEuNzYuNTk2LTEuNjI1LS4wMDctMi4yOTEtLjk0NS0xLjk2Ny0yLjQzNy0xLjg0OCAxLjc2NC0zLjcxMSAyLjYxNC01LjM1NSAyLjQ2NmEyLjUyNCAyLjUyNCAwIDAgMS0yLjIzNi0zLjEwM2MtMS40MjYgMS44MDktMy41NDIgMy4yNjgtNS42OTcgMy4wNjctMi4xNTUtLjItMy41LTEuNjY2LTIuODAyLTQuNzg4LjU5LTIuNTk4IDEuNTkyLTUuMjkgMi4yMDctNy4wMjcuNTE0LTEuNDU2LjYxOC0yLjQwNy4yOTQtMi43NS0uMTAzLS4xMTQuMDU1LS4yNS4xOTQtLjMyNCAxLjY5LS44ODYgNC4zOTQtLjMxNCAzLjYzIDIuMDktLjgwMiAyLjUyNy0yLjI1NSA2LjQ5LTIuNTUgNy40LS43MzcgMi4yODctLjI5IDMuNTIzLjc1NSAzLjU4IDEuMDQ1LjA2IDIuNDMtLjk2IDMuNDItMi41MDMgMS43Ni0yLjUyNCAyLjU4MS01LjY4NSAzLjM3Ny03Ljg4Mi4yMDQtLjU2LjUyNy0xLjg2Ni4xODUtMi4zNTItLjA5MS0uMTIzLjA2Ny0uMjU4LjI3NS0uMzcyIDEuNTM3LS44NDkgNC4yODUtLjY0IDMuNDAyIDIuNjA4eiIgZmlsbD0iIzVGMDA4MCIvPgogICAgPC9nPgo8L3N2Zz4K" alt="마켓컬리 로고" className="logo" />
                        </Link>
                        <button className="kurly-market">마켓컬리</button>
                        <button className="kurly-beauty">뷰티컬리</button>
                    </div>
                    <div className="relative-wrap">
                        <div className="header-wrap__item2">
                            {/* <input type="text" id="gnb_search" placeholder="검색어를 입력해주세요" required value /> */}
                            <input type="text" className="gnb_search" placeholder="검색어를 입력해주세요" />
                            <button className="gnb_search-btn"></button>
                            {/* <div><input type="text" className="gnb_search" placeholder="검색어를 입력해주세요" /></div> */}
                            {/* <div><button className="gnb_search-btn"></button></div> */}
                        </div>
                        <div className="header-wrap__item3">
                            <button className="place"></button>
                            <button className="heart" aria-label="찜하기" type="button"></button>
                            {/* <button className="market"><Link to="/Basket" style={{color:"black", textDecoration: "none"}}></Link></button> */}
                            <Link to="/Basket" style={{color:"black", textDecoration: "none"}}><button className="market"></button></Link>

                        </div>
                    </div>
                </div>

            </div>
            {/* </Fragment> */}
            {/* <Fragment> */}
            <div id="nav">
                <div className="nav__category">
                    <span className="category-icon"></span>
                    <span className="menu menu-text">카테고리</span>
                </div>

                {/* <div> */}
                    <ul className="nav-main">
                        <li className="menu"><span className="menu-text">신상품</span></li>

                        <li className="menu"><span className="menu-text"><Link to="/Best" style={{color:"black", textDecoration: "none"}}>베스트</Link></span></li>

                        <li className="menu"><span className="menu-text">알뜰쇼핑</span></li>
                        <li className="menu"><span className="menu-text">특가/혜택</span></li>
                    </ul>
                {/* </div> */}

                <div className="nav__ship-info">
                    <a href="https://www.kurly.com/shop/event/kurlyEvent.php?htmid=event/delivery_search/delivery_search">
                        <span>샛별・낮</span>
                        배송안내
                    </a>
                </div>
            </div>
            {/* </Fragment> */}
        </div>
    );
};

export default Header;

//
//
//
const MemInfo = styled.div`
    /* width: 181.1px; */
    /* height: 34.99px; */
    display: flex;
    position: absolute;
    right: 0rem;
    /* font-size: 1.2rem; */
    margin-top: 1rem;
    align-items: center;
    z-index: 2;
    /* border: 1px solid black; */
`;
const Sign = styled.a`
    color: rgb(95, 0, 128);
    /* border: 1px solid black; */
    cursor: pointer;
    font-size: 1.2rem;
`;
const Login= styled.div`
    /* background-color: ${(props) => ((props.tokenCheck===null)? 'aqua' : '#ffffff')}; */
    font-size: ${(props) => ((props.tokenCheck) ? '1.5rem':'')};
`;
const Line = styled.div`
    width: 0.01rem;
    height: 1.3rem;
    margin: 0rem 1.2rem;
    /* height: 1.0rem; */
    background-color: rgb(217, 217, 217);
`;
const Service = styled.div``;
const Center = styled.a``;
const Arrow = styled.span`
    width: 0.8rem;
    height: 0.5rem;
    background-image: url(https://res.kurly.com/pc/ico/1908/ico_down_16x10.png);
    background-size: cover;
    display: inline-block;
    margin-left: 0.2rem;
    margin-bottom: 0.1rem;
`;
