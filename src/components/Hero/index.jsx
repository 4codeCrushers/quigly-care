import './style.css';
import { Container } from 'react-bootstrap';

function Hero() {
  return (
    <div className="hero">
      <Container>
        <h1 className="hero-heading">Welcome to Quigly Care!</h1>
      </Container>
    </div>
  );
}

export default Hero;