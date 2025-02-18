"use client"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useEffect} from "react";
import { useRef } from "react";
import gsap from "gsap";
import { ChevronFirst } from "@/components/ui/ChevronFirst"

export default function Hero() {
    const part1 = useRef(null);
    const part2 = useRef(null);
    

    useEffect(() => {
        const tl = gsap.timeline();
    
        tl.fromTo(
          part1.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", delay:0.6 }
        )
        .fromTo(
          part2.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out",stagger:1  },
          "+=0.3"
        )
        
    }, []);

    return (
        <div className="bg-slate-200 py-16 md:py-64 h-85vh overflow-hidden relative flex items-center justify-center">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                        <motion.span
                            className="block mb-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            <h1 className="flex text-4xl justify-center underline bg-gradient-to-l from-sky-800 via-gray-950 to-black bg-clip-text text-transparent font-light mb-4">
                                TEKGEO
                            </h1>
                        </motion.span>
                        <motion.span
                            className="block mb-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            <div className="flex flex-col sm:flex-col items-center justify-center gap-2 sm:gap-[-1] text-2xl sm:text-3xl md:text-4xl lg:text-5xl capitalize">
                                <span ref={part1} className="block mr-28 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600 via-blue-900 to-blue-400 bg-clip-text text-transparent">
                                Smarter Locations
                                </span>
                                <span ref={part2} className="block ml-32 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600 via-blue-900 to-blue-400 bg-clip-text text-transparent">
                                Smarter Decisions.
                                </span>
                                
                            </div>
                        </motion.span>
                        <motion.span
                            className="text-lg sm:text-2xl font-semibold text-foreground"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            "From workforce tracking to asset management – one solution, endless possibilities."
                        </motion.span>
                    </h1>
                    <motion.p
                        className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        "From automated attendance to asset tracking and security, our geofencing technology provides location intelligence that enhances efficiency, safety, and decision-making."
                    </motion.p>
                    <motion.div
                        className="mt-6 sm:mt-10 flex  sm:flex-row gap-4 justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        <Button size="lg" className="w-24 sm:w-auto bg-gradient-to-r from-blue-600 via-blue-900 to-blue-400 hover:bg-blue-500 font-light">
                            Get Started
                        </Button>
                        <Button variant="outline" size="lg" className="w-24 font-light  sm:w-auto">
                            Learn More
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-[#6366f1] via-[#a5b4fc] to-[#e0e7ff]"
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
                    transition={{ duration: 100, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <motion.div
                    className="absolute -bottom-1/2 -right-1/2 bg-blue-300 w-full h-full rounded-full"
                    animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }}
                    transition={{ duration: 85, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <motion.div
                    className="absolute top-1/4 left-1/4 bg-blue-100 w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                    animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
                    transition={{ duration: 85, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-1/4 bg-blue-500 right-1/4 w-6 h-6 sm:w-8 sm:h-8 rounded-full"
                    animate={{ y: [0, 30, 0], x: [0, -30, 0] }}
                    transition={{ duration: 100, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                />
            </div>
            <div className="bg-gradient-to-b from-blue-200 to-white absolute bottom-0 left-0 w-full h-12"></div>
        </div>
    )
}












// "use client"
// import { Button } from "@/components/ui/button"
// import { motion } from "framer-motion"
// import { useEffect} from "react";
// import { useRef } from "react";
// import gsap from "gsap";
// import {ChevronFirst} from "@/components/ui/ChevronFirst"

// export default function Hero() {
//     const part1 = useRef(null);
//   const part2 = useRef(null);
//   const part3 = useRef(null);

//     useEffect(() => {
//         const tl = gsap.timeline();
    
//         tl.fromTo(
//           part1.current,
//           { opacity: 0, y: 30 },
//           { opacity: 1, y: 0, duration: 0.8, ease: "power2.out",delay:0.6 }
//         )
//           .fromTo(
//             part2.current,
//             { opacity: 0, y: 30 },
//             { opacity: 1, y: 0, duration: 0.8, ease: "power2.out",delay:0},
//             "+=0.3"
//           )
//           .fromTo(
//             part3.current,
//             { opacity: 0, y: 30 },
//             { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
//             "+=0.3"
//           );
//       }, []);
//   return (
//     <div className="bg-slate-200 py-20 md:py-64 sm:py-64 h-screen overflow-hidden relative">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center max-w-4xl mx-auto"
//         >
//           <h1 className="text-4xl  md:text-5xl  lg:text-5xl  font-bold tracking-tight">
//           <motion.span
//               className=" block mb-2 "
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2, duration: 0.8 }}
//             ><h1 className="flex justify-center  underline bg-gradient-to-l from-sky-800 via-gray-950 to-black bg-clip-text text-transparent font-extralight mb-4">TEKGEO</h1></motion.span>
//             <motion.span
//               className=" block mb-2"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2, duration: 0.8 }}
//             >
//                <div className="flex items-center lg:text-5xl capitalize justify-center gap-4 ">
//                <span ref={part1} className="block bg-gradient-to-tl from-blue-600 via-blue-600 to-blue-600 bg-clip-text text-transparent">No cards </span>
//         <span ref={part2} className="block bg-gradient-to-tl from-blue-600 via-blue-700 to-blue-600 bg-clip-text text-transparent"> No Scans </span>
//         <span ref={part3} className="block bg-gradient-to-tl from-blue-600 via-sky-600 to-blue-600 bg-clip-text text-transparent">No delays.</span>
//                </div>
        
//             </motion.span>
//             <motion.span
//               className="text-foreground font-semibold"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4, duration: 0.8 }}
//             >
//               Just real-time, location-based attendance
//             </motion.span>
//           </h1>
//           <motion.p
//             className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6, duration: 0.8 }}
//           >
//             "Smart attendance for smarter workplaces.
// Accurate, automated, and effortlessly integrated.
// Boost efficiency while eliminating manual tracking hassles with ease."
//           </motion.p>
//           <motion.div
//             className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.8, duration: 0.8 }}
//           >
//             <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500">
//               Get Started
//             </Button>
//             <Button variant="outline" size="lg" className="w-full sm:w-auto ">
//               Learn More
//             </Button>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {/* bg-primary/10 dark:bg-primary/20 */}
//         <motion.div
//           className="absolute -top-1/2 -left-1/2  w-full h-full  rounded-full  bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-[#6366f1] via-[#a5b4fc] to-[#e0e7ff]"
//           animate={{
//             scale: [1, 1.1, 1],
//             rotate: [0, 90, 0],
//           }}
//           transition={{
//             duration: 100,
//             repeat: Number.POSITIVE_INFINITY,
//             ease: "linear",
//           }}
//         />
//         {/* bg-secondary/10 dark:bg-secondary/20 */}
//         <motion.div
//           className="absolute -bottom-1/2 -right-1/2 bg-blue-300 w-full h-full  rounded-full"
//           animate={{
//             scale: [1, 1.2, 1],
//             rotate: [0, -90, 0],
//           }}
//           transition={{
//             duration: 85,
//             repeat: Number.POSITIVE_INFINITY,
//             ease: "linear",
//           }}
//         />
//         {/* bg-blue-900/20 dark:bg-primary/30 */}
//         <motion.div
//           className="absolute top-1/4 left-1/4 bg-slate-100 w-12 h-12  rounded-full"
//           animate={{
//             y: [0, -20, 0],
//             x: [0, 20, 0],
//           }}
//           transition={{
//             duration: 85,
//             repeat: Number.POSITIVE_INFINITY,
//             ease: "easeInOut",
//           }}
//         />
//          {/* bg-secondary/20 dark:bg-secondary/30 */}
//         <motion.div
//           className="absolute bottom-1/4 bg-blue-500 right-1/4 w-8 h-8 rounded-full"
//           animate={{
//             y: [0, 30, 0],
//             x: [0, -30, 0],
//           }}
//           transition={{
//             duration: 100,
//             repeat: Number.POSITIVE_INFINITY,
//             ease: "easeInOut",
//           }}
//         />
//       </div>
//     </div>
//   )
// }

