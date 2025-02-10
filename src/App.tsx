import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StoryList from './components/StoryList';
import Footer from './components/Footer';
import { stories } from './data/stories';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <StoryList stories={stories} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
