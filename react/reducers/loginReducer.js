// state 초기화
const loginInitialState = { 
    loginId: "초기값",
    password: "초기값",
};



// 액션
export const LoginAction = (data) => {
    return {
        type: "LOGIN",
        data: data,
    };
};

// 리듀서
const LoginReducer  = (state = loginInitialState, action) => {
    switch (action.type) {
        case "LOGIN" : {
            return {
                ...state,
                loginId: action.data.loginId,
                password: action.data.password,
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};

export default LoginReducer;