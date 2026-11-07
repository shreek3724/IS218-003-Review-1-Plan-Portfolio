# VitePress Website Build Specification (`codex-build-spec.md`)

This specification file is designed for Codex (AI coding agent) to build, configure, and deploy a VitePress documentation website hosted on GitHub Pages for assignment **IS218-003 — Review 1 — Plan — Portfolio**.

When prompted with **"do step 0"**, **"do step 1"**, **"do step 2"**, **"do step 3"**, or **"do step 4"**, execute the exact directives listed in the corresponding step section below. After completing each step, commit and push the changes to GitHub so the live GitHub Pages website updates immediately for real-time tracking.

---

## Global Design System Tokens

Apply these visual design choices throughout the VitePress site (Direction A — Approachable Creative Minimalist):

* **Canvas / Surface Background:** Soft off-white canvas (`#FBFBFA` or `#FAF9F5`)
* **Typography & Headings:** Deep Indigo (`#1E1B4B` / Dark Slate Navy)
* **Highlights & Status Badges:** Soft Butter-Yellow (`#FEF08A` background with dark text)
* **Primary Buttons & CTAs:** Vibrant Amber (`#F59E0B`, hover `#D97706`)
* **Tone & Voice:** Approachable, inviting, curious (The Creator Archetype)

---

## Step 0: Initial Setup & Live GitHub Pages Deployment

### Instruction for Codex when user says: "do step 0"

Set up the core VitePress project structure, base landing page, and automated GitHub Actions workflow so the website is live on GitHub Pages from the very beginning.

#### Directives for Codex:

1. **Project Scaffold & Directory Structure:**
   Create the base VitePress directory layout:
   * `.vitepress/config.mjs` (VitePress site & navigation configuration)
   * `.vitepress/theme/index.js` & `.vitepress/theme/custom.css` (Custom theme & color token setup)
   * `.github/workflows/deploy.yml` (GitHub Actions automated deployment workflow for GitHub Pages)
   * `public/resume.pdf` (Placeholder for downloadable PDF résumé)
   * `index.md` (Main home landing page)
   * `project-record.md` (Public assignment specification record)
   * `docs/` folder for individual step documentation pages (`target-direction.md`, `reader-promise.md`, `brand-design.md`, `user-stories.md`)

2. **Homepage Landing Setup (`index.md`):**
   * Set the main opening title header of `index.md` to:  
     `# Portfolio Development Documentation, Research and Planning`
   * Include a brief welcome description introducing the site as the live documentation hub for IS218 career research, brand strategy, and user story specifications.
   * Add a status badge indicating Step 0 initial deployment is complete and live.

3. **Configure Navigation (`.vitepress/config.mjs`):**
   * Set the site title to `"Portfolio Development Documentation, Research and Planning"`.
   * Configure base navigation bar links for:
     * Home (`/`)
     * Project Record (`/project-record`)

4. **GitHub Pages Deployment Workflow (`.github/workflows/deploy.yml`):**
   * Configure a GitHub Actions workflow that triggers on every push to the `main` branch.
   * Node.js version: 20.x.
   * Build command: `npx vitepress build`.
   * Deployment target: GitHub Pages (`.vitepress/dist`).

5. **Commit & Deploy:**
   * Commit all files and push to `main`.
   * Output the live GitHub Pages website URL for the user to track progress.

---

## Step 1: Target Career Direction

### Instruction for Codex when user says: "do step 1"

Create the target career direction page (`docs/target-direction.md`) using the exact word-for-word text from `project-record.md` and update site navigation.

#### Directives for Codex:

1. **Create `docs/target-direction.md`:**
   Include the exact word-for-word text:

   * **Comparison of Two Career Directions:**  
     "Two interesting career directions to compare are Creative AI Product Builder, and Forward Deployed Engineer. The former is a fast based, product-driven, iterative approach that focuses on creating features and working with artists while rapidly prototyping. The latter is primarily enterprise-facing AI system integration and agent architecture, which involves working with enterprise stakeholders to map out workflows, agents, and deployment production systems"

   * **Primary Target Direction:**  
     "The primary target direction is Creative AI Product Builder. This role focuses on early adoption of technology, utilizing it to build intuitive, user-centered AI experiences that translate artist and storyteller needs into prototyped features to rollout, and iterative development."

2. **Update Navigation (`.vitepress/config.mjs`):**
   * Add **Step 1: Target Direction** (`/docs/target-direction`) to the main top navigation bar and sidebar menu under "Documentation".

3. **Commit & Push:**
   * Commit the changes and push to `main` so the live website updates immediately.

---

## Step 2: Reader Persona & Promise

### Instruction for Codex when user says: "do step 2"

Build the reader persona and promise page (`docs/reader-promise.md`) with exact word-for-word text, and highlight the Promise Statement on the homepage (`index.md`).

#### Directives for Codex:

1. **Create `docs/reader-promise.md`:**
   Include the exact word-for-word text:

   * **Target Persona:**  
     "The target persona of this portfolio is an internship reviewer, or hiring manager, specifically in creative and AI-technology fields."

   * **What They Need to Find:**  
     "This persona needs to evaluate technical skills, prototyping skills, but also user-centered design values and creative approaches of candidates while under severe time constraints"

   * **Portfolio Promise Statement:**  
     "For an AI internship reviewer in creative fields, this portfolio makes it easy to see prototyping skills and user-centered design, and to use this information to initiate a conversation."

2. **Update Landing Page (`index.md`):**
   * Under the main title `"Portfolio Development Documentation, Research and Planning"`, add a callout box featuring:
     * **Voice Words:** Approachable, inviting, curious
     * **Brand Archetype:** The Creator (Focus on original invention, and intuitive and user-centered design)
     * Prominently displayed Portfolio Promise Statement.

3. **Update Navigation (`.vitepress/config.mjs`):**
   * Add **Step 2: Reader Persona & Promise** (`/docs/reader-promise`) to navbar and sidebar.

4. **Commit & Push:**
   * Commit and push to `main` so live site reflects Step 2.

---

## Step 3: Brand & Design Choices

### Instruction for Codex when user says: "do step 3"

Implement custom CSS styling for **Direction A — Approachable Creative Minimalist** and build the brand documentation page (`docs/brand-design.md`).

#### Directives for Codex:

1. **Apply Styling (`.vitepress/theme/custom.css`):**
   * Define CSS custom properties for soft off-white canvas (`#FBFBFA`), deep indigo text (`#1E1B4B`), butter-yellow status pills (`#FEF08A`), and vibrant amber CTAs (`#F59E0B`).
   * Create styling rules for custom cards, hover micro-interactions, and status badges.

2. **Create `docs/brand-design.md`:**
   Include the exact word-for-word text:

   * **Voice Words & Brand Archetype:**  
     Voice Words: Approachable, inviting, curious  
     Brand Archetype: The Creator (Focus on original invention, and intuitive and user-centered design)

   * **Direction A — Approachable Creative Minimalist (Selected Direction):**  
     Visual Concept: "A clean, uncluttered layout with ample whitespace, crisp modern typography, and a warm, inviting color palette (e.g., soft off-white canvas with vibrant amber, butter-yellow, and indigo accents)."  
     Visual Reference / Adapted Idea: "Inspired by modern creative software landing pages (such as Figma and OpenArt web UIs). Adapts clean card containers and playful micro-interactions to make technical prototypes easy and fun to explore. Example reference website link: https://www.lamagadan.studio/"  
     Tradeoff / Rationale: "Keeps the UI lightweight and scannable for busy reviewers while presenting an energetic, friendly personality suited for creative AI product roles."

   * **Direction B — Dark-Mode Developer Workbench:**  
     Visual Concept: "High-contrast dark slate theme with monospaced typography, code-block UI containers, and single neon accent highlights."  
     Visual Reference / Adapted Idea: "Inspired by developer documentation sites. Example reference website link: https://vercel.com/docs"  
     Tradeoff / Rationale: "Strongly emphasizes backend technical rigor, but can feel colder, less inviting, and visually disconnected from creative artist-focused workflows."

   * **Selected Visual Direction:**  
     "Direction A - Approachable Creative Minimalist: Selected because it reflects the portfolio owner's personality and perspective on design. It delivers a minimalist, easy-to-navigate design that remains approachable and friendly through vibrant accent colors, allowing reviewers to quickly access items without visual overload, expressing user-centered design thinking."

   * **Persuasion Choices & Limitations:**  
     Choice 1 — Live Interactive Demos & Inspectable Repositories: Purpose: "Provides direct proof of technical execution, and working user interfaces rather than relying on static screenshots." Honest Limitation: "Proves web prototyping competence, but does not by itself prove backend performance, or design and thinking approaches."  
     Choice 2 — Documented User Feedback & Iteration Notes: Purpose: "Demonstrates user-centered thinking by showing how artist feedback directly influenced feature choices." Honest Limitation: "Shows design judgment and willingness to learn, but can be overly lengthy, and difficult for a reviewer to understand in a short time frame."

3. **Update Navigation (`.vitepress/config.mjs`):**
   * Add **Step 3: Brand & Design** (`/docs/brand-design`) to navbar and sidebar.

4. **Commit & Push:**
   * Commit and push to `main` to see custom styles live on GitHub Pages.

---

## Step 4: User Stories & Specifications

### Instruction for Codex when user says: "do step 4"

Build `docs/user-stories.md` containing the exact User Stories and Acceptance Checks, formatted with interactive VitePress checkboxes and status badges.

#### Directives for Codex:

1. **Create `docs/user-stories.md`:**
   Include the exact word-for-word text:

   * **User Story 1: Interpreting Execution**  
     User Story: "As a Creative AI internship reviewer, I want to inspect prototypes to see design thinking of the creator in action."  
     Acceptance Checks:
     * Case study section or card includes direct screenshots or evidence of a project or prototype, or a link to where it can be accessed.
     * Items or projects show design thinking through the design of the final product.

   * **User Story 2: Accessing Professional Materials**  
     User Story: "As an internship reviewer, I want rapid access to professional credentials so I can evaluate background qualifications and initiate candidate outreach."  
     Acceptance Checks:
     * Resume is easily accessible, and can be download or read on the website.
     * Linkedin profile link is reachable easily within the website.

   * **User Story 3: Navigating & Comparing Visual Treatments**  
     User Story: "As an internship reviewer, I want to navigate an approachable, accessible UI so I can inspect project evidence and/or portfolio items easily."  
     Acceptance Checks:
     * Site has clear navigation structure and makes it easy to find different projects, items and information of the candidate.
     * Site is visually appealing, and inviting, as well as intuitive in use.

2. **Finalize Site-Wide Navigation (`.vitepress/config.mjs`):**
   Update the navbar and sidebar to list all documentation pages:
   * Home (`/`)
   * Step 1: Target Direction (`/docs/target-direction`)
   * Step 2: Reader Promise (`/docs/reader-promise`)
   * Step 3: Brand & Design (`/docs/brand-design`)
   * Step 4: Specifications (`/docs/user-stories`)
   * Project Record (`/project-record`)
   * Download Résumé (`/resume.pdf`)
   * GitHub & LinkedIn social links

3. **Commit & Push:**
   * Commit and push to `main` so the complete documentation site is fully deployed and accessible on GitHub Pages.