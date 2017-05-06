import React, { Component } from 'react';
import { actionSearch } from '../actions/index';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };

		// jsx와 class instance와 묶기, jsx애서 this 
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
		

	}

	onInputChange(event) {
		this.setState({ term: event.target.value });
	}


	onFormSubmit(event) {
		event.preventDefault();
		this.props.actionSearch(this.state.term);
		this.setState({ term: ''});
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
					placeholder="Get a five forecast in your favorite cities!"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}


function mapDispatchToState(dispatch) {
	return bindActionCreators( { actionSearch }, dispatch );
}

export default connect(null, mapDispatchToState)(SearchBar);