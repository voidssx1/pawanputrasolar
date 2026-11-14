import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SmoothScroll from "@/components/smooth-scroll";
import ScrollProgress from "@/components/scroll-progress";
import { site } from "@/lib/site";

const description =
  "Premium rooftop solar for homes, businesses and housing societies across Delhi NCR. Engineered systems, subsidy paperwork handled, installation in 4–6 weeks.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Pawanputra Solar Solutions — Rooftop Solar, Delhi NCR",
    template: "%s — Pawanputra Solar Solutions",
  },
  description,
  applicationName: "Pawanputra Solar Solutions",
  keywords: [
    "rooftop solar Delhi",
    "solar panel installation Delhi NCR",
    "PM Surya Ghar subsidy",
    "home solar Noida",
    "commercial solar Gurugram",
    "housing society solar",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.legalName,
    title: "Pawanputra Solar Solutions — Rooftop Solar, Delhi NCR",
    description,
    images: [
      {
        url: "/images/hero-rooftop-wide.webp",
        width: 1536,
        height: 1024,
        alt: "Rooftop solar array on a Delhi home at golden hour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pawanputra Solar Solutions — Rooftop Solar, Delhi NCR",
    description,
    images: ["/images/hero-rooftop-wide.webp"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.url}/#business`,
  name: site.legalName,
  url: site.url,
  image: `${site.url}/images/hero-rooftop-wide.webp`,
  logo: `${site.url}/brand/logo.png`,
  telephone: "+91-98058-45213",
  priceRange: "₹₹",
  description,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.line1}, ${site.address.line2}`,
    addressLocality: site.address.city,
    postalCode: site.address.pin,
    addressCountry: "IN",
  },
  areaServed: site.areas.map((area) => ({
    "@type": "Place",
    name: area,
  })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:30",
      closes: "19:00",
    },
  ],
  knowsAbout: [
    "Rooftop solar",
    "PM Surya Ghar Muft Bijli Yojana",
    "Net metering",
    "Solar battery backup",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/fonts/fonts.css" />
        <link
          rel="preload"
          href="/fonts/poppins-700-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/dmsans-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <ScrollProgress />
        <div className="grain" aria-hidden="true" />
        <SmoothScroll />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
