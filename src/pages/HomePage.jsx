import Container from '../components/Container';
import AboutUs from '../components/AboutUs';
import ContactForm from '../components/ContactForm';
import NavBar from '../components/NavBar';
import Team from '../components/Team';
import Services from '../components/Services';

function HomePage() {
  return (
    <Container>
      <NavBar />
      <div className="home-page">
        <h1>Welcome to Quigly Care</h1>
        <AboutUs />
        <Services />
        <Team />
        <ContactForm />
      </div>
    </Container>
  );
}

export default HomePage;
