# ADR-0003: Deployment Strategy: Static Site for GitHub Pages and Vercel

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2025-12-15
- **Feature:** Physical AI & Humanoid Robotics Textbook
- **Context:** Need to select a deployment strategy that provides reliable, fast, and cost-effective hosting for an academic textbook website while ensuring accessibility and long-term maintainability.

<!-- Significance checklist (ALL must be true to justify this ADR)
     1) Impact: Long-term consequence for architecture/platform/security?
     2) Alternatives: Multiple viable options considered with tradeoffs?
     3) Scope: Cross-cutting concern (not an isolated detail)?
     If any are false, prefer capturing as a PHR note instead of an ADR. -->

## Decision

- Deployment Model: Static Site Generation (SSG)
- Hosting Platforms: GitHub Pages and Vercel (dual compatibility)
- Infrastructure: Serverless, CDN-based delivery
- Build Process: Static asset generation during build time
- Content Delivery: Global CDN for fast loading worldwide

## Consequences

### Positive

- Excellent performance with fast loading times due to static assets and CDN
- High reliability and uptime with distributed content delivery
- Cost-effective hosting with free tiers available for both platforms
- Built-in security through static content (no server-side vulnerabilities)
- Easy deployment and maintenance with automated build pipelines
- Good SEO performance due to static HTML generation
- Offline accessibility for downloaded content
- No server management or scaling concerns

### Negative

- Limited dynamic functionality (no real-time updates, user interactions)
- Content updates require full rebuild and redeployment
- Dependency on hosting platforms and their policies
- May require additional infrastructure for future interactive features
- Limited personalization capabilities
- Build times may increase with content growth

## Alternatives Considered

Alternative Strategy A: Dynamic Server-Side Rendering (SSR)
- Pros: More interactive features, real-time updates, user personalization
- Cons: Higher complexity, more infrastructure, security concerns, higher costs
- Rejected: Would be over-engineering for static textbook content

Alternative Strategy B: Hybrid Static/Dynamic Approach
- Pros: Balance of performance and functionality, selective dynamic features
- Cons: Increased complexity, more maintenance, potential security surface
- Rejected: Not needed for current static content requirements

Alternative Strategy C: Traditional Web Hosting (Apache/Nginx)
- Pros: Full control, familiar technology, simple deployment
- Cons: More maintenance, no automatic CDN, less scalability
- Rejected: Would miss benefits of modern static site hosting platforms

## References

- Feature Spec: specs/physical-ai-textbook/spec.md
- Implementation Plan: specs/physical-ai-textbook/plan.md
- Related ADRs:
- Evaluator Evidence: history/prompts/physical-ai-textbook/4-verify-textbook-completion.explainer.prompt.md
