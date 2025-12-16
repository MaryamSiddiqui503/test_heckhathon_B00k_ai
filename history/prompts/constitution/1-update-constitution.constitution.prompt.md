---
id: 1
title: Update Constitution
stage: constitution
date: 2025-12-14
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: master
user: user
command: /sp.constitution
labels: ["constitution", "setup", "governance"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
tests:
 -
---

## Prompt

```text
# Constitution
## Physical AI & Humanoid Robotics Textbook

---

## 1. Project Purpose

The purpose of this project is to create a **complete, structured, and deployable
digital textbook** for the course:

**"Physical AI & Humanoid Robotics"**

The book focuses on **Physical AI and embodied intelligence**, explaining how AI
systems operate in the **physical world** through humanoid robots, bridging the gap
between digital intelligence and physical bodies.

This is a **book-first project**. Only textbook creation is allowed in this phase.

---

## 2. Authorship and Front Matter (Mandatory)

### Author
- **Author Name:** Maryam Siddiqui

The author name must appear clearly in:
- Introduction
- Preface
- Book metadata (where applicable)

### Required Front Pages
The book must include the following pages at the beginning:

1. **Introduction**
   - What the book is about
   - Course overview
   - How to read and use the book

2. **Preface**
   - Motivation for writing the book
   - Target audience
   - Prerequisites
   - Learning philosophy

---

## 3. Scope (What This Project Includes)

This project includes:

- Writing a **full academic textbook**
- Front matter (Introduction, Preface)
- Core learning chapters
- Back matter (Index and References)
- Use of **Docusaurus** for book publishing
- Markdown-based content
- Deployment-ready static site
- Clean, academic **UI/UX for reading**

---

## 4. Out of Scope (Strictly Excluded)

The following must NOT be implemented in this phase:

- RAG chatbot
- Signup / Signin or authentication
- Personalization features
- Translation (including Urdu)
- Claude subagents or reusable intelligence
- APIs, databases, or backend services

These features are intentionally separated for later phases.

---

## 5. Target Audience

The textbook is written for:

- University-level students
- Learners with basic AI or programming background
- Beginners in robotics and Physical AI

The tone must be:
- Educational
- Clear and structured
- Professional
- Beginner-friendly but technically correct

---

## 6. Course Alignment (Non-Negotiable)

All content must strictly follow the provided course details.

### Core Theme
- Physical AI
- Embodied Intelligence
- AI systems governed by real-world physical laws

### Modules (Fixed)
The book contains **exactly four modules**:

1. The Robotic Nervous System (ROS 2)
2. The Digital Twin (Gazebo & Unity)
3. The AI-Robot Brain (NVIDIA Isaac)
4. Vision-Language-Action (VLA)

---

## 7. Chapter Structure Rule (Very Important)

### Chapters per Module
- **Each module must contain exactly 3 chapters**
- Total core chapters: **12**

### Weekly Coverage
- Course weeks **1–13** must be fully covered
- Weekly topics may be **logically merged**
- No topic may be skipped

---

## 8. Content Rules for Chapters

Each chapter must:

- Start with **learning objectives**
- Use clear headings and subheadings
- Explain concepts step-by-step
- Include examples where appropriate
- Avoid filler or unrelated content
- End with a **summary or key takeaways**

---

## 9. Writing Style Guidelines

- Simple, precise English
- Academic but approachable tone
- Explanations preferred over memorization
- Minimal jargon
- No marketing language
- Text-based descriptions for diagrams

---

## 10. Technology Constraints (Strict)

Only the following technologies are allowed:

### Allowed
- **TypeScript**
  - Docusaurus configuration
  - Frontend customization
- **Python 3**
  - Code examples
  - Educational demonstrations

### Not Allowed
- Plain JavaScript (non-TypeScript)
- Any other programming language
- Backend frameworks or services

All code examples in the book must respect these rules.

---

## 11. Docusaurus Structure Rules

The book must be structured as:

### Front Matter
- Introduction
- Preface

### Main Content
- Module 1 → 3 chapters
- Module 2 → 3 chapters
- Module 3 → 3 chapters
- Module 4 → 3 chapters

### Back Matter
- **Index**
- **References** (final page)

Each chapter must be a separate Markdown file.
Sidebar navigation must clearly reflect this structure.

---

## 12. UI / UX Principles (Reading-Focused)

The UI/UX must support **long-form textbook reading**:

- Clean academic design
- High readability
- Comfortable line width
- Clear typography
- Logical navigation
- Minimal visual noise

The design must feel like a **university textbook**, not a marketing website.

---

## 13. References (Mandatory Final Section)

The book must include a **References section as the last page**, placed **after the Index**.

References must:
- Clearly list sources used for theory and concepts
- Include official documentation and academic resources
- Cover ROS 2, Gazebo, Unity, NVIDIA Isaac, Physical AI, and VLA topics

Each reference should include:
- Title
- Author or organization
- Year (if available)
- Source description

The book must not claim original research.

---

## 14. Deployment Intent

The textbook must be compatible with:
- **GitHub Pages**
- **Vercel**

The site must work as a **static Docusaurus site**.

---

## 15. Authority of This Constitution

This constitution is the **single source of truth**.

All specifications, plans, tasks, and implementations must:
- Follow this constitution
- Not contradict it
- Not expand beyond its scope

If any conflict arises, this constitution overrides all other instructions.

---

## End of Constitution
```

## Response snapshot

The Physical AI & Humanoid Robotics Textbook constitution has been successfully created with version 1.0.0. The constitution establishes the project as a book-first initiative focused on creating a complete, structured, and deployable digital textbook for the "Physical AI & Humanoid Robotics" course. Key principles include strict adherence to the four-module structure (ROS 2, Digital Twin, AI-Robot Brain, and VLA), technology stack constraints (TypeScript and Python 3 only), and content requirements that align with the course curriculum. The constitution clearly defines scope (in and out of scope), target audience, writing standards, and deployment requirements. All placeholder tokens from the template have been replaced with specific content relevant to the textbook project. The constitution serves as the single source of truth for all future development activities.

## Outcome

- ✅ Impact: New constitution created for Physical AI textbook project
- 🧪 Tests: No tests applicable for constitution creation
- 📁 Files: Updated .specify/memory/constitution.md with new content
- 🔁 Next prompts: Ready to create feature specifications based on this constitution
- 🧠 Reflection: Constitution successfully establishes clear boundaries and requirements for the textbook project

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): PASS - Constitution properly formatted and comprehensive
- Prompt variant (if applicable): Initial constitution creation
- Next experiment (smallest change to try): Begin creating feature specifications aligned with constitution