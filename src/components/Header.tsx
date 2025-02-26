import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, Home, BookOpen, MessageSquare, KeyRound } from 'lucide-react';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full transition-all duration-300 z-50 ${
      isSticky ? 'bg-[#7C77D3] shadow-lg' : 'bg-[#7C77D3]/90 backdrop-blur-lg'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-white text-2xl font-bold flex items-center gap-2 hover:text-[#CFF409] transition-colors">
            <BookOpen className="w-8 h-8" />
            EduPlatform
          </Link>
          
          <div className="flex items-center gap-6">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-white hover:text-[#CFF409] transition-colors"
            >
              <Home className="w-6 h-6" />
              <span className="hidden sm:inline">Главная</span>
            </Link>
            <Link 
              to="/contact" 
              className="flex items-center gap-2 text-white hover:text-[#CFF409] transition-colors"
            >
              <MessageSquare className="w-6 h-6" />
              <span className="hidden sm:inline">Контакты</span>
            </Link>
            <Link 
              to="/profile" 
              className="flex items-center gap-2 text-white hover:text-[#CFF409] transition-colors"
            >
              <User className="w-6 h-6" />
              <span className="hidden sm:inline">Профиль</span>
            </Link>
            <Link 
              to="/login" 
              className="flex items-center gap-2 text-white hover:text-[#CFF409] transition-colors"
            >
              <KeyRound className="w-6 h-6" />
              <span className="hidden sm:inline">Войти</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}