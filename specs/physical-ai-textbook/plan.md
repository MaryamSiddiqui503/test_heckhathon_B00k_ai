# Physical AI & Humanoid Robotics Textbook Implementation Plan

---

## 1. Goal of This Plan

This plan defines **how the textbook will be created step by step** using:

- Claude Code
- Spec-Kit Plus
- Docusaurus (TypeScript)

The goal is to produce a **complete, structured academic textbook**
that strictly follows `/sp.constitution` and `/sp.specify`.

---

## 2. High-Level Phases

The project will be executed in **four clear phases**:

1. Project & Docusaurus Setup
2. Book Content Writing
3. UI / UX Customization
4. Review & Deployment Preparation

No extra features are allowed in any phase.

---

## 3. Phase 1 – Project & Docusaurus Setup

### 3.1 Repository Setup
- Initialize Git repository
- Prepare project for GitHub Pages and Vercel

### 3.2 Docusaurus Initialization
- Create Docusaurus project using **TypeScript**
- Enable docs-only usage (textbook style)
- Configure:
  - Book title
  - Author name: Maryam Siddiqui

### 3.3 Documentation Structure
Prepare folders for:
- Front matter
- Modules and chapters
- Back matter

No content writing happens in this step.

---

## 4. Phase 2 – Book Content Writing (Core Phase)

This is the **main and most important phase**.

### 4.1 Writing Order (Strict)

Content must be written in this exact order:

1. Introduction
2. Preface
3. Module 1 (3 chapters)
4. Module 2 (3 chapters)
5. Module 3 (3 chapters)
6. Module 4 (3 chapters)
7. Index
8. References (last page)

---

### 4.2 Module & Chapter Rules

- Total modules: **4**
- Chapters per module: **exactly 3**
- Total chapters: **12**

Each module's chapters must:
- Cover the assigned weekly topics
- Follow the same chapter template
- Use simple, academic English

---

### 4.3 Chapter Writing Standard

Each chapter must include:

1. Learning Objectives
2. Introduction
3. Core Concepts
4. Practical Context (Physical AI / Robotics)
5. Examples (Python 3 only, if needed)
6. Summary

No chapter may skip this structure.

---

## 5. Phase 3 – UI / UX Customization (Reading Focused)

### 5.1 Design Goal
The UI must feel like a **university textbook**, not a website.

### 5.2 Customization Rules
- Use **TypeScript only**
- Improve:
  - Readability
  - Typography
  - Spacing
  - Navigation clarity
- No animations
- No marketing visuals

UI work must support **long-form reading**.

---

## 6. Phase 4 – Review & Quality Control

### 6.1 Structural Review
Verify:
- All 12 chapters exist
- Each module has exactly 3 chapters
- Introduction and Preface included
- Index and References included
- References page is last

### 6.2 Content Review
Ensure:
- All weeks (1–13) are covered
- No topic is missing
- Language is consistent and simple
- Author name appears correctly

---

## 7. Deployment Readiness (Preparation Only)

This phase prepares the project for deployment but does NOT add features.

- Verify static build works
- Ensure compatibility with:
  - GitHub Pages
  - Vercel

Actual deployment commands are handled outside this plan.

---

## 8. Explicit Exclusions (Reminder)

This plan does NOT include:
- RAG chatbot
- Authentication
- Personalization
- Translation
- APIs or databases
- Claude subagents

These are future phases only.

---

## 9. Authority

This plan:
- Must follow `/sp.constitution`
- Must align with `/sp.specify`
- Guides `/sp.tasks` and `/sp.implement`

No step outside this plan is allowed.

---

## 10. Architecture Decision Record (ADR) Considerations

The following significant decisions have been made and should be documented in ADRs if not already:

- Technology stack: TypeScript + Docusaurus + Python 3
- Textbook structure: 4 modules x 3 chapters each
- Excluded features: No backend services, authentication, or AI agents
- Deployment target: Static site for GitHub Pages/Vercel

---

## End of Implementation Plan