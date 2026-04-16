import React, { useState } from 'react';
import { Content, ProjectItem } from '../constants';
import Section from './ui/Section';
import ProjectModal from './ProjectModal';

interface ProjectsProps {
    content: Content['projects'];
    lang: 'en' | 'ru';
}

const Projects: React.FC<ProjectsProps> = ({ content, lang }) => {
    const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

    return (
        <>
            <Section id="projects">
                <div className="max-w-6xl">
                    <h2 className="text-3xl font-bold text-white mb-10">{content.title}</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {content.items.map((project, i) => (
                            <div
                                key={i}
                                onClick={() => setSelectedProject(project)}
                                className="group relative bg-zinc-900/30 border border-white/5 hover:border-cyan-500/30 rounded-xl p-5 cursor-pointer transition-all duration-300 hover:bg-zinc-900/60 hover:-translate-y-1 overflow-hidden"
                            >
                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 via-cyan-500/0 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="mb-4">
                                        <span className="text-[10px] uppercase tracking-wider font-bold text-cyan-500 block mb-1 truncate">
                                            {project.category}
                                        </span>
                                        <h3 className="text-lg font-bold text-white leading-snug group-hover:text-cyan-100 transition-colors">
                                            {project.title}
                                        </h3>
                                    </div>

                                    {project.short_description && (
                                        <p className="text-sm text-zinc-400 leading-relaxed mb-4 line-clamp-3 flex-grow">
                                            {project.short_description}
                                        </p>
                                    )}

                                    <div className="flex items-center text-xs font-medium text-zinc-500 group-hover:text-zinc-300 transition-colors mt-auto pt-2 border-t border-white/5 bg-transparent">
                                        <span className="mr-auto truncate pr-2 max-w-[70%] text-zinc-600 group-hover:text-zinc-500 transition-colors">
                                            {project.technologies.split(', ')[0]}
                                            {project.technologies.split(', ').length > 1 && ` +${project.technologies.split(', ').length - 1}`}
                                        </span>
                                        <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-300">
                                            Details
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
                lang={lang}
            />
        </>
    );
};

export default Projects;
