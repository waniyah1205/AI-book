// @ts-nocheck

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    // Introduction
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction to Physical AI Robotics',
    },

    // Assessments
    {
      type: 'doc',
      id: 'assesments',
      label: 'Assessments',
    },

    // Chapters
    {
      type: 'category',
      label: 'Chapters',
      collapsed: false,
      items: [
        'hardware',    // Chapter 3: Robot Hardware Systems
        'labs',        // Chapter 5: Hands-On Lab Manual
      ],
    },

    // Modules
    {
      type: 'category',
      label: 'Modules',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Module 1: ROS2',
          items: [
            'module-1-ros2/overview',
            'module-1-ros2/node-topics',
            'module-1-ros2/nodes-services',
            'module-1-ros2/urdf',
          ],
        },
        {
          type: 'category',
          label: 'Module 2: Gazebo',
          items: [
            'module-2-gazebo/sensors',
          ],
        },
        {
          type: 'category',
          label: 'Module 3: Issac',
          items: [
            'module-3-issac/overview',
          ],
        },
        {
          type: 'category',
          label: 'Module 4: VLA',
          items: [
            'module-4-vla/overview',
          ],
        },
      ],
    },

    // Final Capstone
    {
      type: 'doc',
      id: 'final-capstone',
      label: 'Final Capstone Project',
    },
  ],
};

module.exports = sidebars;
