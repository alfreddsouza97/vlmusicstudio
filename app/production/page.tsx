import { Button } from "@/components/ui/button";
import { Music2, Headphones, Settings2, Radio } from "lucide-react";
import Link from "next/link";


//extra code -  experimental

export function ContactUsButton() {
  return (
    <div className="text-center">
      {/* Adding experimental break */}
      <br />

      <Link legacyBehavior href="/booking">
        <a className="w-full inline-block py-3 px-6 text-center bg-gray-600 text-white rounded-md shadow-md hover:bg-blue-700">
          {/* Contact Us */}
          Book your Service now
        </a>
      </Link>
    </div>
  );
}

export default function ProductionPage() {
  return (
    <div>
      <section className="relative h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1598653222000-6b7b7a552625?auto=format&fit=crop&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Music Production</h1>
          <p className="text-xl">Professional music production and mixing services</p>
          <br />
          <ContactUsButton/>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Music2,
                title: "Composition",
                description: "Original music composition and arrangement services",
              },
              {
                icon: Headphones,
                title: "Mixing",
                description: "Professional mixing to perfect your sound",
              },
              {
                icon: Settings2,
                title: "Mastering",
                description: "Final polish for commercial-ready releases",
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
          <h2 className="text-3xl font-bold text-center mb-12">Our Production Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Pre-Production",
                description: "Song arrangement, reference tracks, and production planning",
              },
              {
                step: "2",
                title: "Recording",
                description: "High-quality recording of all instruments and vocals",
              },
              {
                step: "3",
                title: "Mixing",
                description: "Detailed mixing process to balance and enhance your tracks",
              },
              {
                step: "4",
                title: "Mastering",
                description: "Final polish for commercial-ready sound",
              },
            ].map((phase, index) => (
              <div key={index} className="relative p-6 bg-card rounded-lg shadow-lg">
                <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 mt-4">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Production Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Music Production</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Radio className="h-6 w-6 text-primary mr-2 mt-1" />
                  <div>
                    <span className="font-semibold">Original Composition</span>
                    <p className="text-muted-foreground">Custom music composition for various genres</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Radio className="h-6 w-6 text-primary mr-2 mt-1" />
                  <div>
                    <span className="font-semibold">Arrangement</span>
                    <p className="text-muted-foreground">Professional arrangement and orchestration</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Radio className="h-6 w-6 text-primary mr-2 mt-1" />
                  <div>
                    <span className="font-semibold">Sound Design</span>
                    <p className="text-muted-foreground">Custom sound design and synthesis</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Post-Production</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Radio className="h-6 w-6 text-primary mr-2 mt-1" />
                  <div>
                    <span className="font-semibold">Mixing</span>
                    <p className="text-muted-foreground">Professional mixing and sound balancing</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Radio className="h-6 w-6 text-primary mr-2 mt-1" />
                  <div>
                    <span className="font-semibold">Mastering</span>
                    <p className="text-muted-foreground">Industry-standard mastering for all platforms</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Radio className="h-6 w-6 text-primary mr-2 mt-1" />
                  <div>
                    <span className="font-semibold">Stem Mixing</span>
                    <p className="text-muted-foreground">Detailed stem mixing for maximum control</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Produce Your Music?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's work together to bring your musical vision to life with professional production.
          </p>
          <Link href="/booking">
            <Button size="lg">
              Start Your Project
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}