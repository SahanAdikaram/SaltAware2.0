# Fixing 404 Error on Vercel

## Why You're Seeing 404

The root URL (`https://salt-aware2-0.vercel.app`) shows 404 because **there's no route defined for the root path**. This is **normal** for a backend API deployment.

## ✅ Correct URLs to Test

Your backend API endpoints are:

1. **GET Recipes:**
   ```
   https://salt-aware2-0.vercel.app/api/recipes?q=chicken
   ```

2. **POST Recommendations:**
   ```
   https://salt-aware2-0.vercel.app/api/recommend
   ```
   (This requires a POST request with JSON body)

## How to Test

### Option 1: Browser Test (GET request only)
Visit in your browser:
```
https://salt-aware2-0.vercel.app/api/recipes?q=chicken
```

You should see JSON data, not a 404.

### Option 2: Using curl (Command Line)
```bash
# Test GET endpoint
curl "https://salt-aware2-0.vercel.app/api/recipes?q=chicken"

# Test POST endpoint
curl -X POST https://salt-aware2-0.vercel.app/api/recommend \
  -H "Content-Type: application/json" \
  -d '{"ingredients":["chicken","rice"],"healthProfile":{"dailySodiumMax":1500,"hasDiabetes":false}}'
```

### Option 3: Using Postman or Browser DevTools
- Open browser DevTools → Network tab
- Or use Postman to test POST requests

## If You Still Get 404 on API Endpoints

### Check 1: Verify Deployment Structure
Make sure your `server` folder has:
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

### Check 2: Verify Root Directory in Vercel
1. Go to Vercel Dashboard → Your Project → Settings
2. Check **Root Directory** setting
3. It should be set to `server` (or leave empty if deploying from server folder)

### Check 3: Check Build Logs
1. Go to Vercel Dashboard → Your Deployment
2. Click **Build Logs**
3. Look for any errors about missing files or build failures

### Check 4: Environment Variables
Make sure `FDC_API_KEY` is set:
1. Vercel Dashboard → Settings → Environment Variables
2. Verify `FDC_API_KEY` exists and has a value
3. Redeploy if you just added it

## Expected Behavior

- ✅ `https://your-backend.vercel.app/api/recipes` → Returns JSON
- ✅ `https://your-backend.vercel.app/api/recommend` → Accepts POST requests
- ❌ `https://your-backend.vercel.app/` → 404 (this is normal!)
- ❌ `https://your-backend.vercel.app/anything-else` → 404 (this is normal!)

## Next Steps

1. **Test the API endpoints** using the URLs above
2. **If API endpoints work**, you're good! The 404 on root is expected
3. **Deploy your frontend** and point it to: `https://salt-aware2-0.vercel.app/api`
4. **Set environment variable** in frontend: `REACT_APP_API_URL=https://salt-aware2-0.vercel.app/api`

## Quick Test

Copy and paste this URL in your browser:
```
https://salt-aware2-0.vercel.app/api/recipes?q=chicken&pageSize=5
```

If you see JSON data (even if it's an error about API key), the deployment is working! If you still see 404, there's a routing issue to fix.
