import React from 'react';
import axios from 'axios';
import CitySearch from './components/CitySearch';
import CityInformation from './components/CityInformation';
import SearchHistory from './components/SearchHistory';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }


  ComponentDidMount() {
    this.getWeatherdata()
  }

  getWeatherData() {
console.log( )

  }


  render() {
    return (
        <div className='container-fluid'>
          <div className='jumbotron jumbotron-fluid text-center'>
            <h1 className='display-3'>Origin Weather Application</h1>
            <p className='lead'> Always know if you'll need an umbrella!</p>
            </div>
                <CitySearch/>
                <div className='row'>
                <CityInformation />
                <SearchHistory />
            </div>
            </div>

    );
  }
}
