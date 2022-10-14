import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import { createStore } from 'redux';
import rootReducer from './reducers';

const root = ReactDOM.createRoot(document.getElementById('root'));

// 스토어
const store = createStore(rootReducer);

root.render(
  // 자식에 있는 모든 컴포넌트에서 접근할 수 있게
  <Provider store={store}>
    <App />
  </Provider>
);

