# Vercel Deployment Guide

This guide explains how to deploy the SaltAware application to Vercel with separate deployments for frontend and backend.

## Prerequisites

1. Vercel account (sign up at https://vercel.com)
2. Vercel CLI installed: `npm i -g vercel`
3. FoodData Central API key (get it from https://fdc.nal.usda.gov/api-guide.html)

## Deployment Steps

### 1. Deploy Backend (Server)

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy the backend:
   ```bash
   vercel
   ```
   - Follow the prompts
   - When asked for project settings, accept the defaults
   - When asked to link to existing project, choose "No" for the first deployment

4. Set environment variables:
   ```bash
   vercel env add FDC_API_KEY
   ```
   - Enter your FoodData Central API key when prompted
   - Select "Production", "Preview", and "Development" environments

5. Note your backend deployment URL:
   - After deployment, Vercel will provide a URL like: `https://your-backend-name.vercel.app`
   - Your API endpoints will be:
     - `https://your-backend-name.vercel.app/api/recommend`
     - `https://your-backend-name.vercel.app/api/recipes`

### 2. Deploy Frontend (Client)

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Create a `.env.production` file (or set via Vercel dashboard):
   ```bash
   REACT_APP_API_URL=https://your-backend-name.vercel.app/api
   ```
   Replace `your-backend-name.vercel.app` with your actual backend URL from step 1.

3. Deploy the frontend:
   ```bash
   vercel
   ```
   - Follow the prompts
   - When asked for project settings, accept the defaults

4. Set environment variable in Vercel dashboard:
   - Go to your project settings in Vercel dashboard
   - Navigate to "Environment Variables"
   - Add `REACT_APP_API_URL` with value: `https://your-backend-name.vercel.app/api`
   - Select "Production", "Preview", and "Development" environments

5. Redeploy to apply the environment variable:
   ```bash
   vercel --prod
   ```

## Alternative: Using Vercel Dashboard

### Backend Deployment

1. Go to https://vercel.com/new
2. Import your Git repository (or upload the `server` folder)
3. Configure:
   - **Root Directory**: `server`
   - **Framework Preset**: Other
   - **Build Command**: `npm run build` (or leave empty)
   - **Output Directory**: (leave empty)
   - **Install Command**: `npm install`

4. Add Environment Variable:
   - Go to Project Settings → Environment Variables
   - Add `FDC_API_KEY` with your API key value
   - Apply to all environments

5. Deploy and note the deployment URL

### Frontend Deployment

1. Go to https://vercel.com/new
2. Import your Git repository (or upload the `client` folder)
3. Configure:
   - **Root Directory**: `client`
   - **Framework Preset**: Create React App
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
   - **Install Command**: `npm install`

4. Add Environment Variable:
   - Go to Project Settings → Environment Variables
   - Add `REACT_APP_API_URL` with value: `https://your-backend-name.vercel.app/api`
   - Replace with your actual backend URL
   - Apply to all environments

5. Deploy

## Where to Place Backend URL

The backend URL from Vercel should be placed in:

1. **Frontend Environment Variable**: `REACT_APP_API_URL`
   - Location: Vercel Dashboard → Frontend Project → Settings → Environment Variables
   - Or in `client/.env.production` file (if using file-based config)
   - Format: `https://your-backend.vercel.app/api`

2. **The frontend code automatically uses this** via `client/src/services/api.js`:
   ```javascript
   const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
   ```

## Testing Your Deployment

1. **Backend Test**:
   - Visit: `https://your-backend.vercel.app/api/recipes?q=chicken`
   - Should return JSON data

2. **Frontend Test**:
   - Visit your frontend URL
   - Try submitting a recipe recommendation
   - Check browser console for any CORS or API errors

## Troubleshooting

### CORS Issues
- The serverless functions include CORS headers
- If you still see CORS errors, check that the frontend URL is allowed in the backend CORS configuration

### Environment Variables Not Working
- Make sure to redeploy after adding environment variables
- For React apps, environment variables must start with `REACT_APP_`
- Check Vercel deployment logs for errors

### API Not Found (404)
- Verify the API routes in `server/vercel.json` match your function files
- Check that files are in `server/api/` directory
- Ensure function exports are correct

### Build Failures
- Check Vercel build logs
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

## Project Structure

```
SaltAware2.0/
├── client/              # Frontend React app
│   ├── src/
│   ├── public/
│   ├── vercel.json      # Frontend Vercel config
│   └── package.json
├── server/              # Backend Express API
│   ├── api/             # Vercel serverless functions
│   │   ├── recommend.js
│   │   └── recipes.js
│   ├── controllers/
│   ├── vercel.json      # Backend Vercel config
│   └── package.json
└── README.md
```

## Important Notes

- **Separate Deployments**: Frontend and backend are deployed as separate Vercel projects
- **Environment Variables**: Must be set in each project's Vercel dashboard
- **API URL**: Frontend must know the backend URL via `REACT_APP_API_URL`
- **CORS**: Backend functions handle CORS automatically
- **Serverless Functions**: Backend routes are converted to Vercel serverless functions in `server/api/`
