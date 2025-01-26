import { Button } from "@/components/ui/button";
import { Mic, Music2, Headphones, Settings2 } from "lucide-react";
import Link from "next/link";

//extra code -  experimental

// export function ContactUsButton() {
//   return (
//     <div className="text-center">
//       {/* Adding experimental break */}
//       <br />

//       <Link legacyBehavior href="/booking">
//         <a className="w-full inline-block py-3 px-6 text-center bg-gray-600 text-white rounded-md shadow-md hover:bg-blue-700">
//           {/* Contact Us */}
//           Book your Service now
//         </a>
//       </Link>
//     </div>
//   );
// }

export default function RecordingPage() {
  return (
    <div>
      <section className="relative h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0"
          style={{
            // backgroundImage: "url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80')",
            backgroundImage: "url('https://i.ytimg.com/vi/iI_klQnlrzw/maxresdefault.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Recording Sessions</h1>
          <p className="text-xl">State-of-the-art recording facilities for musicians</p>
          <br />
          {/* <ContactUsButton/> */}
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Mic,
                title: "Professional Microphones",
                description: "High-end microphones for every instrument and voice type",
              },
              {
                icon: Music2,
                title: "Acoustic Treatment",
                description: "Perfectly treated rooms for optimal sound capture",
              },
              {
                icon: Headphones,
                title: "Monitoring",
                description: "Professional monitoring systems for accurate playback",
              },
              {
                icon: Settings2,
                // title: "Pro Tools Setup",
                title: "Logic Pro X Setup",
                description: "Industry-standard recording software and hardware",
              },
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-card rounded-lg shadow-lg">
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Recording Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Instruments We Record</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Music2 className="h-5 w-5 text-primary" />
                  <span>Vocals</span>
                </li>
                <li className="flex items-center gap-2">
                  <Music2 className="h-5 w-5 text-primary" />
                  <span>Drums</span>
                </li>
                <li className="flex items-center gap-2">
                  <Music2 className="h-5 w-5 text-primary" />
                  <span>Guitar</span>
                </li>
                <li className="flex items-center gap-2">
                  <Music2 className="h-5 w-5 text-primary" />
                  <span>Bass</span>
                </li>
                <li className="flex items-center gap-2">
                  <Music2 className="h-5 w-5 text-primary" />
                  <span>Piano</span>
                </li>
                <li className="flex items-center gap-2">
                  <Music2 className="h-5 w-5 text-primary" />
                  <span>Orchestral Instruments</span>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Additional Services</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Settings2 className="h-5 w-5 text-primary" />
                  <span>Multi-track Recording</span>
                </li>
                <li className="flex items-center gap-2">
                  <Settings2 className="h-5 w-5 text-primary" />
                  <span>Live Band Recording</span>
                </li>
                <li className="flex items-center gap-2">
                  <Settings2 className="h-5 w-5 text-primary" />
                  <span>Mixing Services</span>
                </li>
                <li className="flex items-center gap-2">
                  <Settings2 className="h-5 w-5 text-primary" />
                  <span>Mastering</span>
                </li>
                <li className="flex items-center gap-2">
                  <Settings2 className="h-5 w-5 text-primary" />
                  <span>Session Musicians</span>
                </li>
                <li className="flex items-center gap-2">
                  <Settings2 className="h-5 w-5 text-primary" />
                  <span>Audio Restoration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Record?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us to book your recording session and bring your music to life with professional quality.
          </p>
          <Link href="/booking">
            <Button size="lg">
              Book Recording Session
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}