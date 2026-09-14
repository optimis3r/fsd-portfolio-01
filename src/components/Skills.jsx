import React from 'react';

const skillCategories = [
  { title: "Languages & Systems", skills: ["C / C++", "Python", "Java", "JavaScript", "SQL", "Linux & eBPF", "Compiler Design"] },
  { title: "Machine Learning", skills: ["PyTorch", "Scikit-Learn", "ONNX Runtime", "Pandas & NumPy", "Matplotlib"] },
  { title: "Frameworks & Web", skills: ["React.js", "Node.js & Express.js", "Socket.io & WebRTC", "MongoDB", "MySQL"] },
  { title: "Tools & Infrastructure", skills: ["Git & GitHub", "Docker", "Linux cgroup v2", "PySide6 (Qt)"] }
];

export default function Skills() {
  return (
    <div className="skills-grid">
      {skillCategories.map((c, i) => (
        <div className="card skill-box" key={i}>
          <h3>{c.title}</h3>
          <ul className="skill-list">
            {c.skills.map((s, idx) => <li key={idx}>{s}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}
