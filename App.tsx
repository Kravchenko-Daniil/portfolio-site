import React, { useState } from 'react';
import { content, Language } from './constants';
import Header from './components/Header';
import Hero from './components/Hero';
import Story from './components/Story';
import Now from './components/Now';
import Operate from './components/Operate';
import Life from './components/Life';
import Achievements from './components/Achievements';
import Career from './components/Career';
import Goals from './components/Goals';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [lang, setLang] = useState<Language>('en');
  const t = content[lang];

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 selection:bg-cyan-500/30 selection:text-cyan-100 overflow-x-hidden font-sans">
      {/* Background Ambient Effects */}
      <div className="fixed top-0 left-1/2 w-[800px] h-[800px] bg-cyan-900/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      
      <Header lang={lang} setLang={setLang} content={t.header} />
      
      <main className="max-w-6xl mx-auto px-6 relative z-10">
        <Hero content={t.hero} />
        <Story content={t.story} />
        <Now content={t.now} />
        <Operate content={t.operate} />
        <Life content={t.life} />
        <Achievements content={t.achievements} />
        <Career content={t.career} />
        <Goals content={t.goals} />
        <Contact content={t.contact} />
      </main>

      <Footer content={t.footer} />
    </div>
  );
}

export default App;