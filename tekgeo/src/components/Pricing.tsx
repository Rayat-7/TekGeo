"use client"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const plans = [
  {
    name: "Basic TEKGEO",
    price: "$29",
    bg:"bg-gradient-to-t from-green-200  to-white",
    features: ["5 geofences", "Real-time tracking", "Basic analytics", "Email notifications"],
  },
  {
    name: "Advanced TEKGEO",
    price: "$99",
    bg:"bg-gradient-to-b from-blue-300  to-white",
    features: [
      "Unlimited geofences",
      "Real-time tracking & alerts",
      "Advanced analytics",
      "Custom zone integrations",
      "Priority support",
    ],
  },
  {
    name: "Enterprise TEKGEO",
    price: "Custom",
    bg:"bg-gradient-to-t from-green-200  to-white",
    features: [
      "Unlimited everything",
      "Dedicated account manager",
      "Custom feature development",
      "On-premise deployment",
      "API integrations",
    ],
  },
]

export default function Pricing() {
  return (
    <div id="pricing" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Add background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#ebf0f6] via-[#98ccd3] to-[#364e68] rounded-full"
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
          className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-[#25316d] via-[#5f6f94] to-[#97d2ec] rounded-full"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl mt-6 font-bold text-foreground sm:text-4xl">Flexible Pricing for Geofencing Solutions</h2>
          {/* <p className="mt-4 text-xl text-muted-foreground">Choose the plan that fits your geofencing needs</p> */}
        </motion.div>
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`border border-border rounded-lg shadow-sm divide-y divide-border ${plan.bg}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)" }}
              style={{
                borderImage: "linear-gradient(to right, #00b4d8, #8a2be2) 1", // Blue and Violet gradient border
              }}
            >
              <div className="p-4 ">
                <h3 className="text-lg font-medium text-foreground">{plan.name}</h3>
                <p className="mt-4 text-5xl font-extrabold text-foreground">{plan.price}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {plan.name === "Enterprise Geofencing" ? "Contact us for pricing" : "per month"}
                </p>
               
              </div>
              <div className="px-6 pt-6 pb-8">
                <h4 className="text-sm font-medium text-foreground tracking-wide uppercase">What's included</h4>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="h-6 w-6 text-green-500" aria-hidden="true" />
                      </div>
                      <p className="ml-3 text-sm text-muted-foreground">{feature}</p>
                    </li>
                  ))}
                </ul>
                <Button className="mt-6 w-32">{plan.name === "Enterprise Geofencing" ? "Contact sales" : "Get started"}</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
