import React from 'react';
import Section from './ui/Section';

interface AboutContent {
  title: string;
  paragraphs: string[];
}

interface AboutProps {
  content: AboutContent;
}

const About: React.FC<AboutProps> = ({ content }) => {
  return (
    <Section id="about">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-bold text-white mb-8">{content.title}</h2>
        <div className="space-y-6">
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

export default About;