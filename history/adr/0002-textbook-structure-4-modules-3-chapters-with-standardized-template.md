# ADR-0002: Textbook Structure: 4 Modules × 3 Chapters with Standardized Template

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2025-12-15
- **Feature:** Physical AI & Humanoid Robotics Textbook
- **Context:** Need to organize academic content in a logical, pedagogically sound structure that covers the core topics of physical AI and humanoid robotics while maintaining consistent learning progression and content quality.

<!-- Significance checklist (ALL must be true to justify this ADR)
     1) Impact: Long-term consequence for architecture/platform/security?
     2) Alternatives: Multiple viable options considered with tradeoffs?
     3) Scope: Cross-cutting concern (not an isolated detail)?
     If any are false, prefer capturing as a PHR note instead of an ADR. -->

## Decision

- Module Structure: 4 core modules (12 total chapters)
  - Module 1: The Robotic Nervous System (ROS 2)
  - Module 2: The Digital Twin (Gazebo & Unity)
  - Module 3: The AI-Robot Brain (NVIDIA Isaac)
  - Module 4: Vision-Language-Action (VLA)
- Chapter Template: 6-part structure
  - Learning Objectives
  - Introduction
  - Core Concepts
  - Practical Context (Physical AI / Robotics)
  - Examples (Python 3)
  - Summary
- Content Progression: From foundational concepts to advanced integration

## Consequences

### Positive

- Clear pedagogical progression from basic to advanced concepts
- Consistent learning experience across all chapters
- Comprehensive coverage of physical AI and humanoid robotics
- Modular structure allows for focused learning and reference
- Standardized template ensures quality and completeness
- Logical grouping of related concepts in modules
- Facilitates course planning and curriculum development
- Enables easy content updates and maintenance

### Negative

- Rigid structure may limit flexibility for certain topics
- Fixed number of modules/chapters may not suit all learning paces
- Standardized template may feel repetitive to some readers
- Could require more content planning and coordination
- May not accommodate highly specialized or emerging topics well

## Alternatives Considered

Alternative Structure A: Topic-based organization (e.g., by robot subsystems)
- Pros: More intuitive for robotics practitioners, easier to reference specific systems
- Cons: Less pedagogically sound, harder to follow learning progression
- Rejected: Would not provide clear learning path for beginners

Alternative Structure B: Chronological/historical approach
- Pros: Shows evolution of robotics and AI, provides context
- Cons: May not be optimal for learning technical concepts
- Rejected: Would not provide comprehensive foundational knowledge

Alternative Structure C: Case study-based approach
- Pros: Practical, real-world examples, engaging
- Cons: May not cover fundamental concepts systematically
- Rejected: Would not provide systematic coverage of all required topics

## References

- Feature Spec: specs/physical-ai-textbook/spec.md
- Implementation Plan: specs/physical-ai-textbook/plan.md
- Related ADRs:
- Evaluator Evidence: history/prompts/physical-ai-textbook/4-verify-textbook-completion.explainer.prompt.md
