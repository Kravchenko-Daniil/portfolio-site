import React from 'react';
import Section from './ui/Section';
import { motion } from 'framer-motion';

interface HighlightsContent {
  title: string;
  bullets: string[];
  chips: string[];
}

interface AchievementsContent {
  title: string;
  items: string[];
}

interface HighlightsProps {
  highlights: HighlightsContent;
  achievements: AchievementsContent;
}

const Highlights: React.FC<HighlightsProps> = ({ highlights, achievements }) => {
  return (
    <Section id="highlights">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Highlights & Tech Stack */}
        <div className="lg:col-span-5 space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">{highlights.title}</h2>
            <ul className="space-y-4">
              {highlights.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-400">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-500/50 flex-shrink-0" />
                  <span className="leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {highlights.chips.map((chip, i) => (
              <span 
                key={i} 
                className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-mono text-cyan-400/80 hover:border-cyan-500/30 transition-colors"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Achievements */}
        <div className="lg:col-span-7">
          <div className="bg-zinc-900/30 border border-white/5 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-white mb-6">{achievements.title}</h3>
            <div className="space-y-6">
              {achievements.items.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-cyan-900/30 transition-colors">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-cyan-500">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <p className="text-zinc-300 leading-relaxed text-sm md:text-base">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Highlights;