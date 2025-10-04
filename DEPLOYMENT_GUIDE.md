# 🚀 IMMEDIATE DEPLOYMENT GUIDE

## Step 1: Deploy to Railway.app (5 minutes)

1. **Create GitHub Repository**
   ```bash
   # If you haven't already, push to GitHub:
   cd /Users/1arijits/PROFESSIONAL/deepl_mcp
   # Create a new repository on GitHub named 'deepl-mcp-professional'
   git remote add origin https://github.com/YOUR_USERNAME/deepl-mcp-professional.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy on Railway**
   - Go to https://railway.app
   - Sign up/Login with GitHub
   - Click "Deploy from GitHub repo"
   - Select your `deepl-mcp-professional` repository
   - Click "Deploy Now"

3. **Configure Environment Variables**
   - In Railway dashboard, go to your project
   - Click "Variables" tab
   - Add this variable:
     ```
     DEEPL_API_KEY = 09d1702b-d2e4-47d6-b74d-1fded50b0463:fx
     ```
   - Railway automatically sets the PORT variable

4. **Get Your Deployment URL**
   - Railway will provide a URL like: `https://deepl-mcp-professional-production.up.railway.app`

## Step 2: Configure Airia (2 minutes)

Once deployed, use these **EXACT** details in Airia:

### 📋 Airia Connection Details:

- **URL**: `https://YOUR-RAILWAY-URL.up.railway.app/sse`
- **Authentication Type**: Select "MCP Access Token" 
- **Token**: `mcp_token_professional_airia_deepl_2024`

### 🎯 Step-by-Step Airia Setup:

1. In Airia interface, click "Add MCP Server" or the "+" button
2. Select "Connect to Custom MCP Server" 
3. Fill in the form:
   - **URL**: `https://YOUR-RAILWAY-URL.up.railway.app/sse`
   - **Credential Type**: Change from "Custom Headers" to "MCP Access Token"
   - **Token**: `mcp_token_professional_airia_deepl_2024`
4. Leave other fields as default
5. Click "Connect MCP Server"

## ✅ Verification

Your server should now:
- ✅ Be running 24/7 on Railway
- ✅ Accept connections from Airia  
- ✅ Provide translation tools
- ✅ Auto-restart if it crashes
- ✅ Have health monitoring

## 🛠️ Available Tools in Airia

Once connected, you'll have access to:
1. **translate-text** - Translate between languages
2. **rephrase-text** - Rephrase in same language
3. **get-source-languages** - List source languages
4. **get-target-languages** - List target languages
5. **get-writing-styles-and-tones** - Writing styles/tones

## 🔧 Troubleshooting

**If Airia connection fails:**
1. Verify the Railway URL is correct (ends with `/sse`)
2. Make sure you selected "MCP Access Token" not "Custom Headers"
3. Double-check the token: `mcp_token_professional_airia_deepl_2024`
4. Wait 2-3 minutes after Railway deployment for server to fully start

**Check Railway logs:**
- Go to Railway dashboard → Your project → Logs
- Look for "Professional DeepL MCP Server" startup message

## 📞 Support

- Railway logs: Check your Railway project dashboard
- Server health: Visit `https://YOUR-RAILWAY-URL.up.railway.app/health`
- GitHub repo: Your source code at the GitHub repository you created

---

**Total setup time: ~7 minutes**
**Cost: FREE** (Railway free tier)