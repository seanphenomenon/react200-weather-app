import React from 'react';


export default class SearchHistory extends React.Component{

constructor(props){
  super(props);
}

render(){

  return(
      <div className='col-md-6'>
        <div className="card border-info">
          <h5 className="card-header">Search History</h5>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text"> With supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>
    </div>

    );
  }
}
