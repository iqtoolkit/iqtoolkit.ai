#!/usr/bin/env node

// Test EmailOctopus API credentials
// Run with: node scripts/test-emailoctopus.js

// Load environment variables from .env.local
// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require("fs");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require("path");

const envPath = path.join(__dirname, "..", ".env.local");
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf8");
  envContent.split("\n").forEach((line) => {
    const match = line.match(/^([^=:#]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      const value = match[2].trim();
      process.env[key] = value;
    }
  });
}

const apiKey = process.env.EMAILOCTOPUS_API_KEY;
const listId = process.env.EMAILOCTOPUS_LIST_ID;

console.log("🔍 Testing EmailOctopus API credentials...\n");

// Check if credentials exist
if (!apiKey) {
  console.error("❌ EMAILOCTOPUS_API_KEY is not set in .env.local");
  process.exit(1);
}

if (!listId) {
  console.error("❌ EMAILOCTOPUS_LIST_ID is not set in .env.local");
  process.exit(1);
}

console.log("✅ Credentials found in .env.local");
console.log(`   API Key: ${apiKey.substring(0, 8)}...${apiKey.substring(apiKey.length - 4)}`);
console.log(`   List ID: ${listId}\n`);

// Test 1: Verify API key by fetching lists
console.log("📋 Test 1: Fetching your lists...");
fetch(`https://emailoctopus.com/api/1.6/lists?api_key=${apiKey}`)
  .then((res) => res.json())
  .then((data) => {
    if (data.error) {
      console.error("❌ API Key test failed:", data.error.message);
      console.error("   Error code:", data.error.code);
      process.exit(1);
    }

    console.log("✅ API Key is valid!");
    console.log(`   Found ${data.data.length} list(s):\n`);

    data.data.forEach((list) => {
      console.log(`   • ${list.name}`);
      console.log(`     ID: ${list.id}`);
      console.log(`     Contacts: ${list.counts.subscribed} subscribed\n`);
    });

    // Test 2: Verify specific list ID
    console.log("📋 Test 2: Verifying your list ID...");
    const listExists = data.data.find((list) => list.id === listId);

    if (!listExists) {
      console.error(`❌ List ID "${listId}" not found in your account`);
      console.error("\n💡 Available List IDs:");
      data.data.forEach((list) => {
        console.error(`   ${list.id} - ${list.name}`);
      });
      process.exit(1);
    }

    console.log(`✅ List ID is valid: "${listExists.name}"`);
    console.log("\n✨ All tests passed! Your credentials are correct.\n");
  })
  .catch((error) => {
    console.error("❌ Network error:", error.message);
    process.exit(1);
  });
