import React from 'react';

const API_KEY = 'ab3b62af06e932c934c1e7b9de501f00';

export default class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        this.setState({
          coordinates: pos.coords,
        });
        this.checkLocation();
      }, () => {
        this.checkLocation();
      }, options);
    }

    setInterval(() => this.checkLocation(), 10 * 60 * 1000);
  }

  checkLocation() {
    if (!this.state.coordinates) {
      fetch('https://ipinfo.io/json')
        .then(res => res.json())
        .then((ip) => {
          this.setState({
            coordinates: {
              latitude: +ip.loc.split(',')[0],
              longitude: +ip.loc.split(',')[1],
            },
          });

          this.fetchForecast();
        });
    } else {
      this.fetchForecast();
    }
  }

  fetchForecast() {
    const { coordinates } = this.state;
    const API_URL = `//api.openweathermap.org/data/2.5/weather?units=metric&lat=${ coordinates.latitude }&lon=${ coordinates.longitude }&appid=${ API_KEY }`;
    fetch(API_URL)
      .then(c => c.json())
      .then((forecast) => {
        this.setState({ forecast });
      });
  }

  renderWeather() {
    if (!this.state.forecast) {
      return (
        <div className="weather-container">
          <p>Loading...</p>
        </div>
      );
    }

    return (
      <div className="weather-container">
        <h2>Weather for { this.state.forecast.name }</h2>
        <p>Current temperature: { this.state.forecast.main.temp }&deg;c</p>
        <p>Forecast High: { this.state.forecast.main.temp_max }&deg;c</p>
        <p>Forecast Low: { this.state.forecast.main.temp_min }&deg;c</p>
        <p>Humidity: { this.state.forecast.main.humidity }%</p>
        <p>Wind Speed: { this.state.forecast.wind.speed } km/h</p>
      </div>
    );
  }

  render() {
    return (
      <div>
        { this.renderWeather() }
      </div>
    );
  }
}
