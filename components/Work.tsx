import React from 'react';
import Section from './ui/Section';

interface Role {
  title: string;
  company: string;
  dates: string;
  bullets: string[];
  stack: string;
}

interface WorkContent {
  title: string;
  roles: Role[];
}

interface WorkProps {
  content: WorkContent;
}

const Work: React.FC<WorkProps> = ({ content }) => {
  return (
    <Section id="work">
      <h2 className="text-3xl font-bold text-white mb-12">{content.title}</h2>
      
      <div className="relative border-l border-zinc-800 ml-3 md:ml-6 space-y-16">
        {content.roles.map((role, i) => (
          <div key={i} className="relative pl-8 md:pl-12">
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] md:-left-[7px] top-2 w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-zinc-950 border-2 border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
            
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-4">
               <div>
                 <h3 className="text-xl md:text-2xl font-semibold text-white">{role.title}</h3>
                 <div className="text-cyan-400 font-medium mt-1">{role.company}</div>
               </div>
               <div className="text-sm font-mono text-zinc-500 mt-2 sm:mt-0 bg-zinc-900/50 px-3 py-1 rounded-full border border-white/5 inline-block sm:block w-fit">
                 {role.dates}
               </div>
            </div>

            <ul className="space-y-2 mb-6">
              {role.bullets.map((bullet, idx) => (
                <li key={idx} className="text-zinc-400 text-sm md:text-base leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1 before:h-1 before:bg-zinc-600 before:rounded-full">
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="bg-zinc-900/40 p-3 rounded-lg border border-white/5 inline-block">
               <span className="text-xs uppercase tracking-wider text-zinc-500 mr-2">Stack:</span>
               <span className="text-sm text-zinc-300 font-mono">{role.stack}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Work;