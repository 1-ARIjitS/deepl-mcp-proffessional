# Professional DeepL MCP Server for Airia

This is a professional deployment of the DeepL MCP (Model Context Protocol) server optimized for integration with Airia platform.

## Features

- ✅ Always-running cloud deployment
- ✅ Secure MCP access token authentication
- ✅ Health monitoring and auto-restart
- ✅ Professional logging and error handling
- ✅ Multiple deployment platform support

## Quick Deployment Guide

### Option 1: Railway.app (Recommended - Free & Easy)

1. Push this code to a GitHub repository
2. Go to [Railway.app](https://railway.app) and sign up
3. Click "Deploy from GitHub repo" and select your repository
4. In Railway dashboard, go to Variables tab and set:
   ```
   DEEPL_API_KEY=09d1702b-d2e4-47d6-b74d-1fded50b0463:fx
   ```
5. Deploy! Railway will provide a URL like: `https://your-app.up.railway.app`

### Option 2: Render.com (Free Alternative)

1. Push code to GitHub
2. Go to [Render.com](https://render.com) and connect GitHub
3. Create a new Web Service from your repository  
4. Set environment variable: `DEEPL_API_KEY=09d1702b-d2e4-47d6-b74d-1fded50b0463:fx`
5. Deploy! You'll get a URL like: `https://your-app.onrender.com`

## Airia Integration

Once deployed, use these details in Airia:

### Connection Details:
- **URL**: `https://your-deployment-url.com/sse`
- **Credential Type**: MCP Access Token
- **Token**: `mcp_token_professional_airia_deepl_2024`

### Step-by-Step Airia Setup:
1. In Airia, click "Add MCP Server"
2. Select "Connect to Custom MCP Server"
3. Fill in:
   - URL: `https://your-deployment-url.com/sse`
   - Authentication Type: MCP Access Token
   - Token: `mcp_token_professional_airia_deepl_2024`
4. Click "Connect MCP Server"

## Available Tools

Your DeepL MCP server provides these tools to Airia:

1. **translate-text** - Translate text between languages
2. **rephrase-text** - Rephrase text in the same language  
3. **get-source-languages** - List available source languages
4. **get-target-languages** - List available target languages
5. **get-writing-styles-and-tones** - List available writing styles/tones

## Local Development

```bash
# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Edit .env with your DeepL API key
nano .env

# Run locally
npm start
```

## Health Monitoring

The server includes:
- Health check endpoint at `/health` and `/status`
- Automatic restart on failures
- Detailed logging with timestamps
- 5-minute interval health reports

## Security

- Secure MCP access token authentication
- Environment variable protection for API keys
- CORS enabled for web integration
- No sensitive data in logs

## Support

The server runs 24/7 and automatically handles:
- Connection failures
- API rate limits  
- Memory management
- Health monitoring

For issues, check the deployment logs in your chosen platform's dashboard.