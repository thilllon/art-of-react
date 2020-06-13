import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
	static defaultProps = {
		data: [],
		onRemove: () => console.warn('onRemove not defined'),
		onUpdate: () => console.warn('onUpdate not defined'),
	};

	shouldComponentUpdate(nextProps, nextState) {
		// console.dir(nextProps);
		// console.dir(nextState);
		// debugger;
		return nextProps.data !== this.props.data;
	}

	render() {
		console.log('render PhoneInfoList');
		const { data, onRemove, onUpdate } = this.props;
		const list = data.map(elem => <PhoneInfo key={elem.id} info={elem} onRemove={onRemove} onUpdate={onUpdate} />);

		return <div>{list}</div>;
	}
}

export default PhoneInfoList;
