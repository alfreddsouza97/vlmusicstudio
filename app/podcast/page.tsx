import { Button } from "@/components/ui/button";
import { Mic, Radio, Settings, Music } from "lucide-react";
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

export default function PodcastPage() {
  return (
    <div>
      <section className="relative h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Podcast Production</h1>
          <p className="text-xl">Professional podcast recording and production services</p>

          {/* <ContactUsButton/> */}
          
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Mic,
                title: "Professional Equipment",
                description: "High-quality microphones and recording equipment for crystal clear audio",
              },
              {
                icon: Settings,
                title: "Post-Production",
                description: "Expert editing, mixing, and mastering services",
              },
              {
                icon: Radio,
                title: "Live Streaming",
                description: "Capability to live stream your podcast with professional quality",
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
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Recording</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Music className="h-6 w-6 text-primary mr-2 mt-1" />
                  <span>Professional recording environment with acoustic treatment</span>
                </li>
                <li className="flex items-start">
                  <Music className="h-6 w-6 text-primary mr-2 mt-1" />
                  <span>Multiple microphone options for different voice types</span>
                </li>
                <li className="flex items-start">
                  <Music className="h-6 w-6 text-primary mr-2 mt-1" />
                  <span>Real-time monitoring and feedback</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Post-Production</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Music className="h-6 w-6 text-primary mr-2 mt-1" />
                  <span>Professional editing and cleanup</span>
                </li>
                <li className="flex items-start">
                  <Music className="h-6 w-6 text-primary mr-2 mt-1" />
                  <span>Sound design and music integration</span>
                </li>
                <li className="flex items-start">
                  <Music className="h-6 w-6 text-primary mr-2 mt-1" />
                  <span>Final mixing and mastering</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Podcast?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get in touch with us to discuss your podcast project and how we can help bring your vision to life.
          </p>
          <Link href="/booking">
            <Button size="lg">
              Book a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}