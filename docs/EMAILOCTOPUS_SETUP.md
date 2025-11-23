# Newsletter Setup with EmailOctopus

This project uses EmailOctopus API for direct newsletter subscription management.

## Setup Instructions

### 1. Create EmailOctopus Account

1. Go to [emailoctopus.com](https://emailoctopus.com) and sign up (free tier: 2,500 subscribers)
2. Create a new **List** (e.g., "iqtoolkit Newsletter")
3. Note your **List ID** from List Settings → API

### 2. Get API Credentials

1. Go to [EmailOctopus API Settings](https://emailoctopus.com/api-documentation)
2. Copy your **API Key**
3. Copy your **List ID** from your list settings

### 3. Configure Environment Variables

Create a `.env.local` file in the project root:

```bash
EMAILOCTOPUS_API_KEY=your_api_key_here
EMAILOCTOPUS_LIST_ID=your_list_id_here
```

**For Netlify deployment:**

1. Go to Netlify Dashboard → **Site settings** → **Environment variables**
2. Add both variables:
   - `EMAILOCTOPUS_API_KEY`
   - `EMAILOCTOPUS_LIST_ID`

### 4. Test Locally

```bash
npm run dev
```

Visit `http://localhost:3000` and test the newsletter signup form.

## How It Works

1. **User submits email** → Frontend form (`app/page.tsx`)
2. **API route handles submission** → `app/api/newsletter/route.ts`
3. **EmailOctopus API** → Adds subscriber to your list
4. **Success redirect** → User sees `/thank-you` page

## Features

- ✅ Real-time subscription via API
- ✅ Duplicate email handling
- ✅ Loading states and error messages
- ✅ Automatic redirect to thank you page
- ✅ No manual CSV exports needed
- ✅ Works on localhost and production

## Managing Subscribers

Access your subscribers in EmailOctopus:

1. Dashboard → **Lists** → Your list
2. View all subscribers, export, segment, etc.

## Sending Newsletters

1. EmailOctopus Dashboard → **Campaigns**
2. Click **Create Campaign**
3. Choose your list
4. Design email with drag-and-drop editor
5. Send or schedule

## Free Tier Limits

- **2,500 subscribers**
- **10,000 emails per month**
- Unlimited lists and campaigns

## Files

- `app/api/newsletter/route.ts` - API endpoint for subscriptions
- `app/page.tsx` - Newsletter form with React state management
- `app/thank-you/page.tsx` - Success confirmation page
- `.env.example` - Environment variable template
