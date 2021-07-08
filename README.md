# 리액트를 다루는 기술

`리액트를 다루는 기술`에 나오는 예제 실습 코드입니다.

# 17장. Redux를 사용하여 리액트 애플리케이션 상태 관리하기: `react-redux-tutorial`

- TBD

# 18장. Redux middleware를 통한 비동기 작업 관리: `learn-redux-middleware`

- TBD

# 19장. 코드 스플리팅: `splitting-sample`

## 1. dynamic import 방법

- `Promise` 반환 후 `then`에서 동작 설정

- `dynamicallyImportedModule.js`

```js
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

## 2. 컴포넌트를 state에 비동기로 넣는 방법

- `this.setState` 이용하려면 class component로 작성해야함

## 3. `React.lazy` 함수와 <Suspense> 컴포넌트를 이용한 방법

- 랜더링하는 시점에 로딩(극한의 이익)
- 함수형 컴포넌트 사용가능

```jsx
<Suspense fallback={<div>loading...</div>}>
  <SomeDynamicallyLoadedComponent />
</Suspense>
```

# class component에서 event handler 사용하는 방법

## Method 1: class-properties(RECOMMENDED)

- arrow function
- ~~not standard JS grammar~~

```jsx
// Need not define a constructor
handleIncrease = () => {
  // do something
};
return <button onClick={this.handleIncrease}>+1</button>;
```

## Method 2: function type

- Bind `this` in the constructor explicitly

```jsx
constructor(props) {
  super(props);
  this.handleIncrease = this.handleIncrease.bind(this);
}

handleIncrease(){
  // do something
};

return <button onClick={this.handleIncrease}>+1</button>;

```

## Method 3: Inline(NOT RECOMMENDED)

- hard to optimize

```jsx
handleIncrease(){
  // do something
};

return <button onClick={() => this.handleIncrease()}>+1</button>;
```
