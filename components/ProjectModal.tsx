import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectItem } from '../constants';

interface ProjectModalProps {
    project: ProjectItem | null;
    onClose: () => void;
    lang: 'en' | 'ru';
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, lang }) => {
    useEffect(() => {
        if (project) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [project]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {project && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative bg-[#0A0A0A] border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl"
                    >
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white bg-zinc-900/50 hover:bg-zinc-800 rounded-full transition-colors z-10"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>

                        <div className="p-6 md:p-8">
                            <div className="mb-6">
                                <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold tracking-wider mb-3 border border-cyan-500/20">
                                    {project.category}
                                </span>
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                                    {project.title}
                                </h2>
                            </div>

                            <div className="space-y-6 text-zinc-300">
                                <div className="prose prose-invert prose-sm max-w-none">
                                    <p className="whitespace-pre-wrap leading-relaxed text-base">
                                        {project.description}
                                    </p>
                                </div>

                                {(project.what_was_done || project.result) && (
                                    <div className="bg-zinc-900/50 rounded-xl p-5 border border-white/5 space-y-4">
                                        {project.what_was_done && (
                                            <div>
                                                <h4 className="text-sm font-bold text-zinc-100 uppercase tracking-wide mb-2 opacity-80">
                                                    {lang === 'ru' ? 'Что сделано' : 'What was done'}
                                                </h4>
                                                <p className="text-sm leading-relaxed text-zinc-400">
                                                    {project.what_was_done}
                                                </p>
                                            </div>
                                        )}

                                        {project.result && (
                                            <div>
                                                <h4 className="text-sm font-bold text-zinc-100 uppercase tracking-wide mb-2 opacity-80">
                                                    {lang === 'ru' ? 'Результат' : 'Result'}
                                                </h4>
                                                <p className="text-sm leading-relaxed text-zinc-400">
                                                    {project.result}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                )}

                                <div>
                                    <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3">
                                        {lang === 'ru' ? 'Технологии' : 'Technologies'}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.split(', ').map((tech, i) => (
                                            <span key={i} className="px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-300 text-xs font-medium border border-zinc-700/50">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {project.links && project.links.length > 0 && (
                                    <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3">
                                        {project.links.map((link, i) => (
                                            <a
                                                key={i}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black hover:bg-zinc-200 transition-colors text-sm font-bold"
                                            >
                                                {link.label}
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                    <polyline points="15 3 21 3 21 9"></polyline>
                                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                                </svg>
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
