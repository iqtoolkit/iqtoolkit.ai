# Netlify Forms Setup

This project uses Netlify Forms for the newsletter signup on the homepage.

## How It Works

1. **Form Configuration**: The newsletter form in `app/page.tsx` includes:
   - `data-netlify="true"` - Enables Netlify form handling
   - `name="newsletter"` - Form identifier
   - `method="POST"` - Submission method
   - `action="/thank-you"` - Redirect after successful submission

2. **Static Form Detection**: A static HTML form exists in `public/forms/newsletter.html` to ensure Netlify detects the form during build time.

3. **Success Page**: After submission, users are redirected to `/thank-you` with a confirmation message.

## Accessing Form Submissions

After deploying to Netlify:

1. Go to your Netlify dashboard
2. Navigate to **Site settings** → **Forms**
3. Click on the "newsletter" form to view submissions
4. Export submissions as CSV or set up email notifications

## Email Notifications

To receive email notifications when someone subscribes:

1. In Netlify dashboard: **Site settings** → **Forms** → **Form notifications**
2. Click **Add notification** → **Email notification**
3. Enter your email address
4. Save settings

## Integration Options

You can integrate form submissions with:

- **Zapier** - Automate workflows (add to Mailchimp, Google Sheets, etc.)
- **Slack** - Get notifications in Slack
- **Webhook** - Send submissions to your own API

## Limits

Netlify free tier includes:

- 100 form submissions per month
- Upgrade to Pro for unlimited submissions

## Testing Locally

Forms won't work on `localhost`. To test:

1. Deploy to Netlify
2. Or use `netlify dev` (requires Netlify CLI)

## Spam Protection

The form includes a hidden honeypot field to prevent spam. This is automatically added by Netlify.

## Files

- `app/page.tsx` - Main form component
- `app/thank-you/page.tsx` - Success page
- `public/forms/newsletter.html` - Static form for build detection
