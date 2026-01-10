import React from 'react';
import { Content } from '../constants';
import Section from './ui/Section';

interface NowProps {
  content: Content['now'];
}

const Now: React.FC<NowProps> = ({ content }) => {
  return (
    <Section id="now">
      <div className="bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-3xl p-10 md:p-14 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="relative z-10">
           <h2 className="text-3xl font-bold text-white mb-8">{content.title}</h2>
           <p className="text-xl md:text-2xl text-zinc-200 font-light leading-relaxed max-w-4xl">{content.text}</p>
           
           {content.projectUrl && (
             <a 
               href={content.projectUrl} 
               target="_blank" 
               rel="noreferrer" 
               className="inline-flex items-center gap-3 mt-10 px-6 py-3 bg-zinc-800/80 border border-white/10 rounded-lg text-cyan-400 hover:text-white hover:bg-cyan-600 hover:border-cyan-500/50 transition-all shadow-lg hover:shadow-cyan-500/20"
             >
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                 <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                 <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
               </svg>
               <span className="font-mono text-sm tracking-wide">{content.projectUrl.replace(/^https?:\/\//, '')}</span>
             </a>
           )}
        </div>
      </div>
    </Section>
  );
};

export default Now;