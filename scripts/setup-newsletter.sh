#!/bin/bash

# EmailOctopus Setup Helper Script

echo "📧 EmailOctopus Newsletter Setup"
echo "================================="
echo ""

# Check if .env.local exists
if [ -f .env.local ]; then
    echo "⚠️  .env.local already exists!"
    read -p "Do you want to overwrite it? (y/n): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ Setup cancelled"
        exit 1
    fi
fi

# Create .env.local from template
cp .env.example .env.local

echo "✅ Created .env.local file"
echo ""
echo "📝 Next steps:"
echo ""
echo "1. Go to https://emailoctopus.com and sign up (free)"
echo "2. Create a new List"
echo "3. Get your API key from: https://emailoctopus.com/api-documentation"
echo "4. Get your List ID from: Lists → Your List → Settings → API"
echo ""
echo "5. Edit .env.local and add your credentials:"
echo "   - EMAILOCTOPUS_API_KEY=your_api_key"
echo "   - EMAILOCTOPUS_LIST_ID=your_list_id"
echo ""
echo "6. For Netlify deployment, add these as environment variables in:"
echo "   Netlify Dashboard → Site settings → Environment variables"
echo ""
echo "📖 Full documentation: docs/EMAILOCTOPUS_SETUP.md"
echo ""
echo "🚀 Run 'npm run dev' to start development server"
