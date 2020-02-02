import React from 'react';

export default class CityInformation extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div className='col-md-6'>
        <div className="card border-info">
          <div className="card">
            <div className='card-header'>City Information</div>
            <div className="card-body">
              <h5 className="card-title text-center">City Image</h5>
              <hr />

              <div className="d-flex bd-highlight mb-3 justify-content-center">
                <div className="p-1 bd-highlight mr-auto">
                  <strong>Temperature(F)</strong>
                </div>
                <div className="p-1 bd-highlight mr-auto">
                  <strong>Pressure</strong>
                </div>
                <div className="p-1 bd-highlight mr-auto">
                  <strong>Humidity</strong>
                </div>
              </div>

              <div className="d-flex bd-highlight mb-3 align-items-center">
                <div className='p-1 bd-highlight mr-auto'>
                  <p>Test</p>
                </div>
                <div className='p-1 bd-highlight mr-auto'>
                  <p>Test</p>
                </div>
                <div className='p-1 bd-highlight mr-auto'>
                  <p>Test</p>
                </div>
              </div>


              <div className="d-flex bd-highlight mb-3 justify-content-center">
                <div className='p-1 bd-highlight mr-auto'>
                  <strong>Lowest Temp(F)</strong>
                </div>
                <div className='p-1 bd-highlight mr-auto'>
                  <strong>Highest Temp(F)</strong>
                </div>
                <div className='p-1 bd-highlight mr-auto'>
                  <strong>Wind Speed</strong>
                </div>
              </div>

              <div className="d-flex bd-highlight mb-3 align-items-center">
                <div className='p-1 bd-highlight mr-auto'>
                  <p>Test</p>
                </div>
                <div className='p-1 bd-highlight mr-auto'>
                  <p>Test</p>
                </div>
                <div className='p-1 bd-highlight mr-auto'>
                  <p>Test</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>







    );
  }
}
