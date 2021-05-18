const loggerMiddleWare = (store) => (next) => (action) => {
  //미들웨어 기본 구조
  // store: 리덕스 스토어
  // action: 디스패치된 액션
  // next: 함수
};

// const loggerMiddleWare = function (store) {
//   return function (next) {
//     return function (action) {
//       // 미들웨어 기본 구조
//     };
//   };
// };
