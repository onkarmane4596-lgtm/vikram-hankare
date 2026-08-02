import type { Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { SiteHeader } from '@/components/layout/site-header'
import { SiteFooter } from '@/components/layout/site-footer'
import { CustomCursor } from '@/components/ui/custom-cursor'
import { FloatingActionDock } from '@/components/layout/floating-action-dock'
import { constructMetadata, getOrganizationSchema, getWebSiteSchema } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#020617',
  viewportFit: 'cover',
}

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const orgSchema = getOrganizationSchema();
  const websiteSchema = getWebSiteSchema();

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="font-sans antialiased bg-brand-dark text-slate-200 flex flex-col min-h-screen relative" suppressHydrationWarning>
        <JsonLd data={orgSchema} />
        <JsonLd data={websiteSchema} />
        <CustomCursor />
        <SiteHeader />
        <main className="flex-grow">
          {children}
        </main>
        <SiteFooter />
        <FloatingActionDock />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
