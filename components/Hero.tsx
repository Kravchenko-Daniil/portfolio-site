import React from 'react';
import { Content } from '../constants';
import Section from './ui/Section';

interface HeroProps {
  content: Content['hero'];
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <Section id="hero" className="pt-32 md:pt-48 pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left: Text & Photo */}
        <div className="space-y-10 order-2 lg:order-1">
           {/* Photo Container - Bigger & Shadowier */}
           <div className="relative w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden shadow-[0_20px_60px_-15px_rgba(6,182,212,0.2)] border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/20 to-transparent opacity-50 mix-blend-overlay" />
              <img 
                src="https://picsum.photos/800/800?grayscale" 
                alt={content.photo_alt} 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000 ease-out"
              />
           </div>
           
           <div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.0] drop-shadow-lg">
                {content.headline}
              </h1>
              <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed max-w-lg border-l-2 border-cyan-500/50 pl-6">
                {content.subheadline}
              </p>
           </div>
        </div>

        {/* Right: Passport Card */}
        <div className="order-1 lg:order-2 perspective-1000">
          <div className="relative group hover:rotate-1 transition-all duration-700 ease-out">
            {/* Glow backing */}
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-600/20 to-blue-700/20 rounded-2xl blur-2xl opacity-50 group-hover:opacity-100 transition duration-700"></div>
            
            {/* Glass Card */}
            <div className="relative bg-zinc-900/60 backdrop-blur-2xl border border-white/10 p-6 md:p-10 rounded-2xl shadow-2xl shadow-black/50">
              <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-6">
                 <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-500">{content.passport_title}</h3>
                 <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
                    <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)] animate-pulse" />
                 </div>
              </div>
              
              <div className="space-y-6">
                {content.passport_fields.map((field, idx) => (
                  <div key={idx} className="grid grid-cols-12 gap-4 items-baseline">
                    <span className="col-span-4 text-[11px] font-bold uppercase tracking-wider text-zinc-600">{field.label}</span>
                    <span className="col-span-8 text-base md:text-lg text-white font-medium tracking-tight">{field.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t border-white/5">
                 <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500 mb-5">{content.passport_contacts_title}</h4>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   {content.passport_contacts.map((contact, idx) => (
                      <div key={idx}>
                        <div className="text-[10px] uppercase tracking-wider text-zinc-600 mb-1">{contact.label}</div>
                        <div className="text-cyan-400 font-mono text-sm tracking-wide">{contact.value}</div>
                      </div>
                   ))}
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;