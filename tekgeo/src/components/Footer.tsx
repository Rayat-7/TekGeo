"use client";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import TekGeoLogo from "./ui/tekgeologoW";
import { useState } from "react";
import LoginPage from "@/app/pages/login/page";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Message sent from ${email}`);
  };

  return (
    <footer  className="bg-gradient-to-r bg-slate-900 text-white py-8">
      <div id="Footer" className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-3 grid grid-cols-1 md:grid-cols-5 gap-8 items-start border-slate-500 border-b mb-2">
        {/* Logo */}
        <div className="flex items-center h-44 w-32 justify-center">
          <TekGeoLogo />
        </div>

        {/* Links */}
        <div>
          <h3 className="text-sm font-semibold tracking-wider uppercase">Product</h3>
          <ul className="mt-4 text-xs space-y-5">
            <li><Link href="#" className="hover:underline">Features</Link></li>
            <li><Link href="#pricing" className="hover:underline">Pricing</Link></li>
            <li><Link href="#" className="hover:underline">Integrations</Link></li>
            <li><Link href="#" className="hover:underline">API</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wider uppercase">Company</h3>
          <ul className="mt-4 text-xs space-y-5">
            <li><Link href="#" className="hover:underline">About</Link></li>
            <li><Link href="#" className="hover:underline">Blog</Link></li>
            <li><Link href="#" className="hover:underline">Careers</Link></li>
            <li><Link href="#" className="hover:underline">Press</Link></li>
          </ul>
        </div>

       

        {/* Contact Form - Positioned Right */}
        <div className="md:col-span-1 w-full max-w-sm md:ml-auto">
          <h3 className="text-sm font-semibold text-center  md:text-left">Get in Touch</h3>
          <form onSubmit={handleSubmit} className="mt-4">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full  bg-transparent p-2 border border-gray-300 rounded-md text-sm"
              required
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full mt-4 p-2 border  bg-transparent border-gray-300 rounded-md text-sm"
              required
            ></textarea>
            <button type="submit" className="mt-4 w-full bg-gradient-to-r from-blue-600 via-blue-900 to-blue-600 text-white p-2 mb-6 rounded-md hover:bg-blue-800 text-sm">
              Send Message
            </button>
          </form>
        </div>
         {/* Contact Info */}
         <div className="ml-6">
          <h3 className="text-sm font-semibold tracking-wider uppercase">Contact</h3>
          <ul className="mt-3 text-sm ">
            <li>House-56, Road-16, sector-14 Uttara Dhaka 1230,Bangladesh</li>
            <li className="text-sm flex items-center space-x-2 mt-4">
              <Mail className="h-4 w-4 " />
              <span>info@teksoi.com</span>
            </li>
          </ul>
          <div className="flex space-x-4 mt-8">
            <Link href="#"><Facebook className="h-5 w-5" /></Link>
            <Link href="#"><Twitter className="h-5 w-5" /></Link>
            <Link href="#"><Instagram className="h-5 w-5" /></Link>
            <Link href="#"><Linkedin className="h-5 w-5" /></Link>
          </div>
        </div>
      </div>
      
      <p className=" px-32 text-base w-full text-muted-foreground  md:order-1">
          &copy; 2025 Tekgeo, Inc. All rights reserved. </p>
    </footer>
  );
}












// "use client"
// import Link from "next/link"
// import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
// import TekGeoLogo from "./ui/tekgeoLogo"

// export default function Footer() {
//   return (
//     <footer className="bg-background border-t border-border">
//       <div id="footer" className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//           <div>
//             <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Product</h3>
//             <ul className="mt-4 space-y-4">
//               <li>
//                 <Link href="#" className="text-base text-muted-foreground hover:text-foreground transition-colors">
//                   Features
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#pricing" className="text-base text-muted-foreground hover:text-foreground transition-colors">
//                   Pricing
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="text-base text-muted-foreground hover:text-foreground transition-colors">
//                   Integrations
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="text-base text-muted-foreground hover:text-foreground transition-colors">
//                   API
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Company</h3>
//             <ul className="mt-4 space-y-4">
//               <li>
//                 <Link href="#" className="text-base text-muted-foreground hover:text-foreground transition-colors">
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="text-base text-muted-foreground hover:text-foreground transition-colors">
//                   Blog
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="text-base text-muted-foreground hover:text-foreground transition-colors">
//                   Careers
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="text-base text-muted-foreground hover:text-foreground transition-colors">
//                   Press
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Legal</h3>
//             <ul className="mt-4 space-y-4">
//               <li>
//                 <Link href="#" className="text-base text-muted-foreground hover:text-foreground transition-colors">
//                   Privacy
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="text-base text-muted-foreground hover:text-foreground transition-colors">
//                   Terms
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="text-base text-muted-foreground hover:text-foreground transition-colors">
//                   Cookie Policy
//                 </Link>
//               </li>
//             </ul>
//             <div className=" w-48 mt-4 ml-64">
//             <TekGeoLogo/>
//         </div>
//           </div>
//         </div>
       
//         <div className="mt-4 border-t border-border pt-8 md:flex md:items-center md:justify-between">
//           <div className="flex space-x-6 md:order-2">
//             <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
//               <span className="sr-only">Facebook</span>
//               <Facebook className="h-6 w-6" />
//             </Link>
//             <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
//               <span className="sr-only">Twitter</span>
//               <Twitter className="h-6 w-6" />
//             </Link>
//             <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
//               <span className="sr-only">Instagram</span>
//               <Instagram className="h-6 w-6" />
//             </Link>
//             <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
//               <span className="sr-only">LinkedIn</span>
//               <Linkedin className="h-6 w-6" />
//             </Link>
//           </div>
//           <p className="mt-8 text-base text-muted-foreground md:mt-0 md:order-1">
//             &copy; 2025 Tekgeo, Inc. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   )
// }

