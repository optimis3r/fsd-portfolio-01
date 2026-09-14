import React, { useState, useEffect } from 'react';
import ProjectList from '../components/ProjectList';
import { API_BASE_URL } from '../config';

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProjects = () => {
    setIsLoading(true);
    setError(null);

    const fetchPromise = fetch(`${API_BASE_URL}/api/projects`).then((res) => {
      if (!res.ok) {
        throw new Error(`Failed to fetch projects (HTTP ${res.status})`);
      }
      return res.json();
    });

    const delayPromise = new Promise((resolve) => setTimeout(resolve, 1000));

    Promise.all([fetchPromise, delayPromise])
      .then(([data]) => {
        setProjects(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message || 'Unable to connect to the backend server. Please verify the API is running.');
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="projects-page section bg-alt">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
          Explore key engineering projects spanning compiler optimization, Linux kernel eBPF memory telemetry, and real-time WebRTC platforms.
        </p>

        {isLoading && (
          <div className="loader-container">
            <div className="spinner"></div>
            <p style={{ color: 'var(--text-muted)', fontWeight: 600, fontFamily: 'var(--font-serif)' }}>Loading Projects from API...</p>
          </div>
        )}

        {!isLoading && error && (
          <div className="card error-container">
            <h3 className="error-title">Failed to Load Projects</h3>
            <p style={{ color: 'var(--text-muted)', maxWidth: '500px' }}>{error}</p>
            <button type="button" onClick={fetchProjects} className="btn btn-primary btn-sm">
              Retry Connection
            </button>
          </div>
        )}

        {!isLoading && !error && <ProjectList projects={projects} />}
      </div>
    </div>
  );
}
