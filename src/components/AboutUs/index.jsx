import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import React from 'react';
import aboutUsData from '../../data/aboutUsData.json';

function AboutUs() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h2 className="display-4">{aboutUsData.title}</h2>
        <p className="lead">{aboutUsData.content}</p>
      </div>
    </div>
  );
};

export default AboutUs;