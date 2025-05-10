import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/global.css';

// Lazy load route components with loading boundaries
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Academics = lazy(() => import('./pages/Academics'));
const Admission = lazy(() => import('./pages/Admission'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Exam = lazy(() => import('./pages/Exam'));
const PublicDisclosure = lazy(() => import('./pages/Disclosure'));
const MandatoryDisclosure = lazy(() => import('./pages/MandatoryDisclosure'));
const Contact = lazy(() => import('./pages/Contact'));
const BeyondAcademics = lazy(() => import('./pages/BeyondAcademics'));

// Loading component with spinner
const LoadingSpinner = () => (
  <div className="loading-spinner">
    <div className="spinner"></div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            
            <Route path="/academics" element={<Academics />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/exam" element={<Exam />} />
            <Route path="/disclosure" element={<PublicDisclosure />} />
            <Route path="/mandatory-disclosure" element={<MandatoryDisclosure />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/beyond-academics" element={<BeyondAcademics />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;