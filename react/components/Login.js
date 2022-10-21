import React, { useState, useEffect } from 'react';
// import data from '../data';
import Footer from './Footer';
import Header from './Header';
import data from '../data';
import { useNavigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { LoginAction } from '../reducers/loginReducer';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import 'sweetalert2/src/sweetalert2.scss'
// import styles from '../css/Login.module.css';
// import { REST_API_KEY, REDIRECT_URI } from './KakaoLoginData';
import {REST_API_KEY, REDIRECT_URI, KAKAO_AUTH_URL} from '../KakaoLoginData';

const Login = () => {
    const navigate=useNavigate();
    const goToHome = () => {
        navigate("/");
    };

    // kakao
    const location = useLocation();
    const KAKAO_CODE = location.search.split('=')[1];

    const getKakaoToken = () => {
        fetch(`https://kauth.kakao.com/oauth/token`,{
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
        })
        .then(res => res.json())
        .then(data => {
            if(data.access_token) {
                localStorage.setItem('kakaoToken', data.access_token);
                goToHome();
            }
            else {
                // goToHome();
            }
        });

    }
    
    useEffect(() => {
        if(!location.search) return;
        console.log('인가코드: ' + KAKAO_CODE);
        getKakaoToken();
    },[])
    // 

    const dispatch = useDispatch();
    const loginData = data.loginData;
    const [loginId, setLoginId] = useState("");
    const [password, setPassword] = useState("");
    // const [check, setCheck] = useState(false);

    const inputLoginId = (e) => {
        setLoginId(e.target.value);
    };
    const inputPassword = (e) => {
        setPassword(e.target.value);
    }



    const onClickLogin = () => {
   
   
            var check = false;
            for(var i=0; i<loginData.length; i++){

                if(loginData[i].loginId === loginId) {

                    if(loginData[i].password === password) {

                        check = true;
                        console.log("test2")
                        console.log(check);
                    }
                }
            }
            
            if(check) {
                // [리덕스] 로그인 성공 시, store 값을 로그인 성공한id,password로 넣어줘서 업뎃
                dispatch(
                    LoginAction({ // 바꿀 데이터 값 넣어주기
                        loginId: loginId,
                        password: password,
                    }),
                );
                window.localStorage.setItem("token", "로그인 성공 임시token");
                

                goToHome();
            } else {
                // alert('안맞음')
                Swal.fire({
                    text: '아이디와 비밀번호를 확인해주세요',
                    // html: `
                    // 아이디와 비밀번호를 확인해주세요
                    // <br/>
                    // <br/>
                    // <br/>
                    // <hr />
                    // `,
                    confirmButtonText: '확인',
                }).then(function(){
                    goToHome();
                })
                
                // Swal.fire({icon: 'error',
                //     title: '결제실패',
                //     text: 'xkzzux',	
                //     showCancelButton: false,
                // }).then(()=>{
                //         // if (result.isConfirmed) {
                //             // Swal.fire('Saved!', '', 'success')}
                //           console.log('hi');
                // })
            }
   
    };

    
    return (
        <div>
             <div>
                <Header />
            </div>     

            <div id="section">
                <div className="login-text">로그인</div>
                {/* <div className={styles.login-text}>로그인</div> */}
                {/* <!-- <div className="login-wrap"> --> */}
                <div className="form-wrap">
                    <form action="">
                        <div className="login-box">
                            <input onChange={inputLoginId} type="text" name="id" placeholder="아이디를 입력해주세요" className="login__info" />
                        </div>
                        <div className="login-box">
                            {/* <input type="text" name="password" placeholder="비밀번호를 입력해주세요" autocomplete="off" className="login__info" /> */}
                            <input onChange={inputPassword} type="text" name="password" placeholder="비밀번호를 입력해주세요" className="login__info" />
                        </div>
                        <div className="find-box">
                            {/* <Social><Link to="/kakao" style={{color:"black", textDecoration: "none"}}>카카오</Link></Social> */}
                            {/* <Social onClick={handleKaKaoLogin}>카카오</Social> */}
                            <KaKao>
                                <a href={KAKAO_AUTH_URL}>
                                        카카오로그인
                                </a>
                            </KaKao>

                            <div className="find">아이디 찾기</div>
                            <div className="line"></div>
                            <div className="find">비밀번호 찾기</div>
                        </div>
                        <button type="submit" className="login-btn btn-design" onClick={onClickLogin}>로그인</button>
                        <button type="button" className="signup-btn btn-design">회원가입</button>

                    </form>
                </div>
                {/* <!-- </div> --> */}
            </div>

            {/* <Footer /> */}
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Login;

const KaKao = styled.div`
    margin: 0rem 1rem;
    /* background-color: yellow; */
`;