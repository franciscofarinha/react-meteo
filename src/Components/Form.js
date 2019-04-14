import React from 'react';

const Form = props => (
	<form onSubmit={props.getWeather}>
		<div className="col-xs-12 col-md-4">
			<input type="text" className="form-control" name="city" placeholder="City"></input>
		</div>
		<div className="col-xs-12 col-md-4">
			<input type="text" className="form-control" name="country" placeholder="Country"></input>
		</div>

		<div className="col-xs-12 col-md-4">
			<button className="btn btn-block">Get Weather</button>
		</div>
	</form>
);

export default Form;