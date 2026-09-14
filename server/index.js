import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment configuration
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || process.env.ALLOWED_ORIGIN || 'http://localhost:5173';

// File paths for persistence (configurable via environment variables)
const projectsFilePath = process.env.PROJECTS_FILE_PATH || process.env.DATA_FILE_PATH
  ? path.resolve(__dirname, process.env.PROJECTS_FILE_PATH || process.env.DATA_FILE_PATH)
  : path.join(__dirname, 'data', 'projects.json');

const submissionsFilePath = process.env.SUBMISSIONS_FILE_PATH
  ? path.resolve(__dirname, process.env.SUBMISSIONS_FILE_PATH)
  : path.join(__dirname, 'data', 'submissions.json');

// Middleware
app.use(cors({
  origin: CLIENT_ORIGIN,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

// Helper function to read submissions from storage
function readSubmissions() {
  try {
    if (!fs.existsSync(submissionsFilePath)) {
      fs.writeFileSync(submissionsFilePath, '[]', 'utf-8');
      return [];
    }
    const data = fs.readFileSync(submissionsFilePath, 'utf-8');
    return JSON.parse(data || '[]');
  } catch (err) {
    console.error('Error reading submissions storage:', err);
    return [];
  }
}

// Helper function to write submissions to storage
function writeSubmissions(submissions) {
  try {
    fs.writeFileSync(submissionsFilePath, JSON.stringify(submissions, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error writing submissions storage:', err);
    throw new Error('Failed to persist submission data');
  }
}

// Helper function to read projects from storage
function readProjects() {
  try {
    const data = fs.readFileSync(projectsFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading projects data:', err);
    return [];
  }
}

// B1: Server health check endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Portfolio backend server is running successfully'
  });
});

// B2: Serve all projects
app.get('/api/projects', (req, res) => {
  const projects = readProjects();
  res.status(200).json(projects);
});

// B3: Serve a single project by ID
app.get('/api/projects/:id', (req, res) => {
  const { id } = req.params;
  const projects = readProjects();
  const project = projects.find((p) => p.id.toLowerCase() === id.toLowerCase());

  if (!project) {
    return res.status(404).json({ error: 'Project not found' });
  }

  res.status(200).json(project);
});

// B4: Handle contact form submissions
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body || {};

  // Server-side validation
  if (!name || !name.trim()) {
    return res.status(400).json({ error: 'Name is required' });
  }

  if (!email || !email.trim()) {
    return res.status(400).json({ error: 'Email is required' });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return res.status(400).json({ error: 'Invalid email address format' });
  }

  if (!message || !message.trim()) {
    return res.status(400).json({ error: 'Message is required' });
  }

  const submissions = readSubmissions();
  const newSubmission = {
    id: `sub_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
    submittedAt: new Date().toISOString()
  };

  submissions.push(newSubmission);
  writeSubmissions(submissions);

  res.status(201).json({
    message: 'Message received successfully',
    submission: newSubmission
  });
});

// B5: List all submissions for verification (Open endpoint)
app.get('/api/contact', (req, res) => {
  const submissions = readSubmissions();
  res.status(200).json(submissions);
});

// B6: Centralized catch-all 404 handler for undefined routes
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

// B6: Global Express error-handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled server error:', err);
  const status = err.status || 500;
  res.status(status).json({
    error: err.message || 'Internal Server Error'
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Portfolio API server running on port ${PORT}`);
  console.log(`CORS enabled for origin: ${CLIENT_ORIGIN}`);
});
