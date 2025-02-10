import React from 'react';
import { BookOpen, Search, Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <BookOpen className="mr-2" />
          <a href="/" className="text-lg font-bold">Storytime</a>
        </div>
        <div className="flex items-center">
          <input type="text" placeholder="Search..." className="border rounded-md px-2 py-1 mr-2" />
          <Search className="mr-4" />
          <Menu className="md:hidden" />
          <div className="hidden md:flex space-x-4">
            <a href="#">Explore</a>
            <a href="#">About</a>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Sign Up</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
