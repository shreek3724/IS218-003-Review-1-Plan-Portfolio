# VitePress Site Specification & Architecture Document (`site-specification.md`)

## 1. Project Overview & Scope

* **Course & Assignment:** IS218-003 — Review 1 — Plan — Portfolio
* **Project Title:** Portfolio Development Documentation, Research and Planning
* **Platform:** VitePress static site generator hosted on GitHub Pages via GitHub Actions CI/CD.
* **Purpose:** To serve as a public, interactive documentation hub that records career research, reader persona strategy, brand identity decisions, and technical user story specifications.

---

## 2. Information Architecture & Site Map

### 2.1 Navigation Structure

```
[ Top Navbar ]
├── 🏠 Home (index.md)
├── 📚 Documentation (Dropdown / Sidebar)
│   ├── Step 1: Target Direction (/docs/target-direction.md)
│   ├── Step 2: Reader Persona & Promise (/docs/reader-promise.md)
│   ├── Step 3: Brand & Visual Design (/docs/brand-design.md)
│   └── Step 4: User Stories & Specifications (/docs/user-stories.md)
├── 📋 Project Record (/project-record.md)
├── 📄 Résumé (/public/resume.pdf)
└── 🔗 External Links (GitHub Repo | LinkedIn Profile)
```

### 2.2 Page Hierarchy & File Mappings

| Route / Path | File Source | Purpose / Content Summary |
| :--- | :--- | :--- |
| `/` | `index.md` | Homepage landing page titled **"Portfolio Development Documentation, Research and Planning"**. Displays brand archetype, voice words, and the Portfolio Promise statement. |
| `/docs/target-direction` | `docs/target-direction.md` | **Step 1:** Detailed career comparison between Creative AI Product Builder and Forward Deployed Engineer; primary target selection. |
| `/docs/reader-promise` | `docs/reader-promise.md` | **Step 2:** Primary reader persona definition, reader information needs, and exact Portfolio Promise statement. |
| `/docs/brand-design` | `docs/brand-design.md` | **Step 3:** Voice words, brand archetype, comparison of visual directions (Direction A vs. Direction B), rationale, and persuasion choices. |
| `/docs/user-stories` | `docs/user-stories.md` | **Step 4:** User stories 1 through 3 with interactive acceptance check matrices. |
| `/project-record` | `project-record.md` | Complete public project record preserving exact word-for-word text for public assignment evaluation. |
| `/resume.pdf` | `public/resume.pdf` | Directly downloadable PDF candidate résumé. |

---

## 3. Site Content Requirements (Exact Wording)

### 3.1 Step 1: Chosen Target Career Direction

* **Comparison of Two Career Directions:**
  > "Two interesting career directions to compare are Creative AI Product Builder, and Forward Deployed Engineer. The former is a fast based, product-driven, iterative approach that focuses on creating features and working with artists while rapidly prototyping. The latter is primarily enterprise-facing AI system integration and agent architecture, which involves working with enterprise stakeholders to map out workflows, agents, and deployment production systems"

* **Primary Target Direction:**
  > "The primary target direction is Creative AI Product Builder. This role focuses on early adoption of technology, utilizing it to build intuitive, user-centered AI experiences that translate artist and storyteller needs into prototyped features to rollout, and iterative development."

### 3.2 Step 2: Reader Persona & Promise

* **Target Persona:**
  > "The target persona of this portfolio is an internship reviewer, or hiring manager, specifically in creative and AI-technology fields."

* **What They Need to Find:**
  > "This persona needs to evaluate technical skills, prototyping skills, but also user-centered design values and creative approaches of candidates while under severe time constraints"

* **Portfolio Promise Statement:**
  > "For an AI internship reviewer in creative fields, this portfolio makes it easy to see prototyping skills and user-centered design, and to use this information to initiate a conversation."

### 3.3 Step 3: Brand & Design Choices

* **Voice Words:** Approachable, inviting, curious
* **Brand Archetype:** The Creator (Focus on original invention, and intuitive and user-centered design)

* **Direction A — Approachable Creative Minimalist (Selected Direction):**
  * *Visual Concept:* "A clean, uncluttered layout with ample whitespace, crisp modern typography, and a warm, inviting color palette (e.g., soft off-white canvas with vibrant amber, butter-yellow, and indigo accents)."
  * *Visual Reference / Adapted Idea:* "Inspired by modern creative software landing pages (such as Figma and OpenArt web UIs). Adapts clean card containers and playful micro-interactions to make technical prototypes easy and fun to explore. Example reference website link: https://www.lamagadan.studio/"
  * *Tradeoff / Rationale:* "Keeps the UI lightweight and scannable for busy reviewers while presenting an energetic, friendly personality suited for creative AI product roles."

* **Direction B — Dark-Mode Developer Workbench:**
  * *Visual Concept:* "High-contrast dark slate theme with monospaced typography, code-block UI containers, and single neon accent highlights."
  * *Visual Reference / Adapted Idea:* "Inspired by developer documentation sites. Example reference website link: https://vercel.com/docs"
  * *Tradeoff / Rationale:* "Strongly emphasizes backend technical rigor, but can feel colder, less inviting, and visually disconnected from creative artist-focused workflows."

* **Selected Visual Direction Rationale:**
  > "Direction A - Approachable Creative Minimalist: Selected because it reflects the portfolio owner's personality and perspective on design. It delivers a minimalist, easy-to-navigate design that remains approachable and friendly through vibrant accent colors, allowing reviewers to quickly access items without visual overload, expressing user-centered design thinking."

* **Persuasion Choices & Honest Limitations:**
  1. *Choice 1 — Live Interactive Demos & Inspectable Repositories:*
     * Purpose: "Provides direct proof of technical execution, and working user interfaces rather than relying on static screenshots."
     * Honest Limitation: "Proves web prototyping competence, but does not by itself prove backend performance, or design and thinking approaches."
  2. *Choice 2 — Documented User Feedback & Iteration Notes:*
     * Purpose: "Demonstrates user-centered thinking by showing how artist feedback directly influenced feature choices."
     * Honest Limitation: "Shows design judgment and willingness to learn, but can be overly lengthy, and difficult for a reviewer to understand in a short time frame."

### 3.4 Step 4: Specification (User Stories & Acceptance Checks)

* **User Story 1: Interpreting Execution**
  * *User Story:* "As a Creative AI internship reviewer, I want to inspect prototypes to see design thinking of the creator in action."
  * *Acceptance Checks:*
    * Case study section or card includes direct screenshots or evidence of a project or prototype, or a link to where it can be accessed.
    * Items or projects show design thinking through the design of the final product.

* **User Story 2: Accessing Professional Materials**
  * *User Story:* "As an internship reviewer, I want rapid access to professional credentials so I can evaluate background qualifications and initiate candidate outreach."
  * *Acceptance Checks:*
    * Resume is easily accessible, and can be download or read on the website.
    * Linkedin profile link is reachable easily within the website.

* **User Story 3: Navigating & Comparing Visual Treatments**
  * *User Story:* "As an internship reviewer, I want to navigate an approachable, accessible UI so I can inspect project evidence and/or portfolio items easily."
  * *Acceptance Checks:*
    * Site has clear navigation structure and makes it easy to find different projects, items and information of the candidate.
    * Site is visually appealing, and inviting, as well as intuitive in use.

---

## 4. Visual Design System & UI Specifications

### 4.1 Color Palette Tokens (Direction A)

```css
:root {
  /* Surface & Background (60%) */
  --vp-c-bg: #FBFBFA;             /* Warm Soft Off-White Canvas */
  --vp-c-bg-soft: #FAF9F5;        /* Secondary Soft Background Fills */
  --vp-c-bg-alt: #F4F3EE;         /* Card Surface Container Fills */

  /* Structural Typography & Borders (30%) */
  --vp-c-text-1: #1E1B4B;        /* Deep Indigo / Dark Slate Navy (WCAG AAA) */
  --vp-c-text-2: #3730A3;        /* Secondary Muted Indigo */
  --vp-c-border: #E0E0D8;        /* Subtle Neutral Borders */

  /* Highlight Badges & Status Tags (10% Fill) */
  --badge-yellow-bg: #FEF08A;    /* Soft Butter-Yellow Pill Background */
  --badge-yellow-text: #713F12;  /* High contrast dark text on yellow */

  /* Primary CTAs & Active States (10% Accent) */
  --vp-c-brand-1: #F59E0B;       /* Vibrant Amber Primary CTA */
  --vp-c-brand-2: #D97706;       /* Vibrant Amber Hover State */
}
```

### 4.2 Typography & Component Guidelines

* **Headings (`h1`, `h2`, `h3`):** Deep Indigo (`#1E1B4B`), sans-serif typography hierarchy with clear font weights.
* **Callout Cards:** Soft-bordered rectangular cards (`#FAF9F5` fill) with light hover elevation transitions.
* **Status Badges:** Butter-Yellow (`#FEF08A`) pill-shaped inline tags displaying build and step progress indicators.
* **Buttons & Links:** Amber accent styling (`#F59E0B`) for actionable links, opening external URLs in new tabs (`target="_blank" rel="noopener noreferrer"`).

---

## 5. Technical Architecture & Deployment

### 5.1 Repository Directory Tree

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml            # GitHub Actions CI/CD deployment workflow
├── .vitepress/
│   ├── config.mjs                # VitePress navigation, title, and theme configuration
│   └── theme/
│       ├── index.js              # Custom theme setup
│       └── custom.css            # CSS custom properties and custom styling
├── docs/
│   ├── target-direction.md       # Step 1 page
│   ├── reader-promise.md        # Step 2 page
│   ├── brand-design.md          # Step 3 page
│   └── user-stories.md          # Step 4 page
├── public/
│   └── resume.pdf                # PDF Résumé artifact
├── codex-build-spec.md           # Step-by-step prompt guide for Codex AI agent
├── index.md                      # Main website homepage
├── project-record.md             # Public assignment project record
└── site-specification.md         # This specification and architecture document
```

### 5.2 CI/CD Deployment Pipeline (`.github/workflows/deploy.yml`)

* **Trigger:** Every `git push` to `main` branch.
* **Build Step:** `npx vitepress build`.
* **Deploy Target:** GitHub Pages environment (`github-pages`).
* **Artifact Path:** `.vitepress/dist`.