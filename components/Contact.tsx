import React from 'react';
import { Content } from '../constants';
import Section from './ui/Section';

interface ContactProps {
  content: Content['contact'];
}

const Contact: React.FC<ContactProps> = ({ content }) => {
  return (
    <Section id="contact" className="pb-32">
       <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-white mb-6">{content.title}</h2>
          <p className="text-xl text-zinc-400 mb-10">{content.text}</p>
          
          <div className="space-y-4">
             <a href={`https://t.me/${content.telegram.replace('@', '')}`} target="_blank" rel="noreferrer" className="block w-full p-6 rounded-xl bg-zinc-900 border border-white/10 hover:border-cyan-500/50 hover:bg-zinc-800 transition-all group">
                <div className="flex justify-between items-center">
                   <span className="text-zinc-400 group-hover:text-white transition-colors">Telegram</span>
                   <span className="text-cyan-400 font-mono">{content.telegram}</span>
                </div>
             </a>
             <a href={`mailto:${content.email}`} className="block w-full p-6 rounded-xl bg-zinc-900 border border-white/10 hover:border-cyan-500/50 hover:bg-zinc-800 transition-all group">
                <div className="flex justify-between items-center">
                   <span className="text-zinc-400 group-hover:text-white transition-colors">Email</span>
                   <span className="text-cyan-400 font-mono">{content.email}</span>
                </div>
             </a>
             <a href={content.facebook} target="_blank" rel="noreferrer" className="block w-full p-6 rounded-xl bg-zinc-900 border border-white/10 hover:border-cyan-500/50 hover:bg-zinc-800 transition-all group">
                <div className="flex justify-between items-center">
                   <span className="text-zinc-400 group-hover:text-white transition-colors">Facebook</span>
                   <span className="text-cyan-400 font-mono">Daniil Kravchenko</span>
                </div>
             </a>
             <a href={content.instagram} target="_blank" rel="noreferrer" className="block w-full p-6 rounded-xl bg-zinc-900 border border-white/10 hover:border-cyan-500/50 hover:bg-zinc-800 transition-all group">
                <div className="flex justify-between items-center">
                   <span className="text-zinc-400 group-hover:text-white transition-colors">Instagram</span>
                   <span className="text-cyan-400 font-mono">@krav4enko_dd</span>
                </div>
             </a>
          </div>
       </div>
    </Section>
  );
};

export default Contact;