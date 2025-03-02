'use client'

import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

interface VideoShowcaseProps {
  videoId?: string;
  title: string;
  description: string;
  features?: {
    title: string;
    description: string;
  }[];
}

export default function VideoShowcase({
  videoId,
  title,
  description,
  features = [
    {
      title: 'Real-time Tracking',
      description: 'Monitor your workforce location and attendance in real-time.',
    },
    {
      title: 'Smart Automation',
      description: 'Automate attendance and location-based tasks effortlessly.',
    },
    {
      title: 'Detailed Analytics',
      description: 'Get comprehensive insights into your workforce activities.',
    },
  ],
}: VideoShowcaseProps) {
  const isValidVideo = videoId && videoId.trim().length > 5; // Basic check

  return (
    <div id='blog' className="w-full px-6  ">
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center flex-col  items-center px-16 justify-center w-full gap-2"
      >
        <h2 className="text-3xl p-3 md:text-4xl font-bold mb-4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600 via-blue-900 to-blue-400 bg-clip-text text-transparent ">{title}</h2>
        <p className="text-2xl items-center text-center mb-6 text-black   ">
          {description}
        </p>
      </motion.div>

      {/* Video Showcase */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-5xl mx-auto"
      >
        <div className="relative aspect-video rounded-lg overflow-hidden">


             {/* Add background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-1/2 -right-1/4 w-1/2 h-1/2 bg-blue-400 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -left-1/4 w-1/2 h-1/2 bg-blue-400 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -45, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>
          {/* Gradient Border */}
          <div className="absolute inset-0 p-[4px] rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            <div className="relative w-full h-full rounded-lg bg-black">
              {isValidVideo ? (
                <iframe
                  className="absolute inset-0 w-full h-full rounded-lg"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="Video Showcase"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                // Placeholder if videoId is invalid or missing
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 group cursor-pointer">
                  <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-white fill-white" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Feature List */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12  shadow-[0px_0px_31px_0px_rgba(57,_72,_164,_0.9)] mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div> */}
      </motion.div>
    </div>
  );
}
