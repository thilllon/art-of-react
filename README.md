# 리액트를 다루는 기술

`리액트를 다루는 기술`에 나오는 예제 실습 코드입니다.

### react-redux-tutorial

- 17장 리덕스를 사용하여 리액트 애플리케이션 상태 관리하기

### learn-redux-middleware

- 18장 리덕스 미들웽어를 통한 비동기 작업 관리

## splitting-sample

- 19장 코드 스플리팅

### dynamic import 방법

- Promise 반환 -> then에서 동작 설정
  dynamicallyImportedModule.js

  ```javascript
  import('./dynamicallyImportedModule').then((dynamicallyImportedModule)) => {
      // do something
      dynamicallyImportedModule.default(); // default export 함수 이용시
      dynamicallyImportedModule.showName(); // named export 함수 이용시
      dynamicallyImportedModule.showCompany(); // named export 함수 이용시
      return loadedModule
  }).then(loadedModule => {
      // do something
  })
  ```

### 컴포넌트를 state에 비동기로 넣는 방법

- this.setState 이용할거라 클래스형 컴포넌트로 짜야함

### React.lazy 함수와 <Suspense> 컴포넌트를 이용한 방법

- 랜더링하는 시점에 로딩(극한의 이익)
- 함수형 컴포넌트 사용가능
- <Suspense fallback={<div>loading...</div>}>

## class component

### method 1: class-properties(RECOMMENDED)

- not standard js grammar

```javascript
// no need constructor

handleIncrease = () => {
  //
};
return <button onClick={this.handleIncrease}>+1</button>;
```

### method 2: bind this in contructor

```javascript
constructor(props) {
  super(props);
  this.handleIncrease = this.handleIncrease.bind(this);
}

handleIncrease(){
  //
};

return <button onClick={this.handleIncrease}>+1</button>;

```

### method 3: inline(NOT RECOMMENDED)

- hard to optimize

```javascript
handleIncrease(){
  //
};

return <button onClick={() => this.handleIncrease()}>+1</button>;
```
