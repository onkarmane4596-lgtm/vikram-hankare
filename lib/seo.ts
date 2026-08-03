import type { Metadata } from 'next';

export const SITE_URL = 'https://skycyberforensics.in';
export const SITE_NAME = 'SKYLINE Centre of Excellence in Cyber Security and Forensics';
export const DEFAULT_TITLE = 'SKYLINE Centre of Excellence in Cyber Security & Forensics | EC-Council ATC';
export const DEFAULT_DESCRIPTION = 'Official Training Division of Chhatrapati Shahu Maharaj Sevabhavi Sanstha (Est. 2007). Leading EC-Council Accredited Training Centre (ATC) in Satara, Maharashtra offering CEHv13, CHFI, CPENT, CSA, CCISO, Digital Forensics, and Incident Response certifications.';

export interface SeoProps {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = '',
  keywords = [],
  ogImage = '/logo.png',
  noIndex = false,
}: SeoProps = {}): Metadata {
  const url = `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;

  const defaultKeywords = [
    'Skyline',
    'Skyline Centre of Excellence',
    'Skyline Cyber',
    'Skyline Cyber Security',
    'Skyline Cyber Forensics',
    'Cyber Security Institute Satara',
    'Cyber Security Training Maharashtra',
    'Certified Ethical Hacker CEHv13',
    'Computer Hacking Forensic Investigator CHFI',
    'EC-Council Accredited Training Centre',
    'Digital Forensics Laboratory',
    'Cyber Incident Response',
    'Ethical Hacking Course Pune',
    'Cyber Security Institute Kolhapur',
    'Cyber Security Institute Sangli',
    'Penetration Testing Services',
    'Vulnerability Assessment',
  ];

  const allKeywords = Array.from(new Set([...keywords, ...defaultKeywords]));

  return {
    title,
    description,
    keywords: allKeywords,
    authors: [{ name: 'SKYLINE Centre of Excellence in Cyber Security and Forensics' }],
    creator: 'SKYLINE Centre of Excellence in Cyber Security and Forensics',
    publisher: 'Chhatrapati Shahu Maharaj Sevabhavi Sanstha',
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
      languages: {
        'en-IN': url,
        'en-US': url,
      },
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      url,
      title,
      description,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`],
      creator: '@skyline_cyber',
      site: '@skyline_cyber',
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/icon.svg', type: 'image/svg+xml' },
        { url: '/logo.png', sizes: '192x192', type: 'image/png' },
      ],
      apple: [{ url: '/logo.png', sizes: '180x180', type: 'image/png' }],
      shortcut: ['/logo.png'],
    },
    manifest: '/manifest.webmanifest',
    verification: {
      google: 'google-site-verification-placeholder',
      yandex: 'yandex-verification-placeholder',
    },
  };
}

// JSON-LD Schema Generators
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['EducationalOrganization', 'LocalBusiness', 'GovernmentService'],
    '@id': `${SITE_URL}/#organization`,
    name: 'SKYLINE Centre of Excellence in Cyber Security and Forensics',
    legalName: 'Chhatrapati Shahu Maharaj Sevabhavi Sanstha - Skyline Division',
    alternateName: ['Skyline Cyber Security', 'Skyline Cyber Forensics', 'Skyline ATC'],
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/logo.png`,
    description: DEFAULT_DESCRIPTION,
    foundingDate: '2007',
    telephone: '+919890424040',
    email: 'info@skycyberforensics.in',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'I Floor, Rajasi Business Centre, opp BSNL office, Near Powai Naka',
      addressLocality: 'Satara',
      addressRegion: 'Maharashtra',
      postalCode: '415001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 17.6805,
      longitude: 74.0183,
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Satara' },
      { '@type': 'AdministrativeArea', name: 'Pune' },
      { '@type': 'AdministrativeArea', name: 'Kolhapur' },
      { '@type': 'AdministrativeArea', name: 'Sangli' },
      { '@type': 'AdministrativeArea', name: 'Maharashtra' },
      { '@type': 'Country', name: 'India' },
    ],
    sameAs: [
      'https://www.facebook.com/profile.php?id=61590718920061',
      'https://www.linkedin.com/in/skyline-centre-of-excellence-in-cybersecurity-and-forensics-725507415',
      'https://www.instagram.com/skyline_cyberforensics',
      'https://youtube.com/@skylinecyberforensics?si=rI7ZCJAG0HxajVrA',
    ],
    priceRange: '₹₹',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Accredited Training Centre (ATC)',
        recognizedBy: {
          '@type': 'Organization',
          name: 'EC-Council International',
        },
      },
    ],
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'SKYLINE Centre of Excellence',
    description: DEFAULT_DESCRIPTION,
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    inLanguage: 'en-IN',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/certifications?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

export function getCourseSchema({
  name,
  description,
  courseCode,
  provider = 'SKYLINE Centre of Excellence',
  url,
}: {
  name: string;
  description: string;
  courseCode: string;
  provider?: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description,
    courseCode,
    provider: {
      '@type': 'EducationalOrganization',
      name: provider,
      sameAs: SITE_URL,
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: ['Onsite', 'Online', 'Blended'],
      courseWorkload: 'P3M',
      location: 'Satara, Maharashtra, India',
    },
    offers: {
      '@type': 'Offer',
      category: 'Education / Certification',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: url.startsWith('http') ? url : `${SITE_URL}${url}`,
    },
  };
}

export function getFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
