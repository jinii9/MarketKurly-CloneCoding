import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Login = () => {
    console.log('로그인창');

    return (
        <div>
             <div>
                <Header />
            </div>     

            <div id="section">
                <div className="login-text">로그인</div>
                {/* <!-- <div className="login-wrap"> --> */}
                <div className="form-wrap">
                    <form action="">
                        <div className="login-box">
                            <input type="text" name="id" placeholder="아이디를 입력해주세요" onfocus="this.placeholder=' '" className="login__info" />
                        </div>
                        <div className="login-box">
                            {/* <input type="text" name="password" placeholder="비밀번호를 입력해주세요" autocomplete="off" className="login__info" /> */}
                            <input type="text" name="password" placeholder="비밀번호를 입력해주세요" className="login__info" />
                        </div>
                        <div className="find-box">
                            <div className="find">아이디 찾기</div>
                            <div className="line"></div>
                            <div className="find">비밀번호 찾기</div>
                        </div>
                        <button type="submit" className="login-btn btn-design">로그인</button>
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