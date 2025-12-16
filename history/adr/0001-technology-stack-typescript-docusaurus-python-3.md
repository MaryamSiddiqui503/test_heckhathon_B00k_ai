# ADR-0001: Technology Stack: TypeScript + Docusaurus + Python 3

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2025-12-15
- **Feature:** Physical AI & Humanoid Robotics Textbook
- **Context:** Need to select technology stack for building a static academic textbook website that follows modern web standards, supports academic content, and allows for future extensibility while maintaining simplicity for educational purposes.

<!-- Significance checklist (ALL must be true to justify this ADR)
     1) Impact: Long-term consequence for architecture/platform/security?
     2) Alternatives: Multiple viable options considered with tradeoffs?
     3) Scope: Cross-cutting concern (not an isolated detail)?
     If any are false, prefer capturing as a PHR note instead of an ADR. -->

## Decision

- Framework: Docusaurus v3 (static site generator)
- Language: TypeScript (for configuration and customization)
- Backend: Python 3 (for code examples and demonstrations)
- Deployment: Static site (GitHub Pages/Vercel compatible)
- Content Format: Markdown with embedded code examples

## Consequences

### Positive

- Excellent documentation support with built-in search, versioning, and navigation
- Strong TypeScript integration for configuration and theming
- Built-in features for academic content (math, code blocks, diagrams)
- Large community and ecosystem for documentation sites
- SEO-friendly static output
- Easy content authoring in Markdown format
- Python examples align with robotics/AI educational needs
- Fast loading times and good performance

### Negative

- Learning curve for Docusaurus-specific features
- Potential lock-in to Docusaurus ecosystem
- Limited dynamic functionality (by design for static site)
- Additional complexity compared to simple HTML/CSS
- Dependency on Node.js ecosystem

## Alternatives Considered

Alternative Stack A: Custom React + Next.js + Tailwind
- Pros: More flexibility, modern framework, excellent performance
- Cons: More setup complexity, less documentation-specific features, more custom development needed
- Rejected: Would require significantly more development time for similar outcomes

Alternative Stack B: Jekyll + Ruby
- Pros: Proven static site generator, GitHub Pages native
- Cons: Ruby dependency, less modern tooling, limited TypeScript support
- Rejected: Would not align with modern TypeScript development practices

Alternative Stack C: Sphinx + Python
- Pros: Python-native, excellent for technical documentation
- Cons: Less modern web design, limited customization options
- Rejected: Would limit flexibility and modern web capabilities

## References

- Feature Spec: specs/physical-ai-textbook/spec.md
- Implementation Plan: specs/physical-ai-textbook/plan.md
- Related ADRs:
- Evaluator Evidence: history/prompts/physical-ai-textbook/4-verify-textbook-completion.explainer.prompt.md
