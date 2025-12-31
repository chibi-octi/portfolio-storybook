# Storybook Implementation Plan

## Current State
- ✅ Storybook dependencies are installed (`@storybook/react`, `@storybook/react-vite`, `@storybook/addon-essentials`, etc.)
- ❌ Storybook configuration directory (`.storybook/`) does not exist
- ❌ No Storybook configuration files
- ❌ No story files created yet
- ❌ No npm scripts for running Storybook
- ❌ Missing build tool configurations (Vite, Tailwind, PostCSS)

## Implementation Steps

### Phase 1: Core Configuration Setup

#### 1.1 Create Storybook Configuration Directory
- Create `.storybook/` directory in project root
- This will contain all Storybook configuration files

#### 1.2 Create Main Configuration File
- **File**: `.storybook/main.js` (or `.storybook/main.ts`)
- Configure:
  - Framework: React with Vite (`@storybook/react-vite`)
  - Stories location: `../stories/**/*.stories.@(js|jsx|ts|tsx)`
  - Addons: `@storybook/addon-essentials`, `@storybook/addon-a11y`, `@storybook/addon-designs`
  - Vite configuration integration

#### 1.3 Create Preview Configuration File
- **File**: `.storybook/preview.js` (or `.storybook/preview.ts`)
- Configure:
  - Global decorators
  - Global parameters
  - Tailwind CSS imports
  - Theme configuration
  - Viewport settings
  - Background colors

### Phase 2: Build Tool Configuration

#### 2.1 Create Vite Configuration
- **File**: `vite.config.js` (or `vite.config.ts`)
- Configure:
  - React plugin
  - Path aliases (if needed)
  - Build settings

#### 2.2 Create Tailwind CSS Configuration
- **File**: `tailwind.config.js` (or `tailwind.config.ts`)
- Configure:
  - Content paths (src, stories)
  - Theme customization
  - Plugins (typography)

#### 2.3 Create PostCSS Configuration
- **File**: `postcss.config.js`
- Configure:
  - Tailwind CSS plugin
  - Autoprefixer plugin

### Phase 3: Package.json Scripts

#### 3.1 Add Storybook Scripts
- `storybook`: Start Storybook dev server
- `build-storybook`: Build static Storybook site
- Update existing scripts as needed

### Phase 4: Story Files Structure

#### 4.1 Create Story File Template
- Set up example story files following atomic design pattern:
  - `stories/atoms/` - Basic components
  - `stories/molecules/` - Component combinations
  - `stories/organisms/` - Complex components
  - `stories/templates/` - Page layouts
  - `stories/tokens/` - Design tokens

#### 4.2 Story File Format
- Use CSF (Component Story Format) 3.0
- Include:
  - Default export with component metadata
  - Named exports for each story variant
  - Args and argTypes for controls
  - Documentation

### Phase 5: Styling Integration

#### 5.1 CSS/Tailwind Setup
- Ensure Tailwind CSS is properly imported in preview configuration
- Set up global styles if needed
- Configure CSS imports in Storybook

### Phase 6: Addons Configuration

#### 6.1 Configure Addons
- **Essentials**: Controls, Actions, Docs, Viewport, Backgrounds
- **A11y**: Accessibility testing
- **Designs**: Figma/Design tool integration (if needed)

### Phase 7: Documentation & Testing

#### 7.1 Create Example Stories
- Create at least one example story to verify setup
- Test all addons are working
- Verify Tailwind CSS is applied correctly

#### 7.2 Documentation
- Update README with Storybook usage instructions
- Document story file conventions

## File Structure After Implementation

```
portfolio-storybook/
├── .storybook/
│   ├── main.js          # Main Storybook configuration
│   └── preview.js       # Preview configuration (decorators, parameters)
├── stories/
│   ├── atoms/
│   │   └── *.stories.js
│   ├── molecules/
│   │   └── *.stories.js
│   ├── organisms/
│   │   └── *.stories.js
│   ├── templates/
│   │   └── *.stories.js
│   └── tokens/
│       └── *.stories.js
├── src/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   ├── templates/
│   ├── tokens/
│   └── styles/
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Dependencies Status

### Already Installed ✅
- `@storybook/react` (^10.1.11)
- `@storybook/react-vite` (^10.1.11)
- `@storybook/addon-essentials` (^8.6.14)
- `@storybook/addon-a11y` (^10.1.11)
- `@storybook/addon-designs` (^11.1.1)
- `storybook` (^10.1.11)
- `@vitejs/plugin-react` (^5.1.2)
- `tailwindcss` (^4.1.18)
- `autoprefixer` (^10.4.23)
- `postcss` (^8.5.6)

### May Need to Install
- `react` and `react-dom` (currently peer dependencies - need to be installed)
- Additional Storybook addons (optional)

## Next Steps

1. **Immediate**: Create `.storybook/` configuration files
2. **Immediate**: Create build tool configs (Vite, Tailwind, PostCSS)
3. **Immediate**: Add npm scripts to package.json
4. **After setup**: Create first example story to test
5. **Ongoing**: Create stories for each component as they're built

## Notes

- Version mismatch detected: `@storybook/addon-essentials` is v8.6.14 while other Storybook packages are v10.1.11. Consider updating to match versions.
- The project follows atomic design principles, which aligns well with Storybook's component organization
- Using Vite as the build tool, which is faster than Webpack for Storybook
