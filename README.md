# Pankaj Katkar - Professional QA Engineer Website

A modern, responsive portfolio website showcasing 13+ years of QA automation and testing expertise.

## Features

- **Home Page**: Professional introduction with core expertise highlights
- **About Page**: Detailed career journey, experience, and certifications
- **Services Page**: Comprehensive QA services and technical skills
- **Contact Page**: Contact information and message form

## Tech Stack

- **Framework**: Next.js 14 (TypeScript)
- **Styling**: Tailwind CSS
- **Hosting**: Vercel (Free)
- **Deployment**: Automated via GitHub

## Installation & Local Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

1. Clone the repository:
\\\ash
git clone https://github.com/yourusername/company-website.git
cd company-website
\\\

2. Install dependencies:
\\\ash
npm install
\\\

3. Run development server:
\\\ash
npm run dev
\\\

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment to Vercel (Free Hosting)

### Step 1: Push to GitHub
\\\ash
git add .
git commit -m "Initial commit: Professional QA portfolio"
git push origin main
\\\

### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Click "Deploy" (no configuration needed)

Your site will be live in seconds! Vercel automatically:
- Builds your Next.js app
- Optimizes performance
- Provides free SSL certificate
- Handles automatic deployments on git push

### Custom Domain (Optional)
1. In Vercel dashboard, go to Settings  Domains
2. Add your custom domain
3. Update DNS records (instructions provided)

## Project Structure

\\\
src/
 app/
    page.tsx           # Home page
    about/
       page.tsx       # About page
    services/
       page.tsx       # Services page
    contact/
       page.tsx       # Contact page
    layout.tsx         # Global layout
    globals.css        # Global styles
 ...
\\\

## Customization

### Update Contact Information
Edit \src/app/contact/page.tsx\ to update:
- Email address
- Phone number
- Location
- LinkedIn profile

### Modify Services
Edit \src/app/services/page.tsx\ to update:
- Service offerings
- Technical skills
- Expertise areas

### Change Colors
Edit Tailwind classes in any page file. Current color scheme:
- Primary: Blue-600 (\g-blue-600\)
- Accent: Purple-600 (\	o-purple-600\)
- Background: Slate-900 (\rom-slate-900\)

## Scripts

\\\ash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
\\\

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (responsive design)

## Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Cumulative Layout Shift: < 0.1

## License

Created for professional portfolio purposes.

## Support

For questions or issues, contact:
- Email: reachpankajkatkar@gmail.com
- LinkedIn: [linkedin.com/in/katkarpankaj](https://www.linkedin.com/in/katkarpankaj/)
