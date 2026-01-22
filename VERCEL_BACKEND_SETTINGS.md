# Vercel Backend Project Settings

## Backend (Server) Project Settings

### Root Directory
```
server
```

### Framework Preset
```
Other
```
(Or leave as "Other" - Vercel will auto-detect)

### Build Command
```
npm run build
```
**OR leave it EMPTY** - Both work fine since serverless functions don't need a traditional build

### Output Directory
```
(leave EMPTY)
```
**IMPORTANT:** Must be empty! Serverless functions don't have an output directory.

### Install Command
```
npm install
```
(Or leave as default: `yarn install`, `pnpm install`, `npm install`, or `bun install`)

---

## Summary: Frontend vs Backend Settings

| Setting | Frontend (Client) | Backend (Server) |
|---------|------------------|------------------|
| **Root Directory** | `client` | `server` |
| **Framework** | Create React App | Other |
| **Build Command** | `react-scripts build` | `npm run build` (or empty) |
| **Output Directory** | `build` | **(EMPTY)** |
| **Install Command** | `npm install` | `npm install` |

---

## Key Differences

### Frontend:
- ✅ Has a **build output** (`build` folder)
- ✅ Needs **build command** to compile React
- ✅ Framework preset helps Vercel optimize

### Backend:
- ✅ **No output directory** (serverless functions)
- ✅ Build command is optional (just installs dependencies)
- ✅ Vercel auto-detects `api/` folder for serverless functions

---

## Environment Variables

### Backend Project:
- `FDC_API_KEY` - Your FoodData Central API key

### Frontend Project:
- `REACT_APP_API_URL` - Your backend URL (e.g., `https://your-backend.vercel.app/api`)

---

## Quick Checklist for Backend

- [ ] Root Directory: `server`
- [ ] Framework: `Other`
- [ ] Build Command: `npm run build` (or empty)
- [ ] **Output Directory: EMPTY** ⚠️
- [ ] Install Command: `npm install` (default)
- [ ] Environment Variable: `FDC_API_KEY` added
