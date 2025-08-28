# Sancta Terra Society Website

> "Because he was blinded by dust, he is healed by dust."

A modern, responsive website for the Sancta Terra Society - a Catholic lay organization dedicated to sanctifying the temporal order through building public shrines to Christ, Mary His mother, and the angels and saints.

## 🌟 Features

- **Modern Design**: Clean, responsive design built with Next.js 15 and Tailwind CSS
- **Catholic Aesthetic**: Color scheme and visual elements inspired by Catholic tradition
- **Accessibility**: Enhanced focus states and semantic HTML for better accessibility
- **Performance**: Optimized with Next.js App Router and server components
- **SEO Optimized**: Proper metadata and semantic structure

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Geist Sans and Geist Mono
- **Runtime**: React 19

## 🏗️ Project Structure

```
Sancta-Terra-Society/
├── app/
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Homepage with all sections
│   ├── globals.css       # Global styles and Catholic-themed CSS variables
│   └── favicon.ico       # Site favicon
├── public/               # Static assets
├── package.json          # Dependencies and scripts
├── next.config.ts        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
└── postcss.config.mjs    # PostCSS configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   # Copy and configure your environment variables
   cp .env.example .env.local
   
   # Add your Sanity project details:
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_WEBHOOK_SECRET=your_webhook_secret_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 📱 Website Sections

### 1. Hero Section
- Organization name and tagline
- Mission statement in an elegant card design
- Gradient background with Catholic-inspired colors

### 2. Guiding Vision
- Full text of the organization's guiding vision
- Highlighted in a special background

### 3. Four Pillars (Main Activities)
1. **Building New Shrines** - Creating new public shrines
2. **Maintaining Shrines** - Preserving existing shrines
3. **Providing Resources** - Equipping lay Catholics with resources
4. **Organizing Pilgrimages** - Coordinating pilgrimages and events

### 4. Call to Action
- Encourages visitors to get involved
- Contact information and next steps

### 5. Footer
- Quick navigation links
- Contact information
- Copyright notice

## 🎨 Design System

### Colors
- **Primary Blue**: `#1e3a8a` (Catholic Blue)
- **Gold Accent**: `#d97706` (Catholic Gold)
- **Sacred Purple**: `#7c3aed`
- **Neutral Grays**: Various shades for text and backgrounds

### Typography
- **Primary Font**: Geist Sans (modern, clean)
- **Monospace**: Geist Mono (for code elements)
- **Responsive**: Scales from mobile to desktop

### Components
- Cards with hover effects
- Gradient backgrounds
- Custom scrollbar styling
- Enhanced focus states for accessibility

## 🔄 Instant Content Updates (Webhooks)

This site supports instant content updates from Sanity CMS using webhooks. When you publish content in Sanity Studio, the site automatically revalidates and shows your changes immediately.

### Setting Up Webhooks

1. **Generate a webhook secret**:
   ```bash
   # Generate a secure random string
   openssl rand -hex 32
   ```

2. **Add the secret to your environment variables**:
   ```bash
   # In your .env.local file
   SANITY_WEBHOOK_SECRET=your_generated_secret_here
   ```

3. **Configure the webhook in Sanity Studio**:
   - Go to your Sanity project dashboard: `https://sanity.io/manage`
   - Navigate to your project → API → Webhooks
   - Click "Create webhook"
   - Set the URL to: `https://your-domain.com/api/revalidate`
   - Set the dataset to: `production` (or your dataset name)
   - Add the secret you generated above
   - Enable triggers for all document types you want to auto-update

4. **Deploy your changes** with the webhook secret environment variable

### How It Works

- When you publish/update content in Sanity Studio
- Sanity sends a webhook to your `/api/revalidate` endpoint
- The endpoint verifies the webhook signature for security
- It triggers Next.js revalidation for the appropriate pages
- Your site instantly shows the updated content

### Supported Document Types

The webhook automatically revalidates the correct pages based on document type:
- `homePage` → Homepage (`/`)
- `aboutPage` → About page (`/about`)
- `leadership` → Leadership page (`/leadership`)
- `project` → Projects pages (`/projects`)
- `footer` → All pages (footer appears everywhere)
- `siteSettings` → All pages

## 🔧 Customization

### Adding New Sections
To add new sections to the homepage, edit `app/page.tsx` and add your section between existing ones.

### Styling Changes
- Global styles: Edit `app/globals.css`
- Component styles: Use Tailwind classes in JSX
- Color scheme: Update CSS variables in `globals.css`

### Content Updates
All content is currently in `app/page.tsx`. For a larger site, consider:
- Creating separate component files
- Using a CMS for content management
- Adding internationalization

## 📞 Contact Information

For questions about the website or to get involved with the Sancta Terra Society:

- **Email**: info@sanctaterrasociety.org
- **Website**: [Your domain here]

## 📄 License

This project is private and proprietary to the Sancta Terra Society.

---

*Built with ❤️ for the greater glory of God*
