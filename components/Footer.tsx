import React from 'react';
import { Content } from '../constants';

interface FooterProps {
  content: Content['footer'];
}

const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer className="py-8 border-t border-white/5 text-center">
       <p className="text-zinc-600 text-sm">{content.text}</p>
    </footer>
  );
};

export default Footer;