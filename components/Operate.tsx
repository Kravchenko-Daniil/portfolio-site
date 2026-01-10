import React from 'react';
import { Content } from '../constants';
import Section from './ui/Section';

interface OperateProps {
  content: Content['operate'];
}

const Operate: React.FC<OperateProps> = ({ content }) => {
  return (
    <Section id="operate">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-white mb-6">{content.title}</h2>
        <p className="text-zinc-500 mb-8 italic">{content.intro}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {content.bullets.map((bullet, i) => (
             <div key={i} className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl hover:border-zinc-700 transition-colors">
               <div className="flex items-start gap-4">
                 <div className="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)] flex-shrink-0" />
                 <p className="text-zinc-300 leading-relaxed">{bullet}</p>
               </div>
             </div>
           ))}
        </div>
      </div>
    </Section>
  );
};

export default Operate;