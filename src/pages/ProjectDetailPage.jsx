import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { API_BASE_URL } from '../config';

export default function ProjectDetailPage() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const fetchProjectDetail = () => {
    setIsLoading(true);
    setError(null);
    setNotFound(false);

    const fetchPromise = fetch(`${API_BASE_URL}/api/projects/${projectId}`).then((res) => {
      if (res.status === 404) {
        return { notFound: true };
      }
      if (!res.ok) {
        throw new Error(`Failed to load project details (HTTP ${res.status})`);
      }
      return res.json();
    });

    const delayPromise = new Promise((resolve) => setTimeout(resolve, 1000));

    Promise.all([fetchPromise, delayPromise])
      .then(([result]) => {
        if (result?.notFound) {
          setNotFound(true);
        } else if (result) {
          setProject(result);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message || 'Unable to connect to the backend server.');
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchProjectDetail();
  }, [projectId]);

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
        <p style={{ color: 'var(--text-muted)', fontWeight: 600, fontFamily: 'var(--font-serif)' }}>Loading Project Details...</p>
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="section container text-center" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
        <h2 style={{ color: 'var(--accent-gold)', fontSize: '2rem', marginBottom: '1rem' }}>Project Not Found</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>No project found with ID "<code>{projectId}</code>".</p>
        <Link to="/projects" className="btn btn-primary">&larr; Back to All Projects</Link>
      </div>
    );
  }

  if (error) {
    return (
      <div className="section container">
        <div className="card error-container">
          <h3 className="error-title">Error Loading Project</h3>
          <p style={{ color: 'var(--text-muted)', maxWidth: '500px' }}>{error}</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
            <button type="button" onClick={fetchProjectDetail} className="btn btn-primary btn-sm">
              Retry
            </button>
            <Link to="/projects" className="btn btn-outline btn-sm">
              &larr; Back to Projects
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!project) return null;

  return (
    <div className="project-detail-page section">
      <div className="container" style={{ maxWidth: '900px' }}>
        <Link to="/projects" className="btn btn-outline btn-sm" style={{ marginBottom: '1.5rem' }}>
          &larr; Back to Projects
        </Link>

        <div className="card">
          <span className="badge">{project.category}</span>
          <h1 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{project.title}</h1>

          {project.image && (
            <img src={project.image} alt={project.title} style={{ width: '100%', maxHeight: '350px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1.5rem', border: '1px solid var(--border-gold)' }} />
          )}

          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1rem', color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>Tech Stack &amp; Tools:</h3>
            <div className="tag-group">
              {project.techStack?.map((tech, idx) => <span className="tag" key={idx}>{tech}</span>)}
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Overview</h3>
            <p style={{ color: 'var(--text-body)', lineHeight: '1.7', fontSize: '1.05rem' }}>{project.detailedDescription}</p>
          </div>

          {project.highlights && (
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Key System Engineering Achievements</h3>
              <ul className="bullet-points">
                {project.highlights.map((h, idx) => <li key={idx}>{h}</li>)}
              </ul>
            </div>
          )}

          <div className="hero-buttons" style={{ marginTop: '2rem' }}>
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                View Repository on GitHub &rarr;
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
