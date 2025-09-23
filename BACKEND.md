# Backend Setup

This project includes a Go backend with a contact form API that can be deployed to Vercel.

## Features

- **Contact Form API**: Handles form submissions with validation
- **Email Integration**: Sends emails via SMTP (Gmail supported)
- **CORS Support**: Works with your React frontend
- **Vercel Ready**: Deploys as serverless functions

## Local Development

1. **Install Go** (if not already installed):
   ```bash
   go version  # Should be 1.21+
   ```

2. **Test the API locally** (optional):
   ```bash
   go run api/contact.go
   ```

3. **Run frontend with backend**:
   ```bash
   npm run dev  # Frontend on localhost:5173
   # API will be available at /api/contact when deployed
   ```

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
cp .env.example .env.local
```

**For email functionality, you need:**
- `SMTP_HOST`: SMTP server (smtp.gmail.com for Gmail)
- `SMTP_PORT`: SMTP port (587 for Gmail)
- `SMTP_USER`: Your email address
- `SMTP_PASS`: Your email password or app password
- `TO_EMAIL`: Where contact form emails should be sent

**Gmail Setup:**
1. Enable 2-factor authentication
2. Generate an "App Password": Google Account → Security → 2-Step Verification → App passwords
3. Use the app password for `SMTP_PASS`

## Deployment to Vercel

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Set environment variables** in Vercel dashboard:
   - Go to your project → Settings → Environment Variables
   - Add all the email configuration variables

4. **Test the API**:
   ```bash
   curl -X POST https://your-domain.vercel.app/api/contact \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@example.com","message":"Hello!"}'
   ```

## API Endpoints

### POST /api/contact

Handles contact form submissions.

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Hello",
  "message": "Your message here"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Message sent successfully! I'll get back to you soon."
}
```

**Response (Error):**
```json
{
  "success": false,
  "message": "Error description"
}
```

## File Structure

```
/
├── api/
│   └── contact.go       # Contact form API endpoint
├── src/
│   └── components/
│       └── ContactForm.tsx  # React contact form
├── vercel.json          # Vercel configuration
├── go.mod              # Go module definition
└── .env.example        # Environment variables template
```

## Security Features

- **Input validation**: Email format, required fields, length limits
- **CORS protection**: Only allows specific origins
- **Rate limiting**: Built into Vercel serverless functions
- **No data storage**: Messages are only sent via email

## Troubleshooting

**Contact form not working?**
1. Check browser console for errors
2. Verify environment variables are set
3. Test email credentials separately
4. Check Vercel function logs

**Email not sending?**
1. Verify SMTP credentials
2. Check Gmail app password setup
3. Ensure 2FA is enabled for Gmail
4. Check spam/junk folders