import React from 'react';
import { Content } from '../constants';
import Section from './ui/Section';

interface AchievementsProps {
  content: Content['achievements'];
}

const Achievements: React.FC<AchievementsProps> = ({ content }) => {
  return (
    <Section id="achievements">
      <h2 className="text-3xl font-bold text-white mb-10">{content.title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {content.bullets.map((item, i) => (
          <div key={i} className="flex items-center gap-4 p-4 border border-white/5 bg-zinc-900/20 rounded-lg">
            <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0 text-cyan-500">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                 <polyline points="20 6 9 17 4 12"></polyline>
               </svg>
            </div>
            <p className="text-zinc-200 font-medium">{item}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Achievements;