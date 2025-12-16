# ADR-0004: Excluded Features: No Backend Services, Authentication, or AI Agents

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2025-12-15
- **Feature:** Physical AI & Humanoid Robotics Textbook
- **Context:** Need to define clear boundaries for the initial textbook implementation to maintain focus, reduce complexity, and ensure timely delivery while preserving the core educational value of static content.

<!-- Significance checklist (ALL must be true to justify this ADR)
     1) Impact: Long-term consequence for architecture/platform/security?
     2) Alternatives: Multiple viable options considered with tradeoffs?
     3) Scope: Cross-cutting concern (not an isolated detail)?
     If any are false, prefer capturing as a PHR note instead of an ADR. -->

## Decision

- Excluded Features: No backend services, authentication, personalization, translation, Claude subagents, databases, or APIs
- Focus: Pure static educational content delivery
- Scope: Academic textbook with code examples only
- Future Consideration: Advanced features deferred to later phases

## Consequences

### Positive

- Significantly reduced development complexity and time to market
- Lower security surface and attack vectors
- Reduced infrastructure and operational costs
- Simplified maintenance and deployment processes
- Clear focus on core educational content
- Faster development and iteration cycles
- Easier testing and quality assurance
- Reduced dependencies and third-party integrations

### Negative

- Limited interactivity and user engagement features
- No personalized learning paths or user accounts
- No real-time collaboration or feedback mechanisms
- May require future re-architecture for advanced features
- Less adaptive content delivery
- No user progress tracking or analytics
- Reduced potential for community features

## Alternatives Considered

Alternative Approach A: Include Basic Backend Services
- Pros: User accounts, progress tracking, interactive features
- Cons: Significantly increased complexity, security concerns, development time
- Rejected: Would delay core textbook delivery and increase risk

Alternative Approach B: Hybrid Feature Set (Selected Interactive Features)
- Pros: Some user engagement while maintaining simplicity
- Cons: Inconsistent experience, partial feature implementation
- Rejected: Would create incomplete user experience

Alternative Approach C: Include AI Assistant Features
- Pros: Enhanced learning through AI interactions
- Cons: Complex AI integration, potential accuracy issues, increased costs
- Rejected: Would distract from core textbook content and add significant complexity

## References

- Feature Spec: specs/physical-ai-textbook/spec.md
- Implementation Plan: specs/physical-ai-textbook/plan.md
- Related ADRs:
- Evaluator Evidence: history/prompts/physical-ai-textbook/4-verify-textbook-completion.explainer.prompt.md
