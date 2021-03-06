import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/sparklines';
import GoogleMap from '../components/googlemaps';

class WeatherList extends Component {

  renderWeather(cityData, index) {
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humdities = cityData.list.map(weather => weather.main.humidity);
    // const lon = cityData.city.coord.lon;
    // const lay = cityData.city.coord.lat;
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={index}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange"  units="K" /></td>
        <td><Chart data={pressures} color="green"  units="hPa" /></td>
        <td><Chart data={humdities} color="black" units="%" /></td>
      </tr>
    );
  }

    render() {
        return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th> City </th>
            <th> Temperature (K) </th>
            <th> Pressure (hPa)</th>
            <th> Humudity (%) </th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
        )
    }
}


function mapStateToProps ({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);