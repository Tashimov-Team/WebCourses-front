import React from 'react';
import { Link } from 'react-router-dom';
import { User, Home, BookOpen, MessageSquare, KeyRound, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Header() {
  const { user, logout } = useAuth();
  
  return (
    <header className={`fixed w-full z-50 bg-[#7C77D3] shadow-lg`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-white text-2xl font-bold flex items-center gap-2 hover:text-[#CFF409] transition-colors">
            <BookOpen className="w-8 h-8" />
            EduPlatform
          </Link>
          
          <div className="flex items-center gap-6">
            {user ? (
              <>
                <Link 
                  to="/profile" 
                  className="flex items-center gap-2 text-white hover:text-[#CFF409] transition-colors"
                >
                  <User className="w-6 h-6" />
                  <span className="hidden sm:inline">{user.name}</span>
                </Link>
                <button
                  onClick={logout}
                  className="flex items-center gap-2 text-white hover:text-[#CFF409] transition-colors"
                >
                  <LogOut className="w-6 h-6" />
                  <span className="hidden sm:inline">Выйти</span>
                </button>
              </>
            ) : (
              <Link 
                to="/login" 
                className="flex items-center gap-2 text-white hover:text-[#CFF409] transition-colors"
              >
                <KeyRound className="w-6 h-6" />
                <span className="hidden sm:inline">Войти</span>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}