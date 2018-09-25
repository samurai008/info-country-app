import React from 'react';

export default class ModalContainer extends React.Component {

	renderDetails() {
		let details = Object.keys(this.props.details).map(
			(value, index) => {
				if (this.props.details[value] instanceof Object) {
					if (Array.isArray(this.props.details[value])) {
						this.props.details[value] = this.props.details[value].join(',')
					} else {
						this.props.details[value] = Object.keys(this.props.details[value]).map(
							(_value) => <div>{value}: {this.props.details[value][_value]}</div>
						)
					}
				}
				return (
					<div className="row">
						<div className="col-6">
							<strong>{value}</strong>
						</div>
						<div className="col-6">
							{this.props.details[value]}
						</div>
					</div>
				)
			}
		)

		return (
			<div>
				{details}
			</div>
		)
	}

	render() {
		console.log(this.props.details.languages)
		return (
			<div className="modal">
				<div className="container modal-content">
					{this.renderDetails()}
					<div className="close">
						<button className="btn btn-danger btn-sm" onClick={this.props.toggleModal}>Close</button>
					</div>
				</div>
			</div>
		)
	}
}