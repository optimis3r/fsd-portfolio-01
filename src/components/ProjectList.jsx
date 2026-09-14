import React from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectList({ projects }) {
  if (!projects?.length) return <p style={{ color: 'var(--text-muted)' }}>No projects available.</p>;

  return (
    <div className="projects-grid">
      {projects.map((p) => (
        <ProjectCard key={p.id} {...p} />
      ))}
    </div>
  );
}
