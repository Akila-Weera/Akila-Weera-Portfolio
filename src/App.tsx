import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Media from './components/Media';
import Services from './components/Services';
import Collaborators from './components/Collaborators';
import Testimonials from './components/Testimonials';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-dark selection:bg-primary/30 selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <About />
          <Media />
          <Services />
          <Collaborators />
          <Testimonials />
          <Banner />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
