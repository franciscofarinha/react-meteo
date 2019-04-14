import React from 'react';
import Titles from "./Components/Titles";
import Form from "./Components/Form";
import Weather from "./Components/Weather";

const API_KEY = "";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
    code: undefined,
    message: undefined,
    weatherId: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if(city && country && data.cod == 200) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: undefined,
        code: data.cod,
        weatherId: data.weather[0].id
      });
    } else if(city && country && data.cod == 404) {
      //console.log(data);
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: data.message.charAt(0).toUpperCase() + data.message.slice(1),
        weatherId: undefined
      });
    } else {
       this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values for city and country.",
        weatherId: undefined
      });
    }

  }

  render() {
    return (
      <div className="main-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 title-container">
                  <Titles/>
                </div>
                <div className="col-xs-12 form-container">
                  <Form getWeather={this.getWeather}/>
                  <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                    message={this.state.message}
                  />
                </div>
              </div>
            </div>
      </div>
    );
  }
}


export default App;
