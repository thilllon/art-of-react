import React, { Component } from 'react';
class Counter extends Component {
	constructor(props) {
		super(props);
		console.info('0 contructor');
	}
	state = {
		countNumber: 0,
	};
	// @deprecated
	// componentWillMount() {
	// 	console.info('0 componentWillMount');
	// }
	componentDidMount() {
		// 외부 라이브러리 연동: D3, masonry, etc
		// 컴포넌트에서 필요한 데이터 요청: Ajax, GraphQL, etc
		// DOM 에 관련된 작업: 스크롤 설정, 크기 읽어오기 등
		console.info('1 componentDidMount');
	}
	// @deprecated
	// componentWillReceiveProps(nextProps) {
	// 	// nextProps: 새로 받은 props
	// 	// this.props: 기존 props
	// 	console.info('2 componentWillReceiveProps');
	// }

	static getDerivedStateFromProps(nextProps, prevState) {
		// 여기서는 setState 를 하는 것이 아니라
		// 특정 props 가 바뀔 때 설정하고 설정하고 싶은 state 값을 리턴하는 형태로
		// 사용됩니다.

		console.info('3 getDerivedStateFromProps');

		// if (nextProps.value !== prevState.value) {
		// 	return { value: nextProps.value };
		// }
		return null; // null 을 리턴하면 따로 업데이트 할 것은 없다라는 의미
	}
	shouldComponentUpdate(nextProps, nextState) {
		// 컴포넌트를 최적화하는 작업에 사용
		// return false 하면 업데이트를 안함
		// return this.props.checked !== nextProps.checked
		console.info('4 shouldComponentUpdate');

		return true;
	}
	// @deprecated
	// componentWillUpdate(nextProps, nextState) {
	// 	// console.info('5 componentWillUpdate');
	// }
	getSnapshotBeforeUpdate(prevProps, prevState) {
		// DOM 업데이트가 일어나기 직전의 시점입니다.
		// render() -> getSnapshotBeforeUpdate() -> 실제 DOM 에 변화 발생 -> <필수>componentDidUpdate()
		console.info('6 getSnapshotBeforeUpdate');
		var snapshot = {};
		return snapshot;
	}
	componentDidUpdate() {
		console.info('7 componentDidUpdate');
	}

	static defaultProps = {
		//
	};

	// **********
	handleIncrease = () => {
		console.log('increase');
		this.setState({
			countNumber: this.state.countNumber + 1,
		});
	};
	handleDecrease = () => {
		console.log('decrease');
		this.setState({
			countNumber: this.state.countNumber - 1,
		});
	};
	// **********
	render() {
		return (
			<div>
				<h1>카운터</h1>
				<span>{this.state.countNumber}</span>
				<button id="increaseButton" onClick={this.handleIncrease}>
					+
				</button>
				<button id="decreaseButton" onClick={this.handleDecrease}>
					-
				</button>
			</div>
		);
	}
}
export default Counter;
