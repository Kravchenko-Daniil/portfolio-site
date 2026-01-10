import React from 'react';
import { Content } from '../constants';
import Section from './ui/Section';

interface GoalsProps {
  content: Content['goals'];
}

const Goals: React.FC<GoalsProps> = ({ content }) => {
  return (
    <Section id="goals">
      <h2 className="text-3xl font-bold text-white mb-10">{content.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {content.cards.map((card, i) => (
          <div key={i} className="group relative p-10 rounded-2xl bg-zinc-900/40 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-cyan-900/10">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-6 group-hover:text-cyan-500 transition-colors duration-300">{card.title}</h3>
            <p className="text-3xl md:text-5xl font-semibold text-white tracking-tight">{card.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Goals;