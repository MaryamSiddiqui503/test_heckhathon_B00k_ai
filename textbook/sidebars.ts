import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Create a custom sidebar for the textbook
  textbookSidebar: [
    {
      type: 'category',
      label: 'Front Matter',
      collapsible: true,
      collapsed: false,
      items: [
        'intro',
        'preface',
      ],
    },
    {
      type: 'category',
      label: 'Module 1: The Robotic Nervous System (ROS 2)',
      collapsible: true,
      collapsed: false,
      items: [
        'module1/1.1',
        'module1/1.2',
        'module1/1.3',
      ],
    },
    {
      type: 'category',
      label: 'Module 2: The Digital Twin (Gazebo & Unity)',
      collapsible: true,
      collapsed: false,
      items: [
        'module2/2.1',
        'module2/2.2',
        'module2/2.3',
      ],
    },
    {
      type: 'category',
      label: 'Module 3: The AI-Robot Brain (NVIDIA Isaac)',
      collapsible: true,
      collapsed: false,
      items: [
        'module3/3.1',
        'module3/3.2',
        'module3/3.3',
      ],
    },
    {
      type: 'category',
      label: 'Module 4: Vision-Language-Action (VLA)',
      collapsible: true,
      collapsed: false,
      items: [
        'module4/4.1',
        'module4/4.2',
        'module4/4.3',
      ],
    },
    {
      type: 'category',
      label: 'Back Matter',
      collapsible: true,
      collapsed: false,
      items: [
        'index',
        'references',
      ],
    },
  ],
};

export default sidebars;
