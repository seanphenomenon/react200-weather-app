import React from 'react';

export default class CitySearch extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
        <div>
         <div className='row'>
                <div className='d-flex'>
                  <div className="p-2">
                    <button className='btn btn-primary'>San Diego</button>
                  </div>
                  <div className="p-2">
                    <button className='btn btn-primary'>New York</button>
                  </div>
                  <div className="p-2">
                    <button className='btn btn-primary'>Washington D.C</button>
                  </div>
                  <div className='p-2'>
                    <button className='btn btn-primary'>London</button>
                  </div>
                  <div className='p-2'>
                    <button className='btn btn-primary'>Tokyo</button>
                  </div>
                </div>
              </div>

              <div className='col-md-12'>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Search City.." />
                  <div className="input-group-append">
                    <button className="input-group-text" type='button'>Go!</button>
                  </div>
                </div>
              </div>
          </div>

    );
  }
}
