# Fix: DEPLOYMENT_NOT_FOUND Error

## The Problem

The error "DEPLOYMENT_NOT_FOUND" means Vercel can't find your deployment. This usually happens when:

1. **Root Directory is wrong** - Vercel is looking in the wrong folder
2. **Deployment was from wrong directory** - You deployed from root instead of `server` folder
3. **Project settings mismatch** - Settings don't match your project structure

## Solution: Fix Root Directory in Vercel

### Step 1: Check Your Vercel Project Settings

1. Go to **Vercel Dashboard**: https://vercel.com/dashboard
2. Click on your project: **salt-aware2-0** (or whatever it's named)
3. Go to **Settings** → **General**
4. Scroll down to **Root Directory**
5. **It should be set to:** `server`

### Step 2: If Root Directory is Wrong

1. In **Settings** → **General**, find **Root Directory**
2. Click **Edit**
3. Set it to: `server`
4. Click **Save**
5. **Redeploy** your project:
   - Go to **Deployments** tab
   - Click **⋯** (three dots) on latest deployment
   - Click **Redeploy**

### Step 3: Verify Project Structure

Your project should have this structure when deployed:
```
server/
├── api/
│   ├── recommend.js
│   └── recipes.js
├── controllers/
│   └── recipeController.js
├── vercel.json
└── package.json
```

## Alternative: Redeploy from Correct Directory

If the Root Directory setting doesn't work, redeploy from the `server` folder:

### Using Vercel CLI:

```bash
# Navigate to server directory
cd server

# Deploy (this will create/update the project)
vercel

# If asked about root directory, make sure it's set to current directory (.)
# Or explicitly set it:
vercel --prod
```

### Using Vercel Dashboard:

1. Go to https://vercel.com/new
2. **Import your Git repository** again
3. **IMPORTANT**: When configuring:
   - **Root Directory**: Set to `server` (not empty!)
   - **Framework Preset**: Other
   - **Build Command**: `npm run build` (or leave empty)
   - **Output Directory**: (leave empty)
4. Click **Deploy**

## Verify Your Deployment URL

After fixing, your deployment should be accessible at:
- `https://salt-aware2-0.vercel.app/api/recipes?q=chicken`

## Quick Checklist

- [ ] Root Directory in Vercel Settings = `server`
- [ ] `vercel.json` exists in `server/` folder
- [ ] `api/` folder exists in `server/` folder
- [ ] `api/recommend.js` and `api/recipes.js` exist
- [ ] Redeployed after changing Root Directory

## Still Not Working?

1. **Check Build Logs**:
   - Go to Deployments → Click on a deployment → View Build Logs
   - Look for errors about missing files

2. **Delete and Recreate Project**:
   - Sometimes it's easier to delete the project in Vercel
   - Create a new one with correct Root Directory from the start

3. **Verify Git Repository**:
   - Make sure your `server/` folder is committed to Git
   - Check that `server/vercel.json` is in the repository
