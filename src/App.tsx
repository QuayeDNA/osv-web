import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import SportsClub from './pages/SportsClub';
import Contact from './pages/Contact';
import SportsLayout from './components/sports/SportsLayout';

// Component to conditionally wrap children with different layouts
const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isLegacyRoute = location.pathname.startsWith('/legacy');
  
  if (!isLegacyRoute) {
    return <SportsLayout>{children}</SportsLayout>;
  }
  
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          {/* Sports Club as the main content */}
          <Route path="/" element={<SportsClub />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Legacy routes for the original content */}
          <Route path="/legacy" element={<Navigate to="/legacy/home" replace />} />
          <Route path="/legacy/home" element={<Home />} />
          <Route path="/legacy/about" element={<About />} />
          <Route path="/legacy/services" element={<Services />} />
          <Route path="/legacy/projects" element={<Projects />} />
          <Route path="/legacy/contact" element={<Home />} />
          
          {/* Redirect old sports-club route to home */}
          <Route path="/sports-club" element={<Navigate to="/" replace />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}

export default App;
