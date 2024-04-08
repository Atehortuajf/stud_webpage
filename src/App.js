import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import WelcomeSection from './components/WelcomeSection';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';
// Import other pages you create
import About from './components/About'; // Assuming you have an About component
import Contact from './components/Contact'; // Assuming you have a Contact component

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<><WelcomeSection /><WhyChooseUs /></>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add other routes here */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
