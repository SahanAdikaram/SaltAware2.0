# Environment Variables Summary

## Backend (Server) Environment Variables

### Required Variables:

#### 1. `FDC_API_KEY`
- **What it is:** Your FoodData Central API key
- **Where to get it:** https://fdc.nal.usda.gov/api-guide.html
- **Used in:** `server/controllers/recipeController.js`
- **For local development:** Add to `server/.env` file
- **For Vercel:** Add in Vercel Dashboard → Settings → Environment Variables

**Example:**
```env
FDC_API_KEY=your_actual_api_key_here_12345
```

#### 2. `PORT` (Optional)
- **What it is:** Server port number
- **Default:** `5000`
- **Used in:** `server/server.js`
- **For local development:** Add to `server/.env` file (optional)
- **For Vercel:** Not needed (Vercel handles ports automatically)

**Example:**
```env
PORT=5000
```

---

## Frontend (Client) Environment Variables

### Required Variables:

#### 1. `REACT_APP_API_URL`
- **What it is:** Backend API URL
- **Used in:** `client/src/services/api.js`
- **For local development:** Add to `client/.env` file
- **For Vercel:** Add in Vercel Dashboard → Settings → Environment Variables

**For Local Development:**
```env
REACT_APP_API_URL=http://localhost:5000/api
```

**For Production (Vercel):**
```env
REACT_APP_API_URL=https://salt-aware2-0-g95e.vercel.app/api
```
(Replace with your actual backend Vercel URL)

---

## Complete .env Files

### `server/.env` (Backend - Local Development)
```env
# FoodData Central API Key
FDC_API_KEY=your_fdc_api_key_here

# Server Port (optional, defaults to 5000)
PORT=5000
```

### `client/.env` (Frontend - Local Development)
```env
# Backend API URL for local development
REACT_APP_API_URL=http://localhost:5000/api
```

---

## Vercel Environment Variables

### Backend Project Settings:
1. Go to Vercel Dashboard → Backend Project → Settings → Environment Variables
2. Add:
   - **Key:** `FDC_API_KEY`
   - **Value:** Your FoodData Central API key
   - **Environments:** Production, Preview, Development

### Frontend Project Settings:
1. Go to Vercel Dashboard → Frontend Project → Settings → Environment Variables
2. Add:
   - **Key:** `REACT_APP_API_URL`
   - **Value:** `https://your-backend-url.vercel.app/api`
   - **Environments:** Production, Preview, Development

---

## Quick Reference Table

| Variable | Location | Local Dev | Vercel | Required |
|----------|----------|-----------|--------|----------|
| `FDC_API_KEY` | Backend | `server/.env` | Backend Project | ✅ Yes |
| `PORT` | Backend | `server/.env` | Not needed | ❌ Optional |
| `REACT_APP_API_URL` | Frontend | `client/.env` | Frontend Project | ✅ Yes |

---

## Important Notes

1. **React Environment Variables:**
   - Must start with `REACT_APP_` prefix
   - Only available at build time
   - Must redeploy after changing

2. **Backend Environment Variables:**
   - No special prefix needed
   - Available at runtime
   - Must redeploy after changing

3. **.env Files:**
   - Should be in `.gitignore` (not committed to Git)
   - Only for local development
   - Vercel uses Dashboard settings, not .env files

4. **After Adding Variables:**
   - **Always redeploy** after adding/changing environment variables
   - Variables are only applied to new deployments

---

## Example Values

### Backend `.env`:
```env
FDC_API_KEY=abc123xyz789yourkeyhere
PORT=5000
```

### Frontend `.env`:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

### Vercel Backend:
```
FDC_API_KEY = abc123xyz789yourkeyhere
```

### Vercel Frontend:
```
REACT_APP_API_URL = https://salt-aware2-0-g95e.vercel.app/api
```
