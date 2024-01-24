import './style.css';
import { Container } from 'react-bootstrap';

function Hero() {
  return (
    <div className="hero">
      <Container>
        <h1 className="hero-heading">Welcome to my portfolio!</h1>
        <p className="hero-text">This is a React application built using React Bootstrap.</p>
      </Container>
    </div>
  );
}

export default Hero;