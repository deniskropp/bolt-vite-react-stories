import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StoryList from './components/StoryList';
import Footer from './components/Footer';
import NewStory from './components/NewStory';
import { stories } from './data/stories';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<><HeroSection /><StoryList stories={stories} /></>} />
            <Route path="/new-story" element={<NewStory />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
