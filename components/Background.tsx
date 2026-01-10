import React from 'react';
import Section from './ui/Section';

interface BackgroundProps {
  content: {
    title: string;
    paragraphs: string[];
  };
}

const Background: React.FC<BackgroundProps> = ({ content }) => {
  return (
    <Section id="background">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-bold text-zinc-300 mb-6">{content.title}</h2>
        <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5 space-y-4">
          {content.paragraphs.map((p, i) => (
            <p key={i} className="text-zinc-400 text-lg">
              {p}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Background;