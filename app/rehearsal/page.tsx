import { Button } from "@/components/ui/button";
import { Music, Speaker, Clock, Users } from "lucide-react";
import Link from "next/link";

export default function RehearsalPage() {
  return (
    <div>
      <section className="relative h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1525201548942-d8732f6617a0?auto=format&fit=crop&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Rehearsal Space</h1>
          <p className="text-xl">Professional rehearsal rooms for bands and artists</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Music,
                title: "Full Backline",
                description: "Professional equipment ready for your rehearsal",
              },
              {
                icon: Speaker,
                title: "PA System",
                description: "High-quality sound system and monitors",
              },
              {
                icon: Clock,
                title: "Flexible Hours",
                description: "Available for both short and long sessions",
              },
              {
                icon: Users,
                title: "Multiple Rooms",
                description: "Different room sizes for various group sizes",
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
          <h2 className="text-3xl font-bold text-center mb-12">Room Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Small Room",
                size: "20㎡",
                capacity: "1-4 people",
                features: [
                  "Basic PA System",
                  "Drum Kit",
                  "Guitar Amp",
                  "Bass Amp",
                  "Microphones",
                ],
                price: "₹500/hour",
              },
              {
                name: "Medium Room",
                size: "35㎡",
                capacity: "4-6 people",
                features: [
                  "Full PA System",
                  "Professional Drum Kit",
                  "Multiple Guitar Amps",
                  "Bass Amp",
                  "Microphones",
                  "Basic Recording Setup",
                ],
                price: "₹800/hour",
              },
              {
                name: "Large Room",
                size: "50㎡",
                capacity: "6-10 people",
                features: [
                  "Premium PA System",
                  "Professional Drum Kit",
                  "Multiple Guitar Amps",
                  "Bass Amp",
                  "Multiple Microphones",
                  "Recording Capability",
                  "Keyboard/Piano",
                ],
                price: "₹1200/hour",
              },
            ].map((room, index) => (
              <div key={index} className="bg-card rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{room.name}</h3>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">Size: {room.size}</p>
                    <p className="text-muted-foreground">Capacity: {room.capacity}</p>
                    <div>
                      <h4 className="font-semibold mb-2">Features:</h4>
                      <ul className="space-y-2">
                        {room.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <Music className="h-4 w-4 text-primary" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-xl font-bold">{room.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Book Your Rehearsal Space</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us to reserve your preferred rehearsal room and time slot.
          </p>
          <Link href="/contact">
            <Button size="lg">
              Book Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}