import Container from '../components/Container';
import AboutUs from '../components/AboutUs';
import ContactForm from '../components/ContactForm';
import NavBar from '../components/NavBar';

function HomePage() {
  return (
    <Container>
      <NavBar />
      <div className="home-page">
        <h1>Welcome to Quingly Care</h1>
        <AboutUs />
        <ContactForm />
      </div>
    </Container>
  );
}

export default HomePage;
