import React from 'react';
import { Content } from '../constants';
import Section from './ui/Section';

interface StoryProps {
  content: Content['story'];
}

const Story: React.FC<StoryProps> = ({ content }) => {
  return (
    <Section id="story">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-bold text-white mb-8">{content.title}</h2>
        <div className="space-y-8 pl-4 border-l-2 border-zinc-800">
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

export default Story;