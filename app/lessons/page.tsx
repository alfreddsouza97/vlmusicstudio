import { Button } from "@/components/ui/button";
import { Music, BookOpen, Users, Award } from "lucide-react";
import Link from "next/link";

export default function LessonsPage() {
  return (
    <div>
      <section className="relative h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Music Lessons</h1>
          <p className="text-xl">Professional music education for all skill levels</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Music,
                title: "Instrument Training",
                description: "Learn various instruments from expert instructors",
              },
              {
                icon: BookOpen,
                title: "Music Theory",
                description: "Comprehensive music theory education",
              },
              {
                icon: Users,
                title: "Group Classes",
                description: "Collaborative learning environment",
              },
              {
                icon: Award,
                title: "Certification",
                description: "Professional certification programs",
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
          <h2 className="text-3xl font-bold text-center mb-12">Available Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Beginner Package",
                description: "Perfect for those just starting their musical journey",
                features: [
                  "Basic instrument techniques",
                  "Introduction to music theory",
                  "Weekly 45-minute lessons",
                  "Practice materials",
                ],
                price: "₹3000/month",
              },
              {
                name: "Intermediate Package",
                description: "For students with some musical experience",
                features: [
                  "Advanced techniques",
                  "Comprehensive theory classes",
                  "Weekly 60-minute lessons",
                  "Recording sessions",
                  "Performance opportunities",
                ],
                price: "₹4500/month",
              },
              {
                name: "Advanced Package",
                description: "Professional-level training",
                features: [
                  "Expert-level techniques",
                  "Advanced theory and composition",
                  "Weekly 90-minute lessons",
                  "Studio time included",
                  "Performance opportunities",
                  "Industry guidance",
                ],
                price: "₹6000/month",
              },
            ].map((course, index) => (
              <div key={index} className="bg-card rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{course.name}</h3>
                  <p className="text-muted-foreground mb-4">{course.description}</p>
                  <ul className="space-y-2 mb-6">
                    {course.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Music className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xl font-bold mb-4">{course.price}</p>
                  <Link href="/contact">
                    <Button className="w-full">Enroll Now</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Instruments We Teach</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Guitar",
              "Piano",
              "Drums",
              "Bass",
              "Vocals",
              "Violin",
              "Saxophone",
              "Music Production",
            ].map((instrument, index) => (
              <div key={index} className="text-center p-6 bg-card rounded-lg shadow-lg">
                <Music className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold">{instrument}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Start Your Musical Journey</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us to schedule a trial lesson and begin your musical education.
          </p>
          <Link href="/contact">
            <Button size="lg">
              Book Trial Lesson
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}