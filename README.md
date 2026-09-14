# Full Stack Development Lab - Personal Portfolio

**Student:** Sumedh J Jamadagni  
**Branch:** B.Tech Computer Science & Engineering, NIT Warangal  
**Course Code:** CS1303 - Full Stack Development Lab  

---

# Part 1: Assignment 1 - Static Personal Portfolio

## Overview
This is a personal portfolio website created for Assignment 1 of the Full Stack Development Lab. It is built strictly using pure HTML5 and Vanilla CSS3 without external frameworks or JavaScript libraries.

The site showcases my academic background at NIT Warangal, technical skills, webmaster experience with IEEE Student Branch, and my top 3 engineering projects.

## Design Rationale
The portfolio employs a custom dark mode palette inspired by GitHub's dark interface (`#0E1116` background, `#161B22` card surfaces). This high-contrast dark aesthetic reduces eye strain during reading while maintaining typography contrast with silver-white body text (`#F0F3F6`). A muted dusty rose accent (`#B85B56`) is used for buttons, borders, and links to create a clear visual hierarchy.

## Theme & Design
The page uses a dark mode palette inspired by GitHub's dark interface:

- **Background:** `#0E1116` (Midnight navy)
- **Cards & Surfaces:** `#161B22` (GitHub dark surface)
- **Alt Section Background:** `#090C10` (Dark contrast)
- **Main Text:** `#F0F3F6` (Off-white)
- **Muted Text:** `#8B949E` (Slate gray)
- **Accent & Links:** `#B85B56` (Dusty rose)
- **Borders:** `#30363D` (Subtle gray)

## Layout Technique Justification
This project combines **CSS Grid** and **Flexbox** strategically based on layout requirements:

- **CSS Grid:** Used for two-dimensional multi-column layouts, including the hero split, technical skills grid (`repeat(auto-fit, minmax(220px, 1fr))`), project grid, and contact split. Grid guarantees consistent card heights and fluid column wrapping across viewports.
- **Flexbox:** Used for one-dimensional alignment tasks, such as the sticky navbar, header button groups, tag chip lists, and footer links, ensuring vertical centering and flex distribution.

## Features
- **Semantic HTML5:** Built using standard `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<form>`, and `<footer>` tags.
- **Pop-up Card Zoom:** Skills and project cards expand slightly (`scale(1.06)`) on hover with an elevated shadow effect.
- **Mobile Responsive:** Uses CSS Flexbox and Grid with `@media (max-width: 768px)` breakpoints for mobile screens.
- **PDF Resume:** Linked directly to `24CSB0A76_SumedhJJamadagni.pdf` in the nav bar.

## Projects Listed
1. **NSRA (Neuro-Symbolic Register Allocator):** Compiler register allocation using Gradient Boosting models.  
   [GitHub Repo](https://github.com/optimis3r/NSRA-Neuro-Symbolic-Register-Allocation)

2. **TRIAGE-OOM (Predictive OOM Crash Prevention):** Real-time eBPF container crash risk monitoring.  
   [GitHub Repo](https://github.com/optimis3r/TRIAGE-Predictive-OOM-Prevention)

3. **DIALECT (AI Debate & Public Speaking Platform):** Real-time debate platform using React, Node, WebRTC & Socket.io.  
   [GitHub Repo](https://github.com/optimis3r/Dialect)

## Directory Structure
```
Assignment-1/
├── index.html
├── style.css
└── README.md
```

## Known Limitations
1. **Static Form Handling:** The contact form uses `mailto:` submission without backend server storage.
2. **Local Resume Link:** The resume link targets a static PDF file (`24CSB0A76_SumedhJJamadagni.pdf`).

## Running the Project
Simply double-click or open `index.html` in any web browser (Chrome, Firefox, Edge, Safari). No installation or web server required.

---

# Part 2: Assignment 2 - React Portfolio

## Overview
In Assignment 2, I updated the portfolio from Assignment 1 into a React single-page application built with Vite. I broke the HTML structure down into reusable components, added state management using React hooks (`useState`, `useEffect`), and set up client-side routing using `react-router-dom`.

## Component Structure & State
I organized the project into components in `src/components/` and page routes in `src/pages/`:

- **Component Hierarchy:** `App.jsx` handles top-level routing and layout, wrapping `Navbar`, the active page route (`HomePage`, `AboutPage`, `ProjectsPage`, `ProjectDetailPage`, `ContactPage`, `NotFoundPage`), and `Footer`.
- **Props & Mapping:** `ProjectsPage` reads project data from `src/data/projects.js` and passes the array to `ProjectList`. `ProjectList` maps over the projects and passes each project's details as props to `ProjectCard` (demonstrating prop drilling across 2 levels).
- **Card State:** Each `ProjectCard` keeps its own `isExpanded` state (`useState`) so expanding details on one project card doesn't open the others.
- **Contact Form:** `ContactForm` tracks input values (`name`, `email`, `message`) in state. It validates inputs as you type and disables the submit button until required fields are valid.

## State Lifting & Theme Toggle
- **Theme State:** I lifted the dark/light theme state up to `App.jsx` so `Navbar` and all pages share the same theme.
- **Theme Persistence:** A `useEffect` hook saves the selected theme to `localStorage` and updates `data-theme` on the `<html>` element so the setting stays when refreshing the page.

## useEffect Implementations
I used `useEffect` in four places in the app:

1. **Theme Storage (`App.jsx`):** Saves the current theme to `localStorage` and updates the root attribute whenever `theme` changes.
2. **Simulated Home Loading (`HomePage.jsx`):** Runs a 1-second `setTimeout` on mount to show a loading screen before rendering content. It uses `clearTimeout` in the cleanup function so timers don't run if you navigate away.
3. **Window Resize Handler (`Navbar.jsx`):** Listens to `window.resize` events on mount to close the mobile nav menu when the screen width expands past 768px. It cleans up with `removeEventListener`.
4. **Form Validation (`ContactForm.jsx`):** Runs validation checks whenever `formData` updates to update error messages and toggle the submit button.

## Routing Setup
Client-side routing uses `react-router-dom` with the following routes:

- `/` — **Home Page:** Hero section, profile overview, and a simulated loading state on mount.
- `/about` — **About Page:** Education details, skills grid, and experience.
- `/projects` — **Projects Page:** Mapped list of projects.
- `/projects/:projectId` — **Project Detail Page:** Dynamic route using `useParams` to look up and display details for a specific project ID.
- `/contact` — **Contact Page:** Controlled contact form page.
- `*` — **404 Page:** Catch-all route for unknown URLs with a link back home.

## Features
- Modular component layout using functional components and React Hooks.
- Instant client-side page switching with `Link` and `NavLink` (no full reloads).
- Dynamic URL routes for project detail views.
- Input validation on the contact form with disabled submit states.
- Dark/light mode theme toggle stored in `localStorage`.

## Directory Structure
```
Assignment-2/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── index.css
    ├── assets/
    ├── data/
    │   └── projects.js
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   ├── ProjectList.jsx
    │   ├── ProjectCard.jsx
    │   ├── Skills.jsx
    │   └── ContactForm.jsx
    └── pages/
        ├── HomePage.jsx
        ├── AboutPage.jsx
        ├── ProjectsPage.jsx
        ├── ProjectDetailPage.jsx
        ├── ContactPage.jsx
        └── NotFoundPage.jsx
```

## Known Limitations
1. **Mock Data:** Project data is loaded from a local file (`src/data/projects.js`) rather than an external API server.
2. **Local Resume File:** The resume download links to a local static PDF file.

## Running the Project

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start dev server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.
   

4. Build for production:
   ```bash
   npm run build
   ```
## Video Demo
[https://drive.google.com/drive/folders/1zFQhfVbMOuCzgf-FP2K1fn3EMFnwJAQG?usp=drive_link](https://drive.google.com/drive/folders/1zFQhfVbMOuCzgf-FP2K1fn3EMFnwJAQG?usp=drive_link)

---

# Part 3: Assignment 3 - Backend Integration (Node.js / Express)

## Overview
In Assignment 3, I extended the React portfolio by building and connecting a Node.js/Express backend service in `/server`. The static project data is now served through REST endpoints, and the contact form submits live messages that are validated and persisted on the server.

## Backend Architecture & Endpoints
The backend is built with Express using ES Modules and loads configuration from `.env` via `dotenv`:

- **API Endpoints:**
  - `GET /` — Health check endpoint returning `{ "status": "ok" }`.
  - `GET /api/projects` — Returns all projects with existing component fields.
  - `GET /api/projects/:id` — Returns single project by ID (or HTTP 404).
  - `POST /api/contact` — Validates `{ name, email, message }` and saves to storage (returns 201 or 400).
  - `GET /api/contact` — Open verification endpoint returning all stored submissions.
  - `*` — Centralized 404 catch-all and global error middleware returning JSON errors.
- **Storage & Persistence:** Contact submissions are saved to `server/data/submissions.json` so data persists across server restarts without external database setup.
- **CORS:** Configured with `cors` to allow requests from the Vite frontend (`http://localhost:5173`).

## Frontend Integration & useEffect
I updated the frontend to consume the live API using native `fetch` inside `useEffect`:

1. **Remote Projects (`ProjectsPage.jsx`):** Removed static import and added `useEffect` to fetch `GET /api/projects`. Shows a loading spinner while fetching and an error card with a retry button if the server is offline.
2. **Project Details (`ProjectDetailPage.jsx`):** Fetches `GET /api/projects/:id` using `useParams` with handling for loading, 404 "Project Not Found", and network errors.
3. **Contact Submission (`ContactForm.jsx`):** Submits form data via `POST /api/contact`, shows "Sending Message..." state, displays server validation error messages, and confirms successful submission.

## Features
- Modular Express API with centralized error and 404 handling.
- Server-side data validation on contact submissions.
- File-based JSON persistence for contact messages.
- Loading spinners and resilient error recovery with retry on the frontend.
- Zero CORS errors during client-server communication.

## Directory Structure
```
Assignment-3/
├── index.html
├── package.json
├── vite.config.js
├── postman_collection.json
├── test_api.sh
├── .env.example
├── server/
│   ├── package.json
│   ├── index.js
│   ├── .env.example
│   └── data/
│       ├── projects.json
│       └── submissions.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── config.js
    ├── components/
    └── pages/
```

## Running the Project

1. Start backend server:
   ```bash
   cd server
   npm install
   npm run dev
   ```
   Server runs on `http://localhost:5000`.

2. Start frontend dev server:
   ```bash
   npm install
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

## Testing & Verification
- **Automated Tests:** Run `./test_api.sh` to test all 9 backend scenarios via cURL.
- **Postman Collection:** Import `postman_collection.json` to test all endpoints.

## Video Demo
[https://drive.google.com/file/d/1T-dPGaxNbF4JkpdUyQdFCyQ6t6U7bruJ/view?usp=drive_link](https://drive.google.com/file/d/1T-dPGaxNbF4JkpdUyQdFCyQ6t6U7bruJ/view?usp=drive_link)


