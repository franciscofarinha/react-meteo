import React from 'react';


class Weather extends React.Component {
	
	render(){
		return(
			<div className="row">
				<div className="col-xs-12">
					<div className="weather__info">
						<table class="table table-dark">
						  <tbody>
							{ this.props.city && this.props.country && <tr><td> Location: </td> <td> { this.props.city }, { this.props.country }</td></tr>}
							{ this.props.temperature && <tr><td> Temperature: </td> <td> { this.props.temperature } º </td></tr>}
							{ this.props.humidity && <tr><td> Humidity: </td> <td> { this.props.humidity }  </td></tr> }
							{ this.props.description && <tr><td> Conditions: </td> <td> { this.props.description }  </td></tr> }
						  </tbody>
						</table>
						{ this.props.error && <p className="weather__error"> { this.props.error } </p>}
						{ this.props.message && <p className="weather__error">{ this.props.message } </p>}
					</div>
				</div>
			</div>
		);
	}
}

export default Weather;