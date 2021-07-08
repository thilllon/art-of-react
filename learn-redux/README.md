# Redux tutorial

https://react.vlpt.us/redux/03-prepare.html

## Redux vs Context API

- single `store`
- middlewares

## Redux `store`의 내장함수

`dispatch`, `getState`, `subscribe`

```js
// store.dispatch()
// store.getState()
// store.subscribe()
```

## Keywords

1. Action - plain object, `type`과 data(여기서는 payload 라고 부르자)를 가짐. `type` 필드는 필수.
2. Action creator - payload를 바탕으로 action을 만들어줌. 즉 반드시 `type`필드를 추가해줌.
3. Reducer - 순수함수여야함. same input same output, 바깥 상태에 영향을 안줌. `state` + `action` -> `새로운 state` 반환
4. Dispatch - action을 받고 reducer를 실행시키는 함수
5. Store - state가 저장되는 곳

## Redux 규칙

1. 1개의 store. 2개 이상도 가능하지만 개발자도구를 활용 못하게됨
2. 모든 state는 immuatable
3. reducer는 순수함수

## `react-redux` package

provider: 리액트에서 리덕스 스토어를 앱 전체에서 사용하게 하기우해 전달해주기위해 필요
connect: `container component에 리덕스 스토어의 특정 state, 특정 dispatcher를 props로 넘겨주기 위한 HOC`를 만들어주는 함수
useSelector: store의 상태조회. 상태구조중에 뽑아낼것만 선택가능함.
useDispatch: 디스패쳐를 리턴하는 훅. 항상 동일한 디스패쳐를 리턴함. 리 랜더링 조건에 잡히지 않음.

## |---|---|

|---|---|

connect: HOC방식으로 짤때필요

useSelector, useDispatch: Hooks방식으로 짤때 필요
useSelector, useDispatch 제공. `store.subscribe(listener)`를 쓸 필요가 없음

`CounterContainer`는 HOC 방식 예제
`TodosContainer`는 hooks 방식 예제

이벤트 핸들러 자체를 액션생성함수와 디스패치를 붙여서 만듦

```js
const 이벤트핸들러 = () => 디스패치(액션생성함수(페이로드));
```

## connect

hooks를 쓰는것이 권장되지만 쓰지 않는 경우 connect를 쓰는법

connect는 HOC를 생성하는 함수

connect(`mapStateToProps function`, `action creators object`)(`target container component`)

- `mapStateToProps`는 이름부터 함수이다. redux store에서 어떤 state들만 props로 넘겨줄건지 필터링하는 함수. useSelector()의 첫번째 인자로 들어가는 필터함수와 동일함
- `action creators` 이건 plain javascript ojbect. action creator 들만 쭉 있음.
- `target container`: connect() 이거의 결과물이 HOC이다. 이를 통해서 target container의 props에 state와 dispatcher가 들어가게됨

### connect 에 대한 misc

1. 원래 커넥트 방식은 `connect(mapStateToProps, mapDispatchToProps)(container)` 근데 `mapDIsptoProps`는 디스패치로 액션 크레이터를 감싸는 역할박에 안함.
2. 원래 리덕스에서 자체적으로 `bindActionCreate`이 있었음. 이걸쓰면 코드가 조금 단순화되지만 결국 단순한 반복이 섞임
3. 그냥 순수객체로만 액션 크리에이터스들만 전달하면 `connect`에서 알아서 디스패치로 wrapping해줌

## react redux dev tool 세팅

https://www.npmjs.com/package/redux-devtools-extension#usage

1. chrome extension설치
2. store 생성시 옵션 추가

```js
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(rootReducer, composeWithDevTools);
```

## useSelector optimization

```js
// equalityFn?: (left: any, right: any) => boolean
// shallowEqual 이용하기

import { useSelector, useDispatch, shallowEqual } from 'react-redux';

function CounterContainer() {
  // useSelector는 리덕스 스토어의 상태를 조회하는 Hook입니다.
  // state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일합니다.
  const { number, diff } = useSelector(
    state => ({
      number: state.counter.number,
      diff: state.counter.diff
    }),
    shallowEqual
  );

  (...)

```
