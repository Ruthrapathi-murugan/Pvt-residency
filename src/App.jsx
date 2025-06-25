import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar1 from './Components/Navbar1';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Rooms from './Components/Rooms';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import Gallery from './Components/Gallery';

function App() {
  return (
    <Router>
      <Navbar1 />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
