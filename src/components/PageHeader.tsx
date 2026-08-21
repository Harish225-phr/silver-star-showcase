import { motion } from "framer-motion";

export function PageHeader({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative flex min-h-[60vh] items-end overflow-hidden pt-20">
      <motion.img
        src={image}
        alt={imageAlt}
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.77, 0, 0.175, 1] }}
        className="absolute inset-0 size-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="eyebrow mb-6 text-primary"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.77, 0, 0.175, 1] }}
          className="max-w-3xl font-serif text-5xl leading-[1] md:text-7xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 max-w-xl text-lg font-light leading-relaxed text-muted-foreground"
        >
          {intro}
        </motion.p>
      </div>
    </section>
  );
}
