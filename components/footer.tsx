import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">VL Studios</h3>
            <p className="text-muted-foreground">
              Professional music production and recording studio in Bangalore.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" /> +91 9742343464
              </p>
              <p className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" /> vlmusicstudio@gmail.com
              </p>
              <p className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" /> 1023 2nd floor, 80 Feet Rd, 1st Block Koramangala, Koramangala, Bengaluru, Karnataka 560034
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Studio Hours</h3>
            <p className="text-muted-foreground">
              Monday - Saturday: 10:00 AM - 12:00 AM<br />
              Sunday: By Appointment
            </p>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} VL Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}