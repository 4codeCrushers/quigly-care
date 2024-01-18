import Container from '../components/Container';
import AboutUs from '../components/AboutUs';
import ContactForm from '../components/ContactForm';

function HomePage() {
  return (
    <Container>
      <div className="home-page">
        <h1>Welcome to Quingly Care</h1>
        <AboutUs />
        <ContactForm />
      </div>
    </Container>
  );
}

export default HomePage;
