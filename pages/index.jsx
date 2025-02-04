import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Nav/Navbar'; // Correcting component paths
import HomePage from '@/pages/Home/Home';    // Correcting path for HomePage
import About from '@/pages/About/About';     // Correcting path for About component

export default function MainPage() {
  return (
    <div>
      <Navbar />
      <main>
        <HomePage />
      
      </main>
      <Footer />
    </div>
  );
}

