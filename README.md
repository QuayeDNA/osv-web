# Osuele Ventures Website

This is the official website for Osuele Ventures, a multidisciplinary business providing telecommunications, construction, civil engineering, and sports club services in Ghana.

## Project Overview

The Osuele Ventures website is a modern, responsive web application built with React, TypeScript, and Vite. It showcases the company's services, projects, and values while providing an engaging user experience through animations and optimized performance.

### Key Features

- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Performance Optimized**: Image optimization, code splitting, and performance best practices
- **SEO Friendly**: Comprehensive SEO metadata, structured data, sitemap, and optimized content
- **Accessibility Focused**: ARIA attributes, keyboard navigation, and semantic HTML
- **Modern UI/UX**: Smooth animations, transitions, and user-friendly interface
- **Multi-page Structure**: Organized content across dedicated pages for different aspects of the business

## Technology Stack

- **Frontend Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion and AOS (Animate On Scroll)
- **Routing**: React Router
- **Icons**: Lucide React
- **Deployment**: Vercel

## Project Structure

```
src/
  ├── components/        # Reusable UI components
  │   ├── layout/        # Layout components (Header, Footer)
  │   ├── sports/        # Sports-specific components
  │   └── ui/            # Generic UI components
  ├── pages/             # Page components
  ├── utils/             # Utility functions
  └── assets/            # Static assets
public/
  ├── images/            # Image assets
  ├── robots.txt         # SEO robots file
  └── sitemap.xml        # SEO sitemap
```

## Pages

The website includes the following pages:

1. **Home**: Company overview and service highlights
2. **About**: Company history, mission, vision, and values
3. **Services**: Detailed information about offered services
4. **Projects**: Portfolio of completed projects
5. **Sports Club**: Information about the sports facilities and programs
6. **Contact**: Contact information and form

## Development

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Setup

1. Clone the repository
```bash
git clone https://github.com/your-org/osv-web.git
cd osv-web
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Build for production
```bash
npm run build
# or
yarn build
```

## SEO Optimization

The website implements several SEO optimization techniques:

- Meta tags for title, description, and keywords
- Open Graph and Twitter card metadata
- Structured data (JSON-LD) for local business
- Sitemap and robots.txt files
- Canonical URLs
- Semantic HTML structure
- Optimized image loading with appropriate alt tags

## Performance Optimization

- Lazy loading of images
- Code splitting by page
- Font optimization
- Responsive image sizing using srcset and sizes attributes
- Preloading of critical resources
- CSS and JS minification

## Completed Features

- ✅ Responsive design implementation
- ✅ Performance optimization for images and resources
- ✅ SEO meta tags and structured data
- ✅ Multi-page navigation with React Router
- ✅ Animated UI elements with Framer Motion and AOS
- ✅ Contact form implementation
- ✅ Project showcase with filtering
- ✅ Service detail accordions
- ✅ Testimonials display
- ✅ Sports club events and programs

## Planned Improvements

### Short-term

- [ ] Add blog/news section for company updates
- [ ] Implement interactive maps for project locations
- [ ] Enhance contact form with form validation and CAPTCHA
- [ ] Add project search functionality
- [ ] Implement dark mode toggle

### Medium-term

- [ ] Add multi-language support (English and local languages)
- [ ] Create a careers page with job listings
- [ ] Implement a chatbot for customer assistance
- [ ] Add a gallery section with lightbox functionality
- [ ] Create case studies for major projects
- [ ] Implement a newsletter subscription system

### Long-term

- [ ] Develop an admin dashboard for content management
- [ ] Add online booking system for sports facilities
- [ ] Implement e-commerce functionality for equipment sales
- [ ] Create a mobile app companion
- [ ] Add virtual tours of facilities
- [ ] Implement integration with CRM system

## Accessibility

The website follows WCAG 2.1 guidelines with:

- Proper heading hierarchy
- Sufficient color contrast
- Keyboard navigation support
- ARIA attributes
- Screen reader friendly content
- Focus management

## Browser Compatibility

The website is tested and compatible with:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## License

[Specify license information]

## Contact

For inquiries about this website, contact [your contact information].
