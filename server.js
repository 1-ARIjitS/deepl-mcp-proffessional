#!/usr/bin/env node

const { spawn } = require('child_process');
const crypto = require('crypto');

// Generate a secure MCP access token - fixed token for consistency
const MCP_ACCESS_TOKEN = process.env.MCP_ACCESS_TOKEN || 'mcp_token_' + crypto.randomBytes(24).toString('hex');

const PORT = process.env.PORT || 3001;

console.log('=== Professional DeepL MCP Server ===');
console.log(`🚀 Starting on port: ${PORT}`);
console.log(`🔑 MCP Access Token: ${MCP_ACCESS_TOKEN}`);
console.log(`🌐 DeepL API Key: ${process.env.DEEPL_API_KEY ? '✅ Configured' : '❌ Missing'}`);
console.log(`📅 Started at: ${new Date().toISOString()}`);
console.log('=====================================');

// Validate DeepL API Key
if (!process.env.DEEPL_API_KEY) {
  console.error('❌ ERROR: DEEPL_API_KEY environment variable is required');
  process.exit(1);
}

// Start supergateway with the DeepL MCP server
const gatewayArgs = [
  'supergateway',
  '--stdio', 'npx deepl-mcp-server',
  '--port', PORT.toString(),
  '--cors',
  '--healthEndpoint', '/health',
  '--healthEndpoint', '/status',
  '--oauth2Bearer', MCP_ACCESS_TOKEN,
  '--logLevel', 'info'
];

console.log('🔧 Starting gateway with args:', gatewayArgs.join(' '));

const gateway = spawn('npx', gatewayArgs, {
  env: {
    ...process.env,
    DEEPL_API_KEY: process.env.DEEPL_API_KEY,
    MCP_ACCESS_TOKEN: MCP_ACCESS_TOKEN
  },
  stdio: 'inherit'
});

gateway.on('error', (error) => {
  console.error('❌ Failed to start gateway:', error);
  process.exit(1);
});

gateway.on('exit', (code) => {
  console.log(`🔄 Gateway exited with code ${code}`);
  if (code !== 0) {
    console.log('🔄 Attempting to restart...');
    setTimeout(() => {
      process.exit(code);
    }, 5000);
  } else {
    process.exit(code);
  }
});

// Health check logging
setInterval(() => {
  console.log(`💓 Health check at ${new Date().toISOString()} - Server running on port ${PORT}`);
}, 300000); // Every 5 minutes

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('🛑 Received SIGTERM, shutting down gracefully');
  gateway.kill('SIGTERM');
});

process.on('SIGINT', () => {
  console.log('🛑 Received SIGINT, shutting down gracefully');
  gateway.kill('SIGINT');
});

// Export token for external reference
console.log('\n🎯 IMPORTANT: Use this token in Airia:');
console.log('Token:', MCP_ACCESS_TOKEN);
console.log('URL will be: https://your-deployment-url.com/sse');
console.log('=====================================\n');