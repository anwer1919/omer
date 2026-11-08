import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import OaDivider from '../components/OaDivider';
import Statement from '../components/Statement';
import Work from '../components/Work';
import About from '../components/About';
import Social from '../components/Social';
import Footer from '../components/Footer';

export default function Home() {
  return (
    // fit-screen: على الجوال الصفحة بارتفاع الشاشة بالضبط، والبطاقات تملأ المتبقي (القاعدة في globals.css)
    <div className="fit-screen">
      <NavBar />
      <main>
        <Hero />
        <OaDivider />
        <Statement />
        <Work />
        <About />
        <Social />
      </main>
      <Footer />
    </div>
  );
}

