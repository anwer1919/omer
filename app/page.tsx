import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import OaDivider from '@/components/OaDivider';
import Statement from '@/components/Statement';
import Work from '@/components/Work';
import About from '@/components/About';
import Social from '@/components/Social';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <OaDivider />
      <Statement />
      <Work />
      <About />
      <Social />
      <Footer />
    </main>
  );
}
