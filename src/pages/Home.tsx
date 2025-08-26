import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { ServicesCarousel } from '@/components/ServicesCarousel';
import { CompanyShowcase } from '@/components/CompanyShowcase';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <ServicesCarousel />
        <CompanyShowcase />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Home;