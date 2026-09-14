import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ id, title, shortDescription, detailedDescription, techStack, githubLink, image, highlights }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="card project-card">
      <div>
        {image && <img src={image} alt={title} className="project-image" loading="lazy" />}
        <div className="project-header">
          <h3>{title}</h3>
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
              GitHub &rarr;
            </a>
          )}
        </div>
        <p className="project-tech"><strong>Tech Stack:</strong> {Array.isArray(techStack) ? techStack.join(', ') : techStack}</p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1rem' }}>{shortDescription}</p>

        {isExpanded && (
          <div className="card-details-box">
            <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>{detailedDescription}</p>
            {highlights?.length > 0 && (
              <ul className="bullet-points" style={{ fontSize: '0.85rem' }}>
                {highlights.map((h, i) => <li key={i}>{h}</li>)}
              </ul>
            )}
          </div>
        )}
      </div>

      <div className="card-actions">
        <button type="button" onClick={() => setIsExpanded(!isExpanded)} className="btn btn-outline btn-sm">
          {isExpanded ? 'Hide Details' : 'View Details'}
        </button>
        <Link to={`/projects/${id}`} className="btn btn-primary btn-sm">
          Full Page &rarr;
        </Link>
      </div>
    </div>
  );
}
