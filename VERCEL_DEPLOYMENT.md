# Vercel Deployment Guide

## Configuration

This project is configured to deploy Storybook on Vercel using `vercel.json`.

### Important Settings

If Vercel is still trying to use `vite build` instead of building Storybook, you may need to configure the project settings in Vercel's dashboard:

1. Go to your project settings on Vercel
2. Navigate to **Settings → General**
3. Under **Build & Development Settings**:
   - **Framework Preset**: Set to `Other` or leave blank
   - **Build Command**: Should be `npm run build` (or leave blank to use vercel.json)
   - **Output Directory**: Should be `storybook-static` (or leave blank to use vercel.json)
   - **Install Command**: `npm install --legacy-peer-deps`

### Current Configuration (vercel.json)

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "storybook-static",
  "framework": null,
  "installCommand": "npm install --legacy-peer-deps"
}
```

## Troubleshooting

### Issue: "Could not resolve entry module 'index.html'"

**Cause**: Vercel is trying to run `vite build` instead of `storybook build`

**Solution**: 
1. Ensure `vercel.json` is in the root directory
2. Check that `package.json` has a `build` script: `"build": "storybook build"`
3. In Vercel dashboard, override Framework Preset to `Other`

### Issue: Build fails with dependency errors

**Solution**: The `installCommand` in `vercel.json` uses `--legacy-peer-deps` flag to handle peer dependency conflicts.

### Issue: Storybook static files not found

**Solution**: Ensure `outputDirectory` in `vercel.json` is set to `storybook-static` (the default Storybook output directory).

## Manual Vercel Configuration

If `vercel.json` isn't being respected, manually configure in Vercel dashboard:

1. **Framework Preset**: `Other`
2. **Build Command**: `npm run build`
3. **Output Directory**: `storybook-static`
4. **Install Command**: `npm install --legacy-peer-deps`
5. **Node.js Version**: `18.x` or `20.x` (recommended)

## Testing Locally

To test the build locally before deploying:

```bash
npm install --legacy-peer-deps
npm run build
```

This will create the `storybook-static` directory that Vercel will serve.
