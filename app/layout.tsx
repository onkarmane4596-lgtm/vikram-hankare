import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { SiteHeader } from '@/components/layout/site-header'
import { SiteFooter } from '@/components/layout/site-footer'
import { CustomCursor } from '@/components/ui/custom-cursor'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#030712',
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  title: 'SKYLINE Centre of Excellence in Cyber Security and Forensics',
  description: 'Industry-focused cybersecurity training and digital forensics education, empowering students with real-world skills.',
  generator: 'Next.js',
  keywords: ['Cyber Security', 'Digital Forensics', 'Ethical Hacking', 'Risk & Compliance', 'Incident Response', 'Education', 'Skyline', 'SKYLINE Centre of Excellence', 'Satara', 'Maharashtra', 'Certification'],
  authors: [{ name: 'SKYLINE Centre of Excellence in Cyber Security and Forensics' }],
  creator: 'SKYLINE Centre of Excellence in Cyber Security and Forensics',
  publisher: 'Chhatrapati Shahu Maharaj Sevabhavi Sanstha',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'SKYLINE Centre of Excellence in Cyber Security and Forensics',
    description: 'Where Security Meets Intelligence. Master Ethical Hacking, Digital Forensics, and Incident Response with expert-led training at SKYLINE Centre of Excellence.',
    url: 'https://skycyberforensics.in',
    siteName: 'SKYLINE Centre of Excellence',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 800,
        alt: 'SKYLINE Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SKYLINE Centre of Excellence',
    description: 'Where Security Meets Intelligence. Build your career in Cyber Security with SKYLINE.',
    images: ['/logo.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="font-sans antialiased bg-brand-dark text-slate-200 flex flex-col min-h-screen relative" suppressHydrationWarning>
        <CustomCursor />
        <SiteHeader />
        <main className="flex-grow">
          {children}
        </main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
