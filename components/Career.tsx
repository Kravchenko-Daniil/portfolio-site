import React from 'react';
import { Content } from '../constants';
import Section from './ui/Section';

interface CareerProps {
  content: Content['career'];
}

const Career: React.FC<CareerProps> = ({ content }) => {
  return (
    <Section id="career">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-white mb-10">{content.title}</h2>
        <div className="relative border-l border-white/10 ml-3 space-y-12">
          {content.items.map((item, i) => (
            <div key={i} className="relative pl-8 md:pl-12">
              {/* Timeline dot */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-zinc-900 border border-zinc-600 group-hover:border-cyan-400 transition-colors shadow-[0_0_0_4px_#050505]" />
              
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-3">
                 <div>
                   <h3 className="text-xl font-bold text-white tracking-tight">{item.company}</h3>
                   <div className="text-cyan-400 font-medium">{item.role}</div>
                 </div>
                 <div className="text-sm font-mono text-zinc-500 mt-1 sm:mt-0">
                   {item.year}
                 </div>
              </div>

              <p className="text-zinc-400 leading-relaxed mb-4 max-w-2xl text-sm md:text-base">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-x-2 gap-y-1 items-baseline">
                 <span className="text-xs uppercase tracking-wider text-zinc-600 font-semibold">Stack:</span>
                 <span className="text-sm font-mono text-zinc-300">{item.stack}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Career;