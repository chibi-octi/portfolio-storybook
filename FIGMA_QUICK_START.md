# Figma Integration - Quick Start

## ✅ Setup Complete!

Your Storybook is now connected to Figma. The `@storybook/addon-designs` addon is installed and configured.

## 🚀 How to Add Figma Links to Your Stories

### Step 1: Get Your Figma URL

1. Open your Figma file
2. Select the frame/component you want to link
3. Click **"Share"** → **"Copy link to selection"**
4. You'll get a URL like: `https://www.figma.com/file/abc123/Design-System?node-id=123%3A456`

### Step 2: Add to Your Story

Add this to your story's `parameters`:

```jsx
export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/YOUR_FILE_ID/Your-Design?node-id=YOUR_NODE_ID',
    },
  },
};
```

### Step 3: View in Storybook

1. Run `npm run storybook`
2. Open your story
3. Look for the **"Design"** tab in the addon panel (bottom of screen)
4. Click it to see your Figma design embedded!

## 📝 Example

See `stories/.figma-example.stories.jsx` for a complete working example.

## 🔗 Other Integration Methods

See `FIGMA_INTEGRATION_GUIDE.md` for:
- Embedding Storybook in Figma (reverse integration)
- Design tokens sync
- Automated sync tools
- Best practices

## 🎯 Next Steps

1. **Add Figma links to your existing stories:**
   - Button component
   - Card component
   - All other components

2. **Test it:**
   - Add a Figma URL to one story
   - Restart Storybook
   - Check the "Design" tab

3. **Share with your team:**
   - Designers can see how code matches designs
   - Developers can reference exact design specs

## 💡 Tips

- Link to specific frames/components, not entire files
- Use the "Copy link to selection" feature for accurate node IDs
- Keep URLs updated when designs change
- Document which Figma file version you're implementing
