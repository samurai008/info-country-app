import React from 'react';
import CountryItem from './CountryItem';

export default class CountryList extends React.Component {

	renderEmptyMessage() {
		return (
			<div>
				No results found.
			</div>
		)
	}

	renderCountryList() {
		const country = this.props.list.map((value, index) => {
			return (
				<CountryItem key={index} countryDetails={value}></CountryItem>
			)
		})
		return (
			<ul>
				{country}
			</ul>
		)
	}

	render() {
		return (
			<div>
				{this.props.list.length > 0 ? this.renderCountryList() : this.renderEmptyMessage()}
			</div>
		)
	}
}