import React, { useState, useEffect } from 'react';
// import data from '../data';
import Footer from './Footer';
import Header from './Header';
import data from '../data';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
// import 'sweetalert2/src/sweetalert2.scss'
// import styles from '../css/Login.module.css';

const Login = () => {
    // const [login, setLogin] = useState({
    //     id:"",
    //     password:"",
    // });
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

    const navigate=useNavigate();
    const goToHome = () => {
        navigate("/");
    };

    // useEffect(() => {
        // console.log(loginData);
        // loginData.map(info => (
        //     if(info===loginId){
        //         console.log('확인');
        //     } else {
                
        //     }
        // ))

        // loginData.filter(info => info.loginId==loginId && info.password==password)
        //     .map(test => (setCheck(true)));
        
        // console.log(check);


        // validation체크
        
    // }, [loginId, password])

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