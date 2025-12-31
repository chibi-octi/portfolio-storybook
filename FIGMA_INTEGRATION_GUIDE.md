# Figma Integration Guide

This guide shows you how to connect your Storybook frontend with Figma designs.

## Method 1: Embed Figma Designs in Storybook (Recommended)

### Setup

The `@storybook/addon-designs` addon is already installed and configured. This allows you to embed Figma designs directly in your Storybook stories.

### How to Use

#### Step 1: Get Your Figma URL

1. Open your Figma file
2. Select the frame or component you want to link
3. Click "Share" → "Copy link to selection"
4. Or use the URL format: `https://www.figma.com/file/FILE_ID/File-Name?node-id=NODE_ID`

#### Step 2: Add to Your Story

Add the `design` parameter to your story's `parameters`:

```jsx
export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/abc123/My-Design?node-id=123%3A456',
    },
  },
};
```

#### Step 3: Add to Individual Stories

You can also add Figma links to specific story variants:

```jsx
export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/abc123/My-Design?node-id=123%3A456',
    },
  },
};
```

### Example: Button Component with Figma

```jsx
import { Button } from '../../src/atoms/Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/YOUR_FILE_ID/Button-Design?node-id=YOUR_NODE_ID',
    },
  },
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    primary: true,
    label: 'Button',
    size: 'medium',
  },
};
```

### Viewing in Storybook

1. Open your story in Storybook
2. Look for the "Design" tab in the addon panel (bottom of the screen)
3. Click it to see your Figma design embedded alongside your component
4. You can compare the design with your implementation side-by-side

## Method 2: Embed Storybook in Figma (Reverse Integration)

### Using Storybook Connect Plugin

This allows designers to see live Storybook components directly in Figma.

#### Setup Steps:

1. **Install the Plugin in Figma:**
   - Open Figma
   - Go to Plugins → Browse plugins
   - Search for "Storybook Connect" (by Chromatic)
   - Install it

2. **Get Your Storybook URL:**
   - Run `npm run storybook`
   - Copy the URL of the component you want to embed (e.g., `http://localhost:6006/?path=/story/atoms-button--primary`)

3. **Use in Figma:**
   - In Figma, go to Plugins → Storybook Connect
   - Paste your Storybook URL
   - The component will be embedded as a frame in Figma

### Benefits:
- Designers can see live, interactive components
- No need to export images or screenshots
- Always shows the latest code version

## Method 3: Design Tokens Sync

### Using Figma Tokens Plugin

For syncing design tokens (colors, spacing, typography) between Figma and your code:

1. **Install Figma Tokens Plugin:**
   - In Figma: Plugins → Browse plugins → "Figma Tokens"

2. **Export Tokens:**
   - Define your tokens in Figma
   - Export as JSON
   - Use tools like `style-dictionary` or `theo` to convert to CSS/Tailwind config

3. **Sync to Tailwind:**
   - Update your `tailwind.config.js` with the exported tokens
   - Or use a tool like `figma-to-tailwind` for automatic sync

## Method 4: Automated Sync Tools

### Option A: Anima
- Automatically syncs code updates to Figma
- Converts code props to Figma variants
- Website: https://www.animaapp.com

### Option B: Fusion (by Builder.io)
- Generates Storybook stories from Figma
- Syncs design tokens automatically
- Website: https://www.builder.io/workflows/figma-to-storybook

### Option C: story.to.design
- Generates Figma components from Storybook
- Keeps Figma in sync with code
- Website: https://story.to.design

## Best Practices

### 1. Link Every Component
- Add Figma links to all your component stories
- Makes it easy for developers to reference designs

### 2. Use Specific Node IDs
- Link to specific frames/components, not entire files
- Makes it easier to find the exact design

### 3. Keep URLs Updated
- If you move designs in Figma, update the URLs
- Consider using environment variables for shared URLs

### 4. Document Design Decisions
- Use Storybook's Docs to explain design choices
- Reference Figma for visual specifications

### 5. Version Control
- Include Figma file versions in your documentation
- Track which version of designs you're implementing

## Troubleshooting

### Figma Design Not Showing

1. **Check URL Format:**
   - Ensure the URL includes `node-id` parameter
   - Make sure the file is publicly accessible or you're logged in

2. **File Permissions:**
   - The Figma file must be accessible
   - For private files, ensure you're logged into Figma in the same browser

3. **Addon Not Visible:**
   - Check that `@storybook/addon-designs` is in `.storybook/main.js`
   - Restart Storybook after adding the addon

### URL Format Examples

```
✅ Good:
https://www.figma.com/file/abc123/Design-System?node-id=123%3A456

❌ Bad (missing node-id):
https://www.figma.com/file/abc123/Design-System
```

## Quick Reference

### Adding Figma Link to Story

```jsx
parameters: {
  design: {
    type: 'figma',
    url: 'YOUR_FIGMA_URL',
  },
}
```

### Getting Figma URL
1. Select frame/component in Figma
2. Share → Copy link to selection
3. Paste into story parameters

### Viewing in Storybook
- Look for "Design" tab in addon panel
- Click to see embedded Figma design

## Next Steps

1. **Add Figma links to your existing stories:**
   - Start with your Button component
   - Add links to all atoms, molecules, and organisms

2. **Set up design tokens sync:**
   - Export tokens from Figma
   - Update Tailwind config
   - Keep them in sync

3. **Install Figma plugins:**
   - Storybook Connect for embedding components
   - Figma Tokens for token management

4. **Document your workflow:**
   - Create a process for designers and developers
   - Set up regular sync schedules

## Resources

- [Storybook Addon Designs Docs](https://github.com/storybookjs/addon-designs)
- [Figma Developer Mode](https://www.figma.com/developers)
- [Storybook Connect Plugin](https://www.chromatic.com/features/figma-plugin)
- [Design Tokens Community Group](https://www.designtokens.org/)
