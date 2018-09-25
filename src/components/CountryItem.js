import React from 'react';
import ModalContainer from './ModalContainer';

export default class CountryItem extends React.Component {

	constructor() {
		super();
		this.state = {
			toggle: false
		};
	}

	toggleModal() {
		this.setState({
			toggle: !this.state.toggle
		});
		console.log('toggle modal')
	}

	renderModal() {
		if (this.state.toggle) {
				return (
					<ModalContainer toggleModal={this.toggleModal.bind(this)} details={this.props.countryDetails}></ModalContainer>
				);
		}
	}

	render() {
		console.log(this.state.toggle);
		return (
			<li>
				{this.renderModal()}
				<a href="#" onClick={this.toggleModal.bind(this)}>{this.props.countryDetails.name}</a>
			</li>
		)
	}

}