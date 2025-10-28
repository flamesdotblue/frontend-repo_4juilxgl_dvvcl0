import React from 'react';
import HeaderNav from './components/HeaderNav.jsx';
import HeroSection from './components/HeroSection.jsx';
import HighlightsSection from './components/HighlightsSection.jsx';
import FooterSection from './components/FooterSection.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-inter">
      <HeaderNav />
      <main>
        <HeroSection />
        <HighlightsSection />
      </main>
      <FooterSection />
    </div>
  );
}

export default App;
