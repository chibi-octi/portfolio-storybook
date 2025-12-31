# Fix Vercel Deployment Issue

## The Problem

Vercel is deploying commit `026a50b` (old) instead of the latest commit `2f7a9be` (which includes vercel.json). Also, Vercel is auto-detecting Vite and trying to run `vite build` instead of `storybook build`.

## Solution: Configure Vercel Dashboard

You **MUST** configure these settings in the Vercel dashboard to fix this:

### Step 1: Go to Vercel Dashboard
1. Visit https://vercel.com/dashboard
2. Open your `portfolio-storybook` project
3. Go to **Settings** → **General**

### Step 2: Configure Build Settings
Scroll to **Build & Development Settings** and set:

- **Framework Preset**: Select `Other` (or leave blank)
  - ⚠️ **CRITICAL**: This prevents Vercel from auto-detecting Vite
  
- **Build Command**: `npm run build`
  - This runs `storybook build` (defined in package.json)
  
- **Output Directory**: `storybook-static`
  - This is where Storybook outputs the static files
  
- **Install Command**: `npm install --legacy-peer-deps`
  - This handles peer dependency conflicts

### Step 3: Trigger New Deployment
1. Go to **Deployments** tab
2. Click the **"..."** menu on the latest deployment
3. Select **"Redeploy"**
4. OR click **"Redeploy"** button and select the latest commit (`2f7a9be`)

### Step 4: Verify
After redeploying, check that:
- The deployment uses commit `2f7a9be` (or newer)
- The build command shows `npm run build`
- The output is from `storybook-static`

## Alternative: Disconnect and Reconnect

If the above doesn't work:

1. Go to **Settings** → **Git**
2. Disconnect the repository
3. Reconnect it
4. Make sure it's connected to `main` branch
5. Deploy again

## Why This Happens

Vercel auto-detects frameworks by looking for config files:
- `vite.config.js` → Detects as Vite project
- `next.config.js` → Detects as Next.js
- etc.

Even with `vercel.json`, if Framework Preset is set to "Vite" or auto-detected, it will override your config.

Setting Framework Preset to `Other` forces Vercel to use your `vercel.json` configuration.

## Current vercel.json

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "storybook-static",
  "installCommand": "npm install --legacy-peer-deps",
  "framework": null
}
```

This is correct, but Vercel dashboard settings can override it if Framework Preset is set incorrectly.
