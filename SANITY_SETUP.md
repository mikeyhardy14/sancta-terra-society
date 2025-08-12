# Sanity CMS Setup Guide

## What's Been Added

I've successfully integrated Sanity CMS into your Sancta Terra Society website. Here's what was added:

### 1. Dependencies Installed
- `@sanity/client` - Client for fetching data
- `@sanity/image-url` - Image handling
- `next-sanity` - Next.js integration
- `sanity` - Studio and core functionality
- `@sanity/vision` - Query testing tool

### 2. Configuration Files
- `sanity.config.ts` - Main Sanity configuration
- `sanity/client.ts` - Client setup for data fetching
- `sanity/schemas/` - Content schemas for your data

### 3. Content Schemas Created
- **Home Page** (`homePage`) - All the content from your main page
- **Leadership** (`leadership`) - Team member profiles
- **Projects** (`project`) - Project information with status tracking
- **Site Settings** (`siteSettings`) - Global site configuration

### 4. Updated Pages
- **Homepage** - Now fetches content from Sanity CMS
- **Leadership page** - Displays dynamic leadership members
- **Projects page** - Shows projects with status tracking

## Next Steps to Complete Setup

### 1. Create a Sanity Account & Project
1. Go to [sanity.io](https://sanity.io) and create an account
2. Create a new project
3. Copy your Project ID

### 2. Configure Environment Variables
Update the `.env.local` file (create it if it doesn't exist):
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_actual_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token_here
```

### 3. Initialize Sanity in Your Project
Run this command to connect your local setup to your Sanity project:
```bash
npx sanity init --reconfigure
```

### 4. Start the Sanity Studio
Once configured, you can run the Sanity Studio locally:
```bash
npm run studio
```
This will open Sanity Studio at `http://localhost:3000/studio`

### 5. Add Initial Content
1. Open the Studio and create your first "Home Page" document
2. Add leadership members
3. Create project entries
4. Configure site settings

## Features Available

### Content Management
- **Rich Text Editor** for project descriptions
- **Image Upload** for project photos and leadership portraits
- **Status Tracking** for projects (Planning, In Progress, Completed, On Hold)
- **Order Management** for leadership display
- **Featured Project** toggles

### Studio Access
- Visit `/studio` on your website to access the content management interface
- Create, edit, and delete content easily
- Live preview capabilities
- Media library for images

### Fallback Content
The site includes fallback content, so it will continue to work even if Sanity isn't configured yet. Once you add content in Sanity, it will automatically replace the fallback content.

## Content Structure

### Home Page Content
- Main title and tagline
- Left and right column content
- Four main activities (Prima, Secunda, Tertia, Quarta Opera)
- Vocation section with Bible quote
- Join section with call-to-action buttons

### Leadership Members
- Name and title
- Biography
- Optional photo
- Display order

### Projects
- Title and description
- Location and dates
- Status tracking
- Featured project flag
- Rich content with images

## Deployment Notes

When deploying to production:
1. Set your environment variables in your hosting platform
2. Your Sanity content will be available globally
3. Consider setting up webhooks for content updates if needed

## Support

- Sanity Documentation: [sanity.io/docs](https://sanity.io/docs)
- Next.js Integration: [sanity.io/plugins/next-sanity](https://sanity.io/plugins/next-sanity)

Your website now has a professional content management system that will make updating content much easier!
