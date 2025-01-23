// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { cn } from "@/lib/utils";
// import { Music2Icon } from "lucide-react";

// export function Navigation() {
//   const pathname = usePathname();
  
//   const links = [
//     { href: "/", label: "Home" },
//     { href: "/podcast", label: "Podcast" },
//     { href: "/recording", label: "Recording Sessions" },
//     { href: "/rehearsal", label: "Rehearsal Space" },
//     { href: "/production", label: "Music Production" },
//     { href: "/lessons", label: "Music Lessons" },
//     { href: "/contact", label: "Contact" },
//   ];

//   return (
//     <nav className="border-b">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <Link href="/" className="flex items-center space-x-2">
//               <Music2Icon className="h-8 w-8 text-primary" />
//               <span className="font-bold text-xl">VL Studios</span>
//             </Link>
//           </div>
//           <div className="hidden sm:flex sm:items-center">
//             {links.map(({ href, label }) => (
//               <Link
//                 key={href}
//                 href={href}
//                 className={cn(
//                   "px-3 py-2 rounded-md text-sm font-medium transition-colors",
//                   pathname === href
//                     ? "text-primary bg-secondary"
//                     : "text-muted-foreground hover:text-primary hover:bg-secondary/50"
//                 )}
//               >
//                 {label}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

//using hamburger button in navigation

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Music2Icon, Menu, X } from "lucide-react";

export function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/booking", label: "Book Now" },
    { href: "/services", label: "Services Catalogue" },
    { href: "/podcast", label: "Podcast" },
    { href: "/recording", label: "Recording Sessions" },
    { href: "/rehearsal", label: "Rehearsal Space" },
    { href: "/production", label: "Music Production" },
    { href: "/lessons", label: "Music Lessons" },
    { href: "/contact", label: "Contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Music2Icon className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl">VL Studios</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  pathname === href
                    ? "text-primary bg-secondary"
                    : "text-muted-foreground hover:text-primary hover:bg-secondary/50"
                )}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="sm:hidden text-muted-foreground hover:text-primary focus:outline-none"
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white border-t">
          <ul className="flex flex-col space-y-1 px-4 py-2">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setIsMenuOpen(false)} // Close the menu on link click
                  className={cn(
                    "block px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    pathname === href
                      ? "text-primary bg-secondary"
                      : "text-muted-foreground hover:text-primary hover:bg-secondary/50"
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
