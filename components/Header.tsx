import React from 'react';
import { Language, Content } from '../constants';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  content: Content['header'];
}

const Header: React.FC<HeaderProps> = ({ lang, setLang, content }) => {
  const navIds = ["story", "now", "operate", "life", "achievements", "career", "projects", "goals", "contact"];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/5 h-16 md:h-20">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Brand */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xl font-bold text-white tracking-tight cursor-pointer hover:text-cyan-400 transition-colors"
        >
          {content.brand}
          <span className="text-cyan-500">.</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-6">
          {content.nav.map((item, idx) => (
            <button
              key={idx}
              onClick={() => scrollToSection(navIds[idx])}
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Language Toggle */}
        <div className="flex items-center gap-2 bg-zinc-900 rounded-full p-1 border border-white/10">
          <button
            onClick={() => setLang('en')}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === 'en'
                ? 'bg-zinc-800 text-white shadow-sm'
                : 'text-zinc-500 hover:text-zinc-300'
              }`}
          >
            {content.toggle.en}
          </button>
          <button
            onClick={() => setLang('ru')}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === 'ru'
                ? 'bg-zinc-800 text-white shadow-sm'
                : 'text-zinc-500 hover:text-zinc-300'
              }`}
          >
            {content.toggle.ru}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;