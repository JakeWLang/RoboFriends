import React, { Component } from 'react';

class errorBoundary extends Component {
	constructor(props) {
		super();
		this.state = {
			hasError: false
		}
	}

	componentDidCatch(error, info) {
		this.setState({hasError: true})
	}

	render() {
		if (this.state.hasError) {
			return <h1> OOPS! Something went wrong</h1>
		}
		return this.props.children
	}
}

export default errorBoundary;