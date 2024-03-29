import './HomePage.css';
import AboutUs from '../components/AboutUs';
import ContactForm from '../components/ContactForm';
import NavBar from '../components/NavBar';
import Team from '../components/Team';
import Services from '../components/Services';
import Faq from '../components/Faq';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div className="home-page">
      <NavBar />
      <div className="sections">
        <Hero />
        <AboutUs />
        <Services />
        <Team />
        <ContactForm />
        <Faq />
      </div>
      <Footer />
    </div >
  );
}

export default HomePage;
