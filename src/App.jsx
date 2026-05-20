import React, { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';

// Layout & Utilities
import Layout from './layouts/Layout';
import Loading from './components/ui/Loading';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import HistoryPage from './pages/HistoryPage';
import FacilityPage from './pages/FacilityPage';
import LocationPage from './pages/LocationPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const [loading, setLoading] = useState(true);
  const path = window.location.pathname;
  const filename = path.split('/').pop() || 'index.html';
  const isHome = filename === 'index.html' || filename === '' || path === '/';

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  // Simple routing based on URL filename
  const getPageComponent = () => {
    switch (filename) {
      case 'index.html':
      case '':
        return <HomePage />;
      case 'AboutUs.html':
        return <AboutPage />;
      case 'History.html':
        return <HistoryPage />;
      case 'Facility.html':
        return <FacilityPage />;
      case 'Location.html':
        return <LocationPage />;
      case 'Contact.html':
        return <ContactPage />;
      default:
        // In dev mode with Vite, it might be /about or /history without .html
        if (path.includes('about')) return <AboutPage />;
        if (path.includes('history')) return <HistoryPage />;
        if (path.includes('facility')) return <FacilityPage />;
        if (path.includes('location')) return <LocationPage />;
        if (path.includes('contact')) return <ContactPage />;
        return <NotFoundPage />;
    }
  };

  return (
    <HelmetProvider>
      <div className="font-sans antialiased text-slate-800 bg-slate-50 min-h-screen">
        {loading ? <Loading /> : null}
        


        <div className="flex flex-col min-h-screen">
          <Layout>
            {getPageComponent()}
          </Layout>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default App;
