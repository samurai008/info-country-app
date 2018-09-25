import  React  from "react";

export default class Loading {
	render() {
		if (this.props.loading === true) {
			return (
				<div className="loader">
					<div className="spinner">
						Spinner Here
					</div>
				</div>
			)
		}
	}
}