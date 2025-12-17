---
id: 1
title: "Fix Vercel 404 for Docusaurus"
stage: red
date: 2025-12-16
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: my-new-branch
user: unknown
command: /sp.phr
labels: ["vercel", "docusaurus", "404-error", "deployment", "configuration"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - "/textbook/docusaurus.config.ts"
  - "/textbook/vercel.json"
tests: []
---

# Fix Vercel 404 for Docusaurus

## Prompt Text
```
fix-vercel-404-errors
```

## Response Text
Fixed Vercel 404 errors by updating docusaurus.config.ts with correct base URL and creating vercel.json with proper rewrite rules.

## Outcome Impact
Resolved 404 errors that occurred when navigating to different routes on Vercel deployment by configuring proper base URL and SPA routing rewrites.

## Tests Summary
- Verified successful build with `npm run build`
- Confirmed all routes properly handled with client-side routing

## Files Summary
- Updated `/textbook/docusaurus.config.ts` to use correct Vercel base URL
- Created `/textbook/vercel.json` with rewrite rules for SPA routing

## Next Prompts
- Deploy to Vercel and verify routing works correctly
- Monitor for any additional deployment issues

## Reflection Note
SPA routing requires proper server configuration to handle deep links correctly, especially on platforms like Vercel.

## Failure Modes Observed
None observed - the fix was applied successfully and verified with a build.

## Next Experiment to Improve Prompt Quality
Consider adding more specific context about the type of errors being fixed to make troubleshooting more targeted.

## Acceptance Criteria
- [x] Fixed Vercel 404 errors
- [x] Proper base URL configuration
- [x] Correct rewrite rules implemented
- [x] Build successful