import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // Core Static Routes
  const staticRoutes = [
    '',
    '/about',
    '/admissions',
    '/certifications',
    '/contact',
    '/infrastructure',
    '/placement',
    '/policies',
    '/workshops',
    '/company/organization',
    '/company/ecosystem',
    '/company/gallery',
    '/company/news',
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' ? ('daily' as const) : ('weekly' as const),
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Certification Pages
  const certificationRoutes = [
    '/certifications/cehv13',
    '/certifications/chfi',
    '/certifications/csa',
    '/certifications/cpent',
    '/certifications/cciso',
    '/certifications/ctia',
    '/certifications/ecih',
    '/certifications/cdda',
    '/certifications/cnda',
    '/certifications/cise',
    '/certifications/cdfe',
    '/certifications/ciss',
    '/certifications/cism',
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Services Pages
  const serviceRoutes = [
    '/services/digital-forensics',
    '/services/vulnerability-assessment',
    '/services/penetration-testing',
    '/services/it-audits-compliance',
    '/services/cybercrime-investigation',
    '/services/threat-detection',
    '/services/endpoint-security',
    '/services/cyber-awareness',
    '/services/questioned-document',
    '/services/fingerprint-impressions',
    '/services/speaker-identification',
    '/services/fire-explosion',
    '/services/signature-examination',
    '/services/financial-crime',
    '/services/expert-witness',
    '/services/research-development',
    '/services/training',
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  // Training & Workshop Subpages
  const trainingRoutes = [
    '/trainings/atc-practical',
    '/trainings/digital-toolbox',
    '/trainings/fingerprint',
    '/workshops/security-awareness',
    '/workshops/research',
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    ...staticRoutes,
    ...certificationRoutes,
    ...serviceRoutes,
    ...trainingRoutes,
  ];
}
