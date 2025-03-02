'use client';

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { MapPin, Menu, X } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';
import TekGeoLogo from './ui/tekgeoLogo';
import { useEffect, useState } from 'react';

const features = [
  {
    title: 'Geofence-based Attendance',
    href: '/#feature',
    description: 'Automated attendance tracking with precise geofencing',
  },
  {
    title: 'Real-time Tracking & Alerts',
    href: '/#feature',
    description: 'Monitor location and receive instant notifications',
  },
  {
    title: 'Access Control & Security',
    href: '/#feature',
    description: 'Secure access management and monitoring',
  },
  {
    title: 'Fleet & Asset Management',
    href: '/#feature',
    description: 'Comprehensive fleet tracking and optimization',
  },
];

const solutions = [
  {
    title: 'Businesses',
    href: '/#feature',
    description: 'Employee attendance and security management',
  },
  {
    title: 'Logistics',
    href: '/#feature',
    description: 'Fleet tracking and route optimization',
  },
  {
    title: 'Education',
    href: '/#feature',
    description: 'Student tracking and school bus monitoring',
  },
  {
    title: 'Healthcare',
    href: '/#feature',
    description: 'Patient tracking and quarantine management',
  },
];

const resources = [
  {
    title: 'Blog',
    href: '/#blog',
    description: 'Latest updates and industry insights',
  },
  {
    title: 'Case Studies',
    href: '/#blog',
    description: 'Success stories from our clients',
  },
  {
    title: 'Documentation',
    href: '/#blog',
    description: 'Detailed guides and API documentation',
  },
];

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const [isScrolled ,setIsScrolled]=useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed left-0 right-0  z-40 mx-auto max-w-[1728px] px-4 mt-0.5 ${
      isScrolled ? 'top-0 ' : 'top-3'
    }`}>
      <nav className="flex items-center justify-between rounded-full shadow-lg px-6 py-4 bg-gradient-to-l from-blue-400 via-blue-100 to-blue-300">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <TekGeoLogo />
          </Link>
        </div>

        <div className="hidden items-center space-x-8 md:flex">
          <NavigationMenu>
            <NavigationMenuList className="space-x-8">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base font-medium text-muted-foreground hover:text-foreground bg-transparent">
                  Features
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex flex-col w-[250px] gap-2 p-2 md:w-[250px] md:grid-cols-2">
                    {features.map((feature) => (
                      <ListItem
                        key={feature.title}
                        title={feature.title}
                        href={feature.href}
                      >
                        
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              </NavigationMenuList>
              </NavigationMenu>




              <NavigationMenu>
              <NavigationMenuList className="space-x-8">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground hover:bg-transparent hover:text-foreground bg-transparent">
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex-col w-[200px] gap-3 p-4 md:w-[200px] md:grid-cols-2">
                    {solutions.map((solution) => (
                      <ListItem
                        key={solution.title}
                        title={solution.title}
                        href={solution.href}
                      >
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              </NavigationMenuList>
              </NavigationMenu>

        <NavigationMenu >
          <NavigationMenuList>
              <NavigationMenuItem className=''>
                <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-transparent bg-transparent">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-1 p-3 ">
                    {resources.map((resource) => (
                      <ListItem
                      className='bg-blue-400 hover:bg-red-700'
                        key={resource.title}
                        title={resource.title}
                        href={resource.href}
                      >
                        
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              </NavigationMenuList>
              </NavigationMenu>
              <Link className="text-sm mt-1 text-slate-600 font-light  hover:text-foreground" href="/#pricing" >
              Pricing
                </Link>
              
                <Link className="text-sm mt-1 text-slate-600 font-light  hover:text-foreground" href="#Footer" >
                    Contact
                </Link>
              
          
        </div>

         <div className="flex items-center hover:underline text-sm text-slate-900 space-x-4">
          <Link href="/pages/login">
          <Button className="rounded-full text-sm md:text-base px-3 md:px-4 py-1 md:py-2 bg-gradient-to-r from-blue-600 via-blue-900 to-blue-600">
          Sign In
          </Button>
          </Link>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6 mr-8" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] p-0">
              <div className="bg-sky-100 min-h-screen p-6">
                <div className="flex justify-end mb-6">
                  {/* <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                    </Button>
                  </SheetClose> */}
                </div>
                <nav className="flex flex-col gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Features</h3>
                    <div className="flex flex-col space-y-2">
                      {features.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="text-muted-foreground hover:text-foreground transition-colors p-2"
                          onClick={() => setOpen(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Solutions</h3>
                    <div className="flex flex-col space-y-2">
                      {solutions.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="text-muted-foreground hover:text-foreground transition-colors p-2"
                          onClick={() => setOpen(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Resources</h3>
                    <div className="flex flex-col space-y-2">
                    {/* hover:text-white bg-gradient-to-r from-blue-600 via-blue-900 to-blue-600 transition-colors p-2 mr-6 */}
                      {resources.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className=""
                          onClick={() => setOpen(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    {/* <Link
                      href="/blog"
                      className="block text-lg font-semibold hover:text-foreground transition-colors p-2"
                      onClick={() => setOpen(false)}
                    >
                      Blog
                    </Link> */}
                    <Link
                      href="/pricing"
                      className="block text-lg font-semibold hover:text-foreground transition-colors p-2"
                      onClick={() => setOpen(false)}
                    >
                      Pricing
                    </Link>
                    <Link
                      href="/contact"
                      className="block text-lg font-semibold hover:text-foreground transition-colors p-2"
                      onClick={() => setOpen(false)}
                    >
                      About Us
                    </Link>
                  </div>
                  <div className="flex flex-col leading-tight font-semibold hover:underline gap-3 mt-4">
                    <Button variant="outline" onClick={() => setOpen(false)}>
                      <p className='font-semibold hover:underline'>Sign In</p>
                    </Button>
                    <Link href="#pricing">
                    <Button className=' bg-gradient-to-r from-blue-600 via-blue-900 to-blue-400 hover:text-sm' >
                       Get Started →
                    </Button>
                    </Link>
                  </div>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors  hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});











// 'use client';

// import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
// import { Button } from '@/components/ui/button';
// import { MapPin, Menu } from 'lucide-react';
// import Link from 'next/link';
// import * as React from 'react';
// import TekGeoLogo from './ui/tekgeoLogo';

// const features = [
//   {
//     title: 'Geofence-based Attendance',
//     href: '/features/attendance',
//     description: 'Automated attendance tracking with precise geofencing',
//   },
//   {
//     title: 'Real-time Tracking & Alerts',
//     href: '/features/tracking',
//     description: 'Monitor location and receive instant notifications',
//   },
//   {
//     title: 'Access Control & Security',
//     href: '/features/security',
//     description: 'Secure access management and monitoring',
//   },
//   {
//     title: 'Fleet & Asset Management',
//     href: '/features/fleet',
//     description: 'Comprehensive fleet tracking and optimization',
//   },
// ];

// const solutions = [
//   {
//     title: 'For Businesses',
//     href: '/solutions/business',
//     description: 'Employee attendance and security management',
//   },
//   {
//     title: 'For Logistics',
//     href: '/solutions/logistics',
//     description: 'Fleet tracking and route optimization',
//   },
//   {
//     title: 'For Education',
//     href: '/solutions/education',
//     description: 'Student tracking and school bus monitoring',
//   },
//   {
//     title: 'For Healthcare',
//     href: '/solutions/healthcare',
//     description: 'Patient tracking and quarantine management',
//   },
// ];

// const resources = [
//   {
//     title: 'Blog',
//     href: '/blog',
//     description: 'Latest updates and industry insights',
//   },
//   {
//     title: 'Case Studies',
//     href: '/case-studies',
//     description: 'Success stories from our clients',
//   },
//   {
//     title: 'Documentation',
//     href: '/docs',
//     description: 'Detailed guides and API documentation',
//   },
// ];

// export default function Header() {
//   return (
//     <header className="fixed left-0 right-0 top-0 z-40 mt-3 mx-auto max-w-[1728px] px-4 py-2 ">
//       <nav className="flex items-center justify-between rounded-full shadow-lg px-6 py-4 bg-gradient-to-l from-blue-400 via-white to-blue-200">
//         <div className="flex items-center">
//           <Link href="/" className="flex items-center space-x-2">
//           <TekGeoLogo/>
//           </Link>
//         </div>

//         <div className="hidden items-center space-x-8 md:flex">
//           <NavigationMenu>
//             <NavigationMenuList className="space-x-8">
//               <NavigationMenuItem>
//                 <NavigationMenuTrigger className=" text-sm font-medium text-muted-foreground hover:text-foreground bg-transparent">
//                   Features
//                 </NavigationMenuTrigger>
//                 <NavigationMenuContent>
//                   <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
//                     {features.map((feature) => (
//                       <ListItem
//                         key={feature.title}
//                         title={feature.title}
//                         href={feature.href}
//                       >
//                         {feature.description}
//                       </ListItem>
//                     ))}
//                   </ul>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>

//               <NavigationMenuItem>
//                 <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground bg-transparent">
//                   Solutions
//                 </NavigationMenuTrigger>
//                 <NavigationMenuContent>
//                   <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
//                     {solutions.map((solution) => (
//                       <ListItem
//                         key={solution.title}
//                         title={solution.title}
//                         href={solution.href}
//                       >
//                         {solution.description}
//                       </ListItem>
//                     ))}
//                   </ul>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>

//               <NavigationMenuItem>
//                 <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground bg-transparent">
//                   Resources
//                 </NavigationMenuTrigger>
//                 <NavigationMenuContent>
//                   <ul className="grid w-[400px] gap-3 p-4">
//                     {resources.map((resource) => (
//                       <ListItem
//                         key={resource.title}
//                         title={resource.title}
//                         href={resource.href}
//                       >
//                         {resource.description}
//                       </ListItem>
//                     ))}
//                   </ul>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>

//               <NavigationMenuItem>
//                 <Link href="/pricing" legacyBehavior passHref>
//                   <NavigationMenuLink className="text-sm font-medium text-muted-foreground hover:text-foreground">
//                     Pricing
//                   </NavigationMenuLink>
//                 </Link>
//               </NavigationMenuItem>

//               <NavigationMenuItem>
//                 <Link href="/contact" legacyBehavior passHref>
//                   <NavigationMenuLink className="text-sm font-medium text-muted-foreground hover:text-foreground">
//                     Contact
//                   </NavigationMenuLink>
//                 </Link>
//               </NavigationMenuItem>
//             </NavigationMenuList>
//           </NavigationMenu>
//         </div>

//         <div className="flex items-center space-x-4">
//           <Button variant="ghost" className="hidden md:inline-flex">
//             Sign In
//           </Button>
//           <Button className="rounded-full">
//             Get Started →
//           </Button>
//           <Button variant="ghost" size="icon" className="md:hidden">
//             <Menu className="h-6 w-6" />
//           </Button>
//         </div>
//       </nav>
//     </header>
//   );
// }

// const ListItem = React.forwardRef<
//   React.ElementRef<'a'>,
//   React.ComponentPropsWithoutRef<'a'>
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
//           {...props}
//         >
//           <div className="text-sm font-medium leading-none">{title}</div>
//           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//             {children}
//           </p>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   );
// });