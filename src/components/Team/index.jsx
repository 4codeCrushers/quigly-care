import Carousel from 'react-bootstrap/Carousel';
import teamData from '../../data/teamData.json';
import slideOneImage from '/assets/images/slideOneImage.jpg';
import slideTwoImage from '/assets/images/slideTwoImage.jpg';
import slideThreeImage from '/assets/images/slideThreeImage.jpg';
import './style.css';
import { Container } from 'react-bootstrap';

function Team() {
  return (
    <div className="team">
      <Container>
      <h2 className="team-section-heading" id="team">Meet the Team</h2>
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <div className="carousel-item-one">
              <img
                className="d-block w-100 carousel-image"
                src={slideOneImage}
                alt="Slide 1"
              />
              <div className="carousel-text">
                <h3>{teamData.slideOne.title}</h3>
                <p>{teamData.slideOne.content}</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-item-two">
              <img
                className="d-block w-100 carousel-image"
                src={slideTwoImage}
                alt="Slide 2"
              />
              <div className="carousel-text">
                <h3>{teamData.slideTwo.title}</h3>
                <p>{teamData.slideTwo.content}</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-item-three">
              <img
                className="d-block w-100 carousel-image"
                src={slideThreeImage}
                alt="Slide 3"
              />
              <div className="carousel-text">
                <h3>{teamData.slideThree.title}</h3>
                <p>{teamData.slideThree.content}</p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      </Container>
    </div>
  );
}

export default Team;