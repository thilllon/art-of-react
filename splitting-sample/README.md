# splitting-sample

-   19장 코드 스플리팅

## dynamic import 방법

-   Promise 반환 -> then에서 동작 설정
    dynamicallyImportedModule.js

    ```javascript
    import('./dynamicallyImportedModule').then((dynamicallyImportedModule)) => {
        // do something
        dynamicallyImportedModule.default(); // default export 함수 이용시
        dynamicallyImportedModule.showName(); // named export 함수 이용시
        dynamicallyImportedModule.showCompany(); // named export 함수 이용시
        return 로드된 모듈
    }).then(로드된 모듈 => {
        // do something

    })
    ```

## 컴포넌트를 state에 비동기로 넣는 방법

-   this.setState 이용할거라 클래스형 컴포넌트로 짜야함

## React.lazy 함수와 <Suspense> 컴포넌트를 이용한 방법

-   랜더링하는 시점에 로딩(극한의 이익)
-   함수형 컴포넌트 사용가능
-   <Suspense fallback={<div>loading...</div>}>
