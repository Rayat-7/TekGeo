import React from 'react'
import ReactDOM from 'react-dom/client'
import EmblaCarousel from './ui/carousel'
import { EmblaOptionsType } from 'embla-carousel'
// import '../css/base.css'
// import '../css/sandbox.css'
// import '../css/embla.css'
import '../app/globals.css'
import { motion } from "framer-motion";


const OPTIONS: EmblaOptionsType = { loop: true }
// const SLIDE_COUNT = 5
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
const SLIDES = [
  { id: 1, title: "Slide 1", description: "Geofence-based Attendance", imageUrl: "https://www.youtube.com/embed/fIA1wtEF8Yc" },
  { id: 2, title: "Slide 2", description: "Access Control & Security", imageUrl: "https://www.youtube.com/embed/e56wGv6K8SI" },
  { id: 3, title: "Slide 3", description: "Fleet & Asset Management", imageUrl: "https://www.youtube.com/embed/KJz5f_9mV7E" },
  { id: 4, title: "Slide 4", description: "Buisiness Marketing & Management", imageUrl: "https://www.youtube.com/embed/iu8MoLlS_aI" },
  { id: 5, title: "Slide 5", description: "Customizable Geofencing Solutions", imageUrl: "https://www.youtube.com/embed/4CZ_1LHeBu8" }
];


export default function CarouselDemo() { 
  return(
  < >
    <div id="feature" className='p-10 mt-5 bg-gradient-to-t from-blue-300  to-slate-100'>
    {/* <div id="feature" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> */}
        <div className="lg:text-center mb-16">
          <motion.h2
            className="text-base bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600 via-blue-900 to-blue-400 bg-clip-text text-transparent font-semibold tracking-wide uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Features & Solutions
          </motion.h2>
          <motion.p
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight mb-1 sm:text-4xl bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600 via-blue-900 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Advanced Location-Based Technologies
          </motion.p>
        </div>

    <EmblaCarousel  slides={SLIDES} options={OPTIONS} />
    </div>
    
    
  </>
)}






{/*    
//     name: "Buisiness Marketing & Management",
//     description: "Competitor geofencing is a marketing strategy that has taken the business by storm.",
//     icon: Truck,
//     videoUrl: "https://www.youtube.com/embed/iu8MoLlS_aI"
//   },
//   {
//     name: "Fleet & Asset Management",
//     description: "Track vehicle and asset locations in real-time to optimize operations.",
//     icon: Truck,
//     videoUrl: "https://www.youtube.com/embed/e56wGv6K8SI"
//   },
 
//   {
//     name: "Customizable Geofencing Solutions",
//     description: "Design geofences tailored to your business requirements.",
//     icon: Ruler,
//     videoUrl: "https://www.youtube.com/embed/4CZ_1LHeBu8"
//   },{
//     name: "Real-time Tracking & Alerts",
//     description: "Monitor your assets and receive instant notifications for any movement.",
//     icon: Bell,
//     videoUrl: "https://www.youtube.com/embed/fIA1wtEF8Yc"
//   },
// ];

// export default function FeaturesSolutions() {
//   const [openDialog, setOpenDialog] = useState<string|null>(null);
  
//   return (
//     <div  className="py-24 bg-background relative overflow-hidden" id="features">
//       <div id="feature" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="lg:text-center">
//           <motion.h2
//             className="text-base bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600 via-blue-900 to-blue-400 bg-clip-text text-transparent font-semibold tracking-wide uppercase"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//           >
//             Features & Solutions
//           </motion.h2>
//           <motion.p
//             className="mt-2 text-3xl leading-8 font-extrabold tracking-tight mb-1 sm:text-4xl bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600 via-blue-900 to-blue-400 bg-clip-text text-transparent"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             Advanced Location-Based Technologies
//           </motion.p>
//         </div>

//         <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
//           {features.map((feature, index) => (
//             <Dialog key={feature.name} open={openDialog === feature.name} onOpenChange={(isOpen) => setOpenDialog(isOpen ? feature.name : null)}>
//               <DialogTrigger asChild>
//                 <motion.div
//                   className="relative p-6 bg-card shadow-[0px_0px_31px_0px_rgba(57,_72,_164,_0.9)] rounded-lg  cursor-pointer hover:shadow-xl transition-all"
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                   onClick={() => setOpenDialog(feature.name)}
//                 >
//                   <div className="absolute -top-6 left-6 p-3 bg-gradient-to-r from-blue-600 via-blue-900 to-blue-400 text-primary-foreground rounded-full">
//                     <feature.icon className="h-6 w-6" aria-hidden="true" />
//                   </div>
//                   <p className="mt-8 text-lg leading-6 font-medium text-foreground">{feature.name}</p>
//                   <p className="mt-2 text-base text-muted-foreground">{feature.description}</p>
//                   <Button className="relative bg-transparent hover:bg-transparent  w-full  " variant="ghost">
//                     <ArrowRight className="absolute right-0"></ArrowRight>
//                   </Button>
//                 </motion.div>
//               </DialogTrigger>

//               <DialogContent>
//                 <DialogHeader>
//                   <DialogTitle>{feature.name}</DialogTitle>
//                   <DialogDescription>
//                     Learn more about {feature.name} and how it can benefit your organization.
//                   </DialogDescription>
//                 </DialogHeader>
//                 <div className="w-full h-64 border-4 border-gradient-to-r from-blue-500 to-blue-700 rounded-lg overflow-hidden">
//                   <iframe
//                     width="100%"
//                     height="100%"
//                     src={feature.videoUrl}
//                     title="Feature Video"
//                     allowFullScreen
//                   ></iframe>
//                 </div>
//               </DialogContent>
//             </Dialog>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// } */}
