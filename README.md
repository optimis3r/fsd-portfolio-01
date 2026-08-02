# Full Stack Development Lab - Assignment 1

**Student:** Sumedh J Jamadagni  
**Branch:** B.Tech Computer Science & Engineering, NIT Warangal  

---

## Overview
This is a personal portfolio website created for Assignment 1 of the Full Stack Development Lab. It is built strictly using pure HTML5 and Vanilla CSS3 without external frameworks or JavaScript libraries.

The site showcases my academic background at NIT Warangal, technical skills, webmaster experience with IEEE Student Branch, and my top 3 engineering projects.

---

## Design Rationale
The portfolio employs a custom dark mode palette inspired by GitHub's dark interface (`#0E1116` background, `#161B22` card surfaces). This high-contrast dark aesthetic reduces eye strain during reading while maintaining typography contrast with silver-white body text (`#F0F3F6`). A muted dusty rose accent (`#B85B56`) is used for buttons, borders, and links to create a clear visual hierarchy.

---

## Theme & Design
The page uses a dark mode palette inspired by GitHub's dark interface:

- **Background:** `#0E1116` (Midnight navy)
- **Cards & Surfaces:** `#161B22` (GitHub dark surface)
- **Alt Section Background:** `#090C10` (Dark contrast)
- **Main Text:** `#F0F3F6` (Off-white)
- **Muted Text:** `#8B949E` (Slate gray)
- **Accent & Links:** `#B85B56` (Dusty rose)
- **Borders:** `#30363D` (Subtle gray)

---

## Layout Technique Justification
This project combines **CSS Grid** and **Flexbox** strategically based on layout requirements:

- **CSS Grid:** Used for two-dimensional multi-column layouts, including the hero split, technical skills grid (`repeat(auto-fit, minmax(220px, 1fr))`), project grid, and contact split. Grid guarantees consistent card heights and fluid column wrapping across viewports.
- **Flexbox:** Used for one-dimensional alignment tasks, such as the sticky navbar, header button groups, tag chip lists, and footer links, ensuring vertical centering and flex distribution.

---

## Features
- **Semantic HTML5:** Built using standard `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<form>`, and `<footer>` tags.
- **Pop-up Card Zoom:** Skills and project cards expand slightly (`scale(1.06)`) on hover with an elevated shadow effect.
- **Mobile Responsive:** Uses CSS Flexbox and Grid with `@media (max-width: 768px)` breakpoints for mobile screens.
- **PDF Resume:** Linked directly to `24CSB0A76_SumedhJJamadagni.pdf` in the nav bar.

---

## Projects Listed
1. **NSRA (Neuro-Symbolic Register Allocator):** Compiler register allocation using Gradient Boosting models.  
   [GitHub Repo](https://github.com/optimis3r/NSRA-Neuro-Symbolic-Register-Allocation)

2. **TRIAGE-OOM (Predictive OOM Crash Prevention):** Real-time eBPF container crash risk monitoring.  
   [GitHub Repo](https://github.com/optimis3r/TRIAGE-Predictive-OOM-Prevention)

3. **DIALECT (AI Debate & Public Speaking Platform):** Real-time debate platform using React, Node, WebRTC & Socket.io.  
   [GitHub Repo](https://github.com/optimis3r/Dialect)

---

## Directory Structure
```
Assignment-1/
├── index.html
├── style.css
└── README.md
```

---

## Known Limitations
1. **Static Form Handling:** The contact form uses `mailto:` submission without backend server storage.
2. **Local Resume Link:** The resume link targets a static PDF file (`24CSB0A76_SumedhJJamadagni.pdf`).

---
## Running the Project
Simply double-click or open `index.html` in any web browser (Chrome, Firefox, Edge, Safari). No installation or web server required.
