import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import React from 'react';
import aboutUsData from '../../data/aboutUsData.json';

function AboutUs() {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h2 className="display-4">{aboutUsData.title}</h2>
          <p className="lead">{aboutUsData.content}</p>
        </div>
      </div>
      
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src="https://placehold.co/600x400" alt="Placeholder 1" className="img-fluid left-image" />
          </div>
          <div className="col-md-4">
            <img src="https://placehold.co/600x400" alt="Placeholder 2" className="img-fluid middle-image" />
          </div>
          <div className="col-md-4">
            <img src="https://placehold.co/600x400" alt="Placeholder 3" className="img-fluid right-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;