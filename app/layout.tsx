// import './globals.css';
// import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
// import { Navigation } from '@/components/navigation';
// import { Footer } from '@/components/footer';
// import { Toaster } from "@/components/ui/toaster";

// const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'VL Studios | Professional Music Production & Recording',
//   description: 'Professional music production, recording, and mixing services in Bangalore. Led by Victor Logidasan.',
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <Navigation />
//         <main className="min-h-screen">{children}</main>
//         <Footer />
//         <Toaster />
//       </body>
//     </html>
//   );
// }

//added view adjustment for different screen sizes
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Toaster } from "@/components/ui/toaster";
import { MessageCircle } from "lucide-react"; // Icon for WhatsApp-style button

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'VL Music Studios | Professional Music Production & Recording in Bangalore',
  description: 'Professional music production, recording, and mixing mastering, karaoke, music composing, podcast venue, karaoke party services in Koramangala, Bangalore. Led by Victor Logidasan.',
  keywords: 'vl music studios, vl studios, vl music studio, victor logidasan, music studios in bangalore, audio production, video production, podcast studio, recording studio, music production, jam room, video shooting, music video shooting, music classes, karaoke venue, music recording studio near koramangala, highly rated music studios in bangalore, top music studios in bangalore, music studios near me, mixing, mastering, music classes, professional music recording studio, koramangala, bangalore', 
  openGraph: {
    title: 'VL Studios - Professional Audio & Video Production Services',
    description: 'Professional audio and video production services including podcast recording, music production, jam sessions, and video shoots.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://i.pinimg.com/1200x/de/da/05/deda0595dd29b9da14a6c2a39eb5fd88.jpg',
        width: 1200,
        height: 630,
        alt: 'VL Studios Recording Setup',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VL Studios - Professional Audio & Video Production Services',
    description: 'Professional audio and video production services including podcast recording, music production, jam sessions, and video shoots.',
    images: ['https://i.pinimg.com/1200x/de/da/05/deda0595dd29b9da14a6c2a39eb5fd88.jpg'],
  },
  robots: {
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
  verification: {
    google: 'your-google-verification-code', // Replace with your actual Google verification code
  },
  alternates: {
    canonical: 'https://vlstudios.com', // Replace with your actual domain
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        {/* Navigation Bar */}
        <Navigation />

        {/* Main Content */}
        <main className="min-h-screen px-4 sm:px-6 lg:px-8">
          {children}

          {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/c/919742343464"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-all z-50"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
        </main>

        {/* Footer */}
        <Footer />

        {/* Toaster for notifications */}
        <Toaster />
      </body>
    </html>
  );
}
