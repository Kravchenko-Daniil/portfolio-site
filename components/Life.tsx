import React from 'react';
import { Content } from '../constants';
import Section from './ui/Section';

interface LifeProps {
  content: Content['life'];
}

const Life: React.FC<LifeProps> = ({ content }) => {
  return (
    <Section id="life">
      <div className="max-w-3xl ml-auto text-right">
        <h2 className="text-3xl font-bold text-white mb-8">{content.title}</h2>
        <div className="space-y-8 border-r-2 border-zinc-800 pr-6">
          {content.paragraphs.map((p, i) => (
            <p key={i} className="text-lg md:text-xl text-zinc-400 leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Life;