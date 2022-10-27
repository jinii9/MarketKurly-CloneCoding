// import React, { Component } from 'react';

// const countDownTimer = function (id, date) {
//     var _vDate = new Date(date); // 전달 받은 일자
//     var _second = 1000;
//     var _minute = _second * 60;
//     var _hour = _minute * 60;
//     var _day = _hour * 24;
//     var timer;

//     function showRemaining() {
//         var now = new Date();
//         var distDt = _vDate - now;

//         if (distDt < 0) {
//             clearInterval(timer);
//             document.getElementById(id).textContent = '해당 이벤트가 종료 되었습니다!';
//             return;
//         }

//         var days = Math.floor(distDt / _day);
//         var hours = Math.floor((distDt % _day) / _hour);
//         var minutes = Math.floor((distDt % _hour) / _minute);
//         var seconds = Math.floor((distDt % _minute) / _second);

//         //document.getElementById(id).textContent = date.toLocaleString() + "까지 : ";
//         // document.getElementById(id).textContent = days + '일 '; // textContent = innerHTML
//         document.getElementById(id).textContent = hours + ':';
//         document.getElementById(id).textContent += minutes + ':';
//         document.getElementById(id).textContent += seconds;
//     }

//     timer = setInterval(showRemaining, 1000);
// }
// var dateObj = new Date();
// dateObj.setDate(dateObj.getDate() + 1);

// countDownTimer('timer', dateObj);

// class timer extends Component {
//     render() {
//         return (
//             <div>
//                 <span class="time-count__timer" id="timer"></span>
//             </div>
//         );
//     }
// }

// export default timer;