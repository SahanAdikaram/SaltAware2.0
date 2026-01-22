# Vercel Deployment: One Project vs Two Projects

## Option 1: Two Separate Projects (RECOMMENDED) ✅

### Why Two Projects?
- ✅ **Easier to manage** - Separate settings, domains, and deployments
- ✅ **Independent scaling** - Frontend and backend can scale separately
- ✅ **Clear separation** - Different root directories, build commands, and env vars
- ✅ **Better for teams** - Different people can manage frontend vs backend
- ✅ **Easier debugging** - Clear separation of logs and issues

### Setup:

**Backend Project:**
- Root Directory: `server`
- Framework: Other
- Build Command: `npm run build` (or empty)
- Output Directory: (empty)
- Environment Variables: `FDC_API_KEY`

**Frontend Project:**
- Root Directory: `client`
- Framework: Create React App
- Build Command: `npm run build`
- Output Directory: `build`
- Environment Variables: `REACT_APP_API_URL=https://your-backend.vercel.app/api`

### URLs:
- Backend: `https://salt-aware-backend.vercel.app`
- Frontend: `https://salt-aware-frontend.vercel.app`

---

## Option 2: One Project (Monorepo Setup) ⚠️

### When to Use One Project:
- You want everything in one place
- Simpler domain management
- Both deploy together automatically

### Setup:

You'll need to configure Vercel to handle both:

**Option 2A: Using vercel.json at root**

Create `vercel.json` at the **root** of your repository:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "client/package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "build"
      }
    },
    {
      "src": "server/api/**/*.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/server/api/$1.js"
    },
    {
      "src": "/(.*)",
      "dest": "/client/$1"
    }
  ]
}
```

**Option 2B: Using rewrites (Simpler)**

```json
{
  "version": 2,
  "builds": [
    {
      "src": "client/package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "build"
      }
    },
    {
      "src": "server/api/**/*.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/server/api/$1.js"
    },
    {
      "src": "/(.*)",
      "dest": "/client/$1"
    }
  ]
}
```

**Root Directory:** Leave empty (root of repo)

**Build Settings:**
- Build Command: `cd client && npm run build`
- Output Directory: `client/build`
- Install Command: `npm install && cd client && npm install && cd ../server && npm install`

**Environment Variables:**
- `FDC_API_KEY` (for backend)
- `REACT_APP_API_URL=/api` (relative path, or full backend URL)

### Challenges with One Project:
- ⚠️ More complex configuration
- ⚠️ Both deploy together (can't deploy one without the other)
- ⚠️ Harder to debug which part failed
- ⚠️ Need to manage build order
- ⚠️ Environment variables apply to both (need careful naming)

---

## My Recommendation: **Use Two Separate Projects** ✅

### Why?
1. **Your current setup is already configured for two projects**
2. **Simpler to manage** - Each has its own settings
3. **Better separation of concerns**
4. **Easier to troubleshoot**
5. **More flexible** - Can deploy frontend/backend independently

### Quick Setup Guide for Two Projects:

#### Backend Project:
1. Go to https://vercel.com/new
2. Import your Git repo
3. Settings:
   - Root Directory: `server`
   - Framework: Other
   - Build Command: (empty or `npm run build`)
   - Output Directory: (empty)
4. Add Environment Variable: `FDC_API_KEY`
5. Deploy → Note the URL (e.g., `https://salt-aware-backend.vercel.app`)

#### Frontend Project:
1. Go to https://vercel.com/new
2. Import the **same** Git repo
3. Settings:
   - Root Directory: `client`
   - Framework: Create React App
   - Build Command: `npm run build`
   - Output Directory: `build`
4. Add Environment Variable: `REACT_APP_API_URL=https://salt-aware-backend.vercel.app/api`
5. Deploy

---

## Summary

| Aspect | Two Projects | One Project |
|--------|--------------|-------------|
| **Complexity** | ✅ Simple | ⚠️ More complex |
| **Flexibility** | ✅ High | ⚠️ Lower |
| **Debugging** | ✅ Easy | ⚠️ Harder |
| **Deployment** | ✅ Independent | ⚠️ Together |
| **Setup Time** | ✅ Fast | ⚠️ Slower |
| **Recommended** | ✅ **YES** | ❌ Only if needed |

**For your project, I strongly recommend TWO SEPARATE PROJECTS!** 🎯
