/**
 * FIGMA INTEGRATION EXAMPLE
 * 
 * This file shows how to connect your Storybook components with Figma designs.
 * Copy this pattern to your actual story files.
 */

import { Button } from '../../src/atoms/Button';

export default {
  title: 'Examples/Figma Integration',
  component: Button,
  parameters: {
    layout: 'centered',
    // Add Figma design link here - this will appear in the "Design" tab
    design: {
      type: 'figma',
      // Replace with your actual Figma URL
      // To get the URL:
      // 1. Open your Figma file
      // 2. Select the frame/component you want to link
      // 3. Click "Share" → "Copy link to selection"
      url: 'https://www.figma.com/file/YOUR_FILE_ID/Your-Design-File?node-id=YOUR_NODE_ID',
    },
  },
  tags: ['autodocs'],
};

// Example 1: Story with Figma link at the story level
export const WithFigmaLink = {
  args: {
    primary: true,
    label: 'Button from Figma',
  },
  // You can also add Figma links to individual stories
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/YOUR_FILE_ID/Button-Primary?node-id=YOUR_NODE_ID',
    },
  },
};

// Example 2: Multiple variants with different Figma links
export const PrimaryVariant = {
  args: {
    primary: true,
    label: 'Primary Button',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/YOUR_FILE_ID/Button-Primary?node-id=PRIMARY_NODE_ID',
    },
  },
};

export const SecondaryVariant = {
  args: {
    primary: false,
    label: 'Secondary Button',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/YOUR_FILE_ID/Button-Secondary?node-id=SECONDARY_NODE_ID',
    },
  },
};

/**
 * HOW TO USE:
 * 
 * 1. Get your Figma URL:
 *    - Open Figma file
 *    - Select the component/frame
 *    - Share → Copy link to selection
 * 
 * 2. Add to story parameters:
 *    - Add `design` object to `parameters`
 *    - Use `type: 'figma'`
 *    - Paste your URL
 * 
 * 3. View in Storybook:
 *    - Open your story
 *    - Look for "Design" tab in the addon panel
 *    - Click to see your Figma design embedded
 * 
 * 4. Benefits:
 *    - Compare design vs implementation side-by-side
 *    - Designers can see how code matches designs
 *    - Developers can reference exact design specs
 */
