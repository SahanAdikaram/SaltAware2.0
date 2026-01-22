# Environment Variables Setup Guide

## Where to Update the Backend URL

### For Local Development

Create a `.env` file in the `client` folder:

**File location:** `client/.env`

**Content:**
```
REACT_APP_API_URL=http://localhost:5000/api
```

This file is automatically ignored by Git (it's in `.gitignore`), so it won't be committed.

### For Vercel Production Deployment

**You do NOT use a `.env` file for Vercel!** Instead, you set environment variables in the Vercel Dashboard.

#### Steps to Set Environment Variable in Vercel:

1. **Deploy your backend first** and note the URL (e.g., `https://your-backend.vercel.app`)

2. **Go to Vercel Dashboard:**
   - Visit https://vercel.com/dashboard
   - Click on your **frontend project**

3. **Navigate to Settings:**
   - Click **Settings** in the top menu
   - Click **Environment Variables** in the left sidebar

4. **Add the Environment Variable:**
   - Click **Add New**
   - **Key:** `REACT_APP_API_URL`
   - **Value:** `https://salt-aware2-0-g95e.vercel.app/api` (your actual backend URL)
   - **Environment:** Select all three:
     - ✅ Production
     - ✅ Preview  
     - ✅ Development
   - Click **Save**

5. **Redeploy:**
   - Go to **Deployments** tab
   - Click the **⋯** (three dots) on the latest deployment
   - Click **Redeploy**
   - Or push a new commit to trigger a redeploy

### Quick Reference

| Environment | Where to Set | Value Format |
|------------|--------------|--------------|
| **Local Dev** | `client/.env` file | `http://localhost:5000/api` |
| **Vercel Production** | Vercel Dashboard → Settings → Environment Variables | `https://salt-aware2-0-g95e.vercel.app/api` |

### Important Notes

- ✅ `.env` files are for **local development only**
- ✅ For Vercel, **always use the Dashboard** to set environment variables
- ✅ React requires environment variables to start with `REACT_APP_` prefix
- ✅ After setting in Vercel, you **must redeploy** for changes to take effect
- ✅ The `.env` file is in `.gitignore` and won't be committed to Git (this is correct!)

### Example Backend URLs

Your backend is deployed at:
- `https://salt-aware2-0-g95e.vercel.app`
- Your API endpoints are:
  - `https://salt-aware2-0-g95e.vercel.app/api/recommend`
  - `https://salt-aware2-0-g95e.vercel.app/api/recipes`
- Set `REACT_APP_API_URL` to: `https://salt-aware2-0-g95e.vercel.app/api`
