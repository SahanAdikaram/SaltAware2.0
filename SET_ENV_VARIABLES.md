# How to Set Environment Variables in Vercel

## ✅ Your API is Working!

The error `"FoodData Central API key is not configured on the server"` means:
- ✅ Your deployment is successful
- ✅ Your routes are working
- ✅ The serverless functions are running
- ❌ Just missing the `FDC_API_KEY` environment variable

## Step-by-Step: Add FDC_API_KEY

### Step 1: Get Your FoodData Central API Key

If you don't have one yet:
1. Go to: https://fdc.nal.usda.gov/api-guide.html
2. Click "Get an API Key"
3. Sign up/login
4. Copy your API key

### Step 2: Add to Vercel Backend Project

1. **Go to Vercel Dashboard:**
   - Visit: https://vercel.com/dashboard
   - Click on your **backend project** (salt-aware2-0 or similar)

2. **Navigate to Settings:**
   - Click **Settings** in the top menu
   - Click **Environment Variables** in the left sidebar

3. **Add the Variable:**
   - Click **Add New**
   - **Key:** `FDC_API_KEY`
   - **Value:** Paste your FoodData Central API key
   - **Environment:** Select ALL three:
     - ✅ Production
     - ✅ Preview
     - ✅ Development
   - Click **Save**

### Step 3: Redeploy

After adding the environment variable, you **MUST redeploy**:

**Option A: Via Dashboard**
1. Go to **Deployments** tab
2. Click **⋯** (three dots) on the latest deployment
3. Click **Redeploy**
4. Select **Use existing Build Cache** (optional)
5. Click **Redeploy**

**Option B: Via Git Push**
```bash
git commit --allow-empty -m "Trigger redeploy for env vars"
git push
```

### Step 4: Test Again

After redeploying, test your API:
```
https://salt-aware2-0-g95e.vercel.app/api/recipes?q=chicken&pageSize=5
```

You should now see JSON data with recipes instead of an error!

---

## Quick Checklist

- [ ] Have FoodData Central API key
- [ ] Go to Vercel Dashboard → Backend Project
- [ ] Settings → Environment Variables
- [ ] Add `FDC_API_KEY` with your key
- [ ] Select all environments (Production, Preview, Development)
- [ ] Save
- [ ] **Redeploy** (important!)
- [ ] Test the API endpoint

---

## Important Notes

⚠️ **Environment variables are NOT automatically applied to existing deployments!**

- You MUST redeploy after adding/changing environment variables
- The variable is only available to NEW deployments
- Existing deployments continue using old values (or no values)

✅ **After redeploying, your API should work!**

---

## If You Still Get Errors

1. **Double-check the variable name:**
   - Must be exactly: `FDC_API_KEY` (case-sensitive)
   - No spaces or extra characters

2. **Verify it's set for the right environment:**
   - Make sure Production is selected
   - Preview and Development are optional but recommended

3. **Check the deployment:**
   - Make sure you redeployed AFTER adding the variable
   - Check build logs to confirm the deployment completed

4. **Test the API key:**
   - You can test your API key directly:
   ```
   curl "https://api.nal.usda.gov/fdc/v1/foods/search?api_key=YOUR_KEY&query=chicken"
   ```
