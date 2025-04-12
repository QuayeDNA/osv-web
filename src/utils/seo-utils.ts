/**
 * SEO utility functions to help with metadata management
 */

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

/**
 * Updates document metadata for SEO
 */
export const updateMetaTags = ({
  title,
  description,
  canonical,
  ogImage,
}: SEOProps): void => {
  // Set page title
  if (title) {
    document.title = `${title} | Osuele Ventures`;
  }

  // Update meta description
  if (description) {
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }
  }

  // Update canonical URL
  if (canonical) {
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', `https://osuele.com${canonical}`);
  }

  // Update Open Graph image
  if (ogImage) {
    const ogImageTag = document.querySelector('meta[property="og:image"]');
    if (ogImageTag) {
      ogImageTag.setAttribute('content', `https://osuele.com${ogImage}`);
    }
    
    const twitterImageTag = document.querySelector('meta[property="twitter:image"]');
    if (twitterImageTag) {
      twitterImageTag.setAttribute('content', `https://osuele.com${ogImage}`);
    }
  }

  // Update Open Graph and Twitter title and description
  if (title) {
    const ogTitleTag = document.querySelector('meta[property="og:title"]');
    const twitterTitleTag = document.querySelector('meta[property="twitter:title"]');
    if (ogTitleTag) ogTitleTag.setAttribute('content', `${title} | Osuele Ventures`);
    if (twitterTitleTag) twitterTitleTag.setAttribute('content', `${title} | Osuele Ventures`);
  }
  
  if (description) {
    const ogDescTag = document.querySelector('meta[property="og:description"]');
    const twitterDescTag = document.querySelector('meta[property="twitter:description"]');
    if (ogDescTag) ogDescTag.setAttribute('content', description);
    if (twitterDescTag) twitterDescTag.setAttribute('content', description);
  }
};

/**
 * Page-specific metadata for SEO
 */
export const pageSeoData: Record<string, SEOProps> = {
  home: {
    title: "Excellence in Multidisciplinary Services",
    description: "Osuele Ventures provides trusted expertise in telecommunications, construction, engineering, and more across Ghana.",
    canonical: "/",
    ogImage: "/images/hero-bg.jpg"
  },
  about: {
    title: "About Us",
    description: "Learn about Osuele Ventures - our history, mission, vision, values and achievements in telecommunications, construction and engineering.",
    canonical: "/about",
    ogImage: "/images/about-hero.jpg"
  },
  services: {
    title: "Our Services",
    description: "Explore our comprehensive range of services including telecommunications, civil engineering, construction, equipment supply and more.",
    canonical: "/services",
    ogImage: "/images/services-bg.jpg"
  },
  projects: {
    title: "Our Projects",
    description: "View our portfolio of successful projects across telecommunications, construction, civil engineering and supplies sectors in Ghana.",
    canonical: "/projects",
    ogImage: "/images/projects.jpg"
  },
  sportsClub: {
    title: "Sports Club",
    description: "Discover our state-of-the-art sports facilities, programs and events that develop athletes and promote fitness in the community.",
    canonical: "/sports-club",
    ogImage: "/images/sports/sports-hero.jpg"
  },
  contact: {
    title: "Contact Us",
    description: "Get in touch with Osuele Ventures for inquiries about our services, projects, or to discuss your specific business requirements.",
    canonical: "/contact",
    ogImage: "/images/contact-bg.jpg"
  }
};