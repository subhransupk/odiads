import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedListings from './components/FeaturedListings';
import Stats from './components/Stats';
import AppDownload from './components/AppDownload';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Categories />
      <FeaturedListings />
      <Stats />
      <AppDownload />
      <Footer />
    </main>
  );
}
