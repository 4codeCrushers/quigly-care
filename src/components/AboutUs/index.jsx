import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import React from 'react';
import aboutUsData from '../../data/aboutUsData.json';

function AboutUs() {
  const imagePath = '/assets/images/';

  return (
    <div className="about-us" id="about">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <div className="about-us-content">
            {aboutUsData.content.split('\n').map((paragraph, index) => (
              <div key={index}>
                {paragraph}
                <br />
              </div>
            ))}
          </div>
          <img src={`${imagePath}${aboutUsData.headerImage}`} alt="About Us Header Image" className="img-fluid" />
        </div>
      </div>

      <div className="container">
        <div className="row">
          {aboutUsData.images.map((image, index) => (
            <div key={index} className="col-md-4">
              <img src={`${imagePath}${image}`} alt={`About Us Image ${index + 1}`} className="img-fluid" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;