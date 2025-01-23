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
  title: 'VL Studios | Professional Music Production & Recording',
  description: 'Professional music production, recording, and mixing services in Bangalore. Led by Victor Logidasan.',
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
