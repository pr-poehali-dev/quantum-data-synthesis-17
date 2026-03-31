import { motion } from "framer-motion"

const portfolioItems = [
  "https://cdn.poehali.dev/projects/50c38ed4-8790-489b-ae26-cb8ef0446ac5/files/35e36620-36e1-4b2e-93e0-140955597294.jpg",
  "https://cdn.poehali.dev/projects/50c38ed4-8790-489b-ae26-cb8ef0446ac5/files/3f190f01-0441-4a9e-9e5e-cf15405581f6.jpg",
  "https://cdn.poehali.dev/projects/50c38ed4-8790-489b-ae26-cb8ef0446ac5/files/28327f76-d973-4edc-b459-374751cd8bbd.jpg",
  "https://cdn.poehali.dev/projects/50c38ed4-8790-489b-ae26-cb8ef0446ac5/files/35e36620-36e1-4b2e-93e0-140955597294.jpg",
  "https://cdn.poehali.dev/projects/50c38ed4-8790-489b-ae26-cb8ef0446ac5/files/28327f76-d973-4edc-b459-374751cd8bbd.jpg",
  "https://cdn.poehali.dev/projects/50c38ed4-8790-489b-ae26-cb8ef0446ac5/files/3f190f01-0441-4a9e-9e5e-cf15405581f6.jpg",
]

export function CarouselSection() {
  // Duplicate for seamless loop
  const items = [...portfolioItems, ...portfolioItems]

  return (
    <section className="bg-primary py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-primary-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Эмоции, которые останутся навсегда.
        </motion.h2>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {items.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[300px] md:w-[400px] rounded-xl overflow-hidden shadow-2xl"
              data-clickable
            >
              <img
                src={src || "/placeholder.svg"}
                alt={`Пример портфолио ${(i % portfolioItems.length) + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}