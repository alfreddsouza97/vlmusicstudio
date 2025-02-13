// "use client";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Mail, Phone, MapPin } from "lucide-react";
// import { useState } from "react";
// import { useToast } from "@/hooks/use-toast";

// export default function ContactPage() {
//   const { toast } = useToast();
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     service: "",
//     message: "",
//   });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const response = await fetch('/api/send', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to send message');
//       }

//       toast({
//         title: "Message sent successfully",
//         description: "We'll get back to you as soon as possible.",
//       });

//       // Reset form
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         service: "",
//         message: "",
//       });
//     } catch (error) {
//       toast({
//         title: "Error sending message",
//         description: "Please try again later.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div>
//       <section className="relative h-[400px] flex items-center justify-center">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: "url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           <div className="absolute inset-0 bg-black/60" />
//         </div>
//         <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
//           <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
//           <p className="text-xl">Get in touch with VL Studios</p>
//         </div>
//       </section>

//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             <div>
//               <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
//               <p className="text-muted-foreground mb-8">
//                 Have questions about our services? Want to book a session? Fill out the form below and we'll get back to you as soon as possible.
//               </p>
              
//               <div className="space-y-6">
//                 <div className="flex items-center gap-4">
//                   <Phone className="h-6 w-6 text-primary" />
//                   <div>
//                     <h3 className="font-semibold">Phone</h3>
//                     <p className="text-muted-foreground">+91 9742343464</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-center gap-4">
//                   <Mail className="h-6 w-6 text-primary" />
//                   <div>
//                     <h3 className="font-semibold">Email</h3>
//                     <p className="text-muted-foreground">vlmusicstudio@gmail.com</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-center gap-4">
//                   <MapPin className="h-6 w-6 text-primary" />
//                   <div>
//                     <h3 className="font-semibold">Location</h3>
//                     <p className="text-muted-foreground">1023 2nd floor, 80 Feet Rd, 1st Block Koramangala, Koramangala, Bengaluru, Karnataka 560034</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-card p-8 rounded-lg shadow-lg">
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium mb-2">
//                     Name
//                   </label>
//                   <Input
//                     id="name"
//                     value={formData.name}
//                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium mb-2">
//                     Email
//                   </label>
//                   <Input
//                     id="email"
//                     type="email"
//                     value={formData.email}
//                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="phone" className="block text-sm font-medium mb-2">
//                     Phone
//                   </label>
//                   <Input
//                     id="phone"
//                     value={formData.phone}
//                     onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="service" className="block text-sm font-medium mb-2">
//                     Service Interested In
//                   </label>
//                   <Select
//                     value={formData.service}
//                     onValueChange={(value) => setFormData({ ...formData, service: value })}
//                   >
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select a service" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="podcast">Podcast Production</SelectItem>
//                       <SelectItem value="recording">Recording Sessions</SelectItem>
//                       <SelectItem value="rehearsal">Rehearsal Space</SelectItem>
//                       <SelectItem value="production">Music Production</SelectItem>
//                       <SelectItem value="lessons">Music Lessons</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-sm font-medium mb-2">
//                     Message
//                   </label>
//                   <Textarea
//                     id="message"
//                     value={formData.message}
//                     onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                     required
//                     rows={4}
//                   />
//                 </div>

//                 <Button type="submit" className="w-full" disabled={isSubmitting}>
//                   {isSubmitting ? "Sending..." : "Send Message"}
//                 </Button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


// "use client";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Mail, Phone, MapPin } from "lucide-react";
// import { useState } from "react";
// import { useToast } from "@/hooks/use-toast";

// export default function ContactPage() {
//   const { toast } = useToast();
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     service: "",
//     message: "",
//   });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const response = await fetch('/api/send', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to send message');
//       }

//       toast({
//         title: "Message sent successfully",
//         description: "We'll get back to you as soon as possible.",
//       });

//       // Construct WhatsApp URL with prefilled message
//       const whatsappMessage = `Hi VL Studios, my name is ${formData.name}. I am interested in your ${formData.service} service. Here's my message: ${formData.message}. You can reach me at ${formData.email} or ${formData.phone}.`;
//       const whatsappUrl = `https://wa.me/919742343464?text=${encodeURIComponent(whatsappMessage)}`;

//       // Open WhatsApp in a new tab
//       window.open(whatsappUrl, "_blank");

//       // Reset form
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         service: "",
//         message: "",
//       });
//     } catch (error) {
//       toast({
//         title: "Error sending message",
//         description: "Please try again later.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div>
//       <section className="relative h-[400px] flex items-center justify-center">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: "url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           <div className="absolute inset-0 bg-black/60" />
//         </div>
//         <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
//           <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
//           <p className="text-xl">Get in touch with VL Studios</p>
//         </div>
//       </section>

//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             <div>
//               <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
//               <p className="text-muted-foreground mb-8">
//                 Have questions about our services? Want to book a session? Fill out the form below and we'll get back to you as soon as possible.
//               </p>
              
//               <div className="space-y-6">
//                 <div className="flex items-center gap-4">
//                   <Phone className="h-6 w-6 text-primary" />
//                   <div>
//                     <h3 className="font-semibold">Phone</h3>
//                     <p className="text-muted-foreground">+91 9742343464</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-center gap-4">
//                   <Mail className="h-6 w-6 text-primary" />
//                   <div>
//                     <h3 className="font-semibold">Email</h3>
//                     <p className="text-muted-foreground">vlmusicstudio@gmail.com</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-center gap-4">
//                   <MapPin className="h-6 w-6 text-primary" />
//                   <div>
//                     <h3 className="font-semibold">Location</h3>
//                     <p className="text-muted-foreground">1023 2nd floor, 80 Feet Rd, 1st Block Koramangala, Koramangala, Bengaluru, Karnataka 560034</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-card p-8 rounded-lg shadow-lg">
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium mb-2">
//                     Name
//                   </label>
//                   <Input
//                     id="name"
//                     value={formData.name}
//                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium mb-2">
//                     Email
//                   </label>
//                   <Input
//                     id="email"
//                     type="email"
//                     value={formData.email}
//                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="phone" className="block text-sm font-medium mb-2">
//                     Phone
//                   </label>
//                   <Input
//                     id="phone"
//                     value={formData.phone}
//                     onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="service" className="block text-sm font-medium mb-2">
//                     Service Interested In
//                   </label>
//                   <Select
//                     value={formData.service}
//                     onValueChange={(value) => setFormData({ ...formData, service: value })}
//                   >
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select a service" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="podcast">Podcast Production</SelectItem>
//                       <SelectItem value="recording">Recording Sessions</SelectItem>
//                       <SelectItem value="rehearsal">Rehearsal Space</SelectItem>
//                       <SelectItem value="production">Music Production</SelectItem>
//                       <SelectItem value="lessons">Music Lessons</SelectItem>
//                       <SelectItem value="karaoke">Karaoke Party Venue</SelectItem>
//                       <SelectItem value="classes">Music Classes</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-sm font-medium mb-2">
//                     Message
//                   </label>
//                   <Textarea
//                     id="message"
//                     value={formData.message}
//                     onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                     required
//                     rows={4}
//                   />
//                 </div>

//                 <Button type="submit" className="w-full" disabled={isSubmitting}>
//                   {isSubmitting ? "Sending..." : "Send Message"}
//                 </Button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// "use client";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Mail, Phone, MapPin } from "lucide-react";
// import { useState } from "react";
// import { useToast } from "@/hooks/use-toast";

// export default function ContactPage() {
//   const { toast } = useToast();
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     service: "",
//     message: "",
//   });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const response = await fetch("/api/send", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to send message");
//       }

//       toast({
//         title: "Message sent successfully",
//         description: "We'll get back to you as soon as possible.",
//       });

//       // Construct WhatsApp URL with prefilled message
//       const whatsappMessage = `Hi VL Studios, my name is ${formData.name}. I am interested in your ${formData.service} service. Here's my message: ${formData.message}. You can reach me at ${formData.email} or ${formData.phone}.`;
//       const whatsappUrl = `https://wa.me/919742343464?text=${encodeURIComponent(
//         whatsappMessage
//       )}`;

//       // Open WhatsApp in a new tab
//       window.open(whatsappUrl, "_blank");

//       // Reset form
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         service: "",
//         message: "",
//       });
//     } catch (error) {
//       toast({
//         title: "Error sending message",
//         description: "Please try again later.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div>
//       <section className="relative h-[400px] flex items-center justify-center">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage:
//               "url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           <div className="absolute inset-0 bg-black/60" />
//         </div>
//         <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
//           <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
//           <p className="text-xl">Get in touch with VL Studios</p>
//         </div>
//       </section>

//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             <div>
//               <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
//               <p className="text-muted-foreground mb-8">
//                 Have questions about our services? Want to book a session? Fill
//                 out the form below and we'll get back to you as soon as
//                 possible.
//               </p>

//               <div className="space-y-6">
//                 <div className="flex items-center gap-4">
//                   <Phone className="h-6 w-6 text-primary" />
//                   <div>
//                     <h3 className="font-semibold">Phone</h3>
//                     <p className="text-muted-foreground">+91 9742343464</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-4">
//                   <Mail className="h-6 w-6 text-primary" />
//                   <div>
//                     <h3 className="font-semibold">Email</h3>
//                     <p className="text-muted-foreground">
//                       vlmusicstudio@gmail.com
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-4">
//                   <MapPin className="h-6 w-6 text-primary" />
//                   <div>
//                     <h3 className="font-semibold">Location</h3>
//                     <p className="text-muted-foreground">
//                       1023 2nd floor, 80 Feet Rd, 1st Block Koramangala,
//                       Koramangala, Bengaluru, Karnataka 560034
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-card p-8 rounded-lg shadow-lg">
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <label
//                     htmlFor="name"
//                     className="block text-sm font-medium mb-2"
//                   >
//                     Name
//                   </label>
//                   <Input
//                     id="name"
//                     value={formData.name}
//                     onChange={(e) =>
//                       setFormData({ ...formData, name: e.target.value })
//                     }
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-medium mb-2"
//                   >
//                     Email
//                   </label>
//                   <Input
//                     id="email"
//                     type="email"
//                     value={formData.email}
//                     onChange={(e) =>
//                       setFormData({ ...formData, email: e.target.value })
//                     }
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="phone"
//                     className="block text-sm font-medium mb-2"
//                   >
//                     Phone
//                   </label>
//                   <Input
//                     id="phone"
//                     value={formData.phone}
//                     onChange={(e) =>
//                       setFormData({ ...formData, phone: e.target.value })
//                     }
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="service"
//                     className="block text-sm font-medium mb-2"
//                   >
//                     Service Interested In
//                   </label>
//                   <Select
//                     value={formData.service}
//                     onValueChange={(value) =>
//                       setFormData({ ...formData, service: value })
//                     }
//                   >
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select a service" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="podcast">Podcast Production</SelectItem>
//                       <SelectItem value="recording">
//                         Recording Sessions
//                       </SelectItem>
//                       <SelectItem value="rehearsal">
//                         Rehearsal Space
//                       </SelectItem>
//                       <SelectItem value="production">
//                         Music Production
//                       </SelectItem>
//                       <SelectItem value="lessons">Music Lessons</SelectItem>
//                       <SelectItem value="karaoke">
//                         Karaoke Party Venue
//                       </SelectItem>
//                       <SelectItem value="classes">Music Classes</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="message"
//                     className="block text-sm font-medium mb-2"
//                   >
//                     Message
//                   </label>
//                   <Textarea
//                     id="message"
//                     value={formData.message}
//                     onChange={(e) =>
//                       setFormData({ ...formData, message: e.target.value })
//                     }
//                     required
//                     rows={4}
//                   />
//                 </div>

//                 <Button type="submit" className="w-full" disabled={isSubmitting}>
//                   {isSubmitting ? "Sending..." : "Send Message"}
//                 </Button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// removed api post calls 
// "use client";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Mail, Phone, MapPin } from "lucide-react";
// import { useState } from "react";
// import { useToast } from "@/hooks/use-toast";

// export default function ContactPage() {
//   const { toast } = useToast();
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     service: "",
//     message: "",
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       // Construct WhatsApp URL with prefilled message
//       const whatsappMessage = `Hi VL Studios, my name is ${formData.name}. I am interested in your ${formData.service} service. Here's my message: ${formData.message}. You can reach me at ${formData.email} or ${formData.phone}.`;
//       const whatsappUrl = `https://wa.me/919742343464?text=${encodeURIComponent(
//         whatsappMessage
//       )}`;

//       // Open WhatsApp in a new tab
//       window.open(whatsappUrl, "_blank");

//       toast({
//         title: "Message sent successfully",
//         description: "Redirecting to WhatsApp.",
//       });

//       // Reset form
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         service: "",
//         message: "",
//       });
//     } catch (error) {
//       toast({
//         title: "Error sending message",
//         description: "Please try again later.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div>
//       <section className="relative h-[400px] flex items-center justify-center">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage:
//               "url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           <div className="absolute inset-0 bg-black/60" />
//         </div>
//         <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
//           <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
//           <p className="text-xl">Get in touch with VL Studios</p>
//         </div>
//       </section>

//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             <div>
//               <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
//               <p className="text-muted-foreground mb-8">
//                 Have questions about our services? Want to book a session? Fill
//                 out the form below and we'll get back to you as soon as
//                 possible.
//               </p>

//               <div className="space-y-6">
//                 <div className="flex items-center gap-4">
//                   <Phone className="h-6 w-6 text-primary" />
//                   <div>
//                     <h3 className="font-semibold">Phone</h3>
//                     <p className="text-muted-foreground">+91 9742343464</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-4">
//                   <Mail className="h-6 w-6 text-primary" />
//                   <div>
//                     <h3 className="font-semibold">Email</h3>
//                     <p className="text-muted-foreground">
//                       vlmusicstudio@gmail.com
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-4">
//                   <MapPin className="h-6 w-6 text-primary" />
//                   <div>
//                     <h3 className="font-semibold">Location</h3>
//                     <p className="text-muted-foreground">
//                       1023 2nd floor, 80 Feet Rd, 1st Block Koramangala,
//                       Koramangala, Bengaluru, Karnataka 560034
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-card p-8 rounded-lg shadow-lg">
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <label
//                     htmlFor="name"
//                     className="block text-sm font-medium mb-2"
//                   >
//                     Name
//                   </label>
//                   <Input
//                     id="name"
//                     value={formData.name}
//                     onChange={(e) =>
//                       setFormData({ ...formData, name: e.target.value })
//                     }
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-medium mb-2"
//                   >
//                     Email
//                   </label>
//                   <Input
//                     id="email"
//                     type="email"
//                     value={formData.email}
//                     onChange={(e) =>
//                       setFormData({ ...formData, email: e.target.value })
//                     }
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="phone"
//                     className="block text-sm font-medium mb-2"
//                   >
//                     Phone
//                   </label>
//                   <Input
//                     id="phone"
//                     value={formData.phone}
//                     onChange={(e) =>
//                       setFormData({ ...formData, phone: e.target.value })
//                     }
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="service"
//                     className="block text-sm font-medium mb-2"
//                   >
//                     Service Interested In
//                   </label>
//                   <Select
//                     value={formData.service}
//                     onValueChange={(value) =>
//                       setFormData({ ...formData, service: value })
//                     }
//                   >
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select a service" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="podcast production">Podcast Production</SelectItem>
//                       <SelectItem value="recording sessions">
//                         Recording Sessions
//                       </SelectItem>
//                       <SelectItem value="rehearsal space">
//                         Rehearsal Space
//                       </SelectItem>
//                       <SelectItem value="music production">
//                         Music Production
//                       </SelectItem>
//                       <SelectItem value="music lessons">Music Lessons</SelectItem>
//                       <SelectItem value="karaoke">
//                         Karaoke Party Venue
//                       </SelectItem>
//                       <SelectItem value="music classes">Music Classes</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="message"
//                     className="block text-sm font-medium mb-2"
//                   >
//                     Message
//                   </label>
//                   <Textarea
//                     id="message"
//                     value={formData.message}
//                     onChange={(e) =>
//                       setFormData({ ...formData, message: e.target.value })
//                     }
//                     required
//                     rows={4}
//                   />
//                 </div>

//                 <Button type="submit" className="w-full" disabled={isSubmitting}>
//                   {isSubmitting ? "Redirecting..." : "Send Message"}
//                 </Button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


// adding open to call and email functionality


"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Construct WhatsApp URL with prefilled message
      const whatsappMessage = `Hi VL Studios, my name is ${formData.name}. I am interested in your ${formData.service} service. Here's my message: ${formData.message}. You can reach me at ${formData.email} or ${formData.phone}.`;
      const whatsappUrl = `https://wa.me/919742343464?text=${encodeURIComponent(
        whatsappMessage
      )}`;

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, "_blank");

      toast({
        title: "Message sent successfully",
        description: "Redirecting to WhatsApp.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <section className="relative h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">Get in touch with VL Studios</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Have questions about our services? Want to book a session? Fill
                out the form below and we'll get back to you as soon as
                possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <a 
                      href="tel:+919742343464"
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      +91 9742343464
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a 
                      href="mailto:vlmusicstudio@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      vlmusicstudio@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-muted-foreground mb-4">
                      1023 2nd floor, 80 Feet Rd, 1st Block Koramangala,
                      Koramangala, Bengaluru, Karnataka 560034
                    </p>
                    <div className="w-full h-48 rounded-lg overflow-hidden">
                      <iframe
                        // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.389708275254!2d77.63399631482233!3d12.934490190886972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c505000001%3A0x6c13d32b5e6cc3c8!2sVL%20Studios!5e0!3m2!1sen!2sin!4v1646469125799!5m2!1sen!2sin"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15554.332720244018!2d77.633996!3d12.93449!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1463b50e50cf%3A0xef04b9a66ee0d686!2sVL%20Studios%20(Audio%20Recording%20Studio%20%26%20Jam%20Room)!5e0!3m2!1sen!2sin!4v1739462624866!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="VL Studios Location"
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                  >
                    Phone
                  </label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium mb-2"
                  >
                    Service Interested In
                  </label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) =>
                      setFormData({ ...formData, service: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="podcast production">Podcast Production</SelectItem>
                      <SelectItem value="recording sessions">
                        Recording Sessions
                      </SelectItem>
                      <SelectItem value="rehearsal space">
                        Rehearsal Space
                      </SelectItem>
                      <SelectItem value="music production">
                        Music Production
                      </SelectItem>
                      <SelectItem value="music lessons">Music Lessons</SelectItem>
                      <SelectItem value="karaoke">
                        Karaoke Party Venue
                      </SelectItem>
                      <SelectItem value="music classes">Music Classes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Redirecting..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}