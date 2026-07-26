"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import HeroVideoBackground from "@/components/backgrounds/HeroVideoBackground";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-44 pb-28 lg:pt-52 lg:pb-36">
      <HeroVideoBackground />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          

          <h1 className="mt-7 text-balance font-display text-[2.75rem] font-semibold leading-[1.05] tracking-tight text-ink sm:text-[3.75rem] lg:text-[4.5rem]">
            Automate the busywork.
            <br />
            <span className="text-accent">Elevate</span> what your team does best.
          </h1>

          <p className="mt-7 max-w-xl text-balance text-lg leading-relaxed text-ink-soft sm:text-xl">
            GrowSpark designs and ships AI workflow automation, agents, and system integrations for enterprises that refuse to slow down.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Button href="/contact" size="lg">
              Book a discovery call
            </Button>
            <Button href="#automation-examples" size="lg" variant="secondary" icon={false}>
              View automation examples
            </Button>
          </div>

          <p className="mt-6 text-sm text-ink-faint">Typical response: 1 business day</p>
        </motion.div>
      </Container>
    </section>
  );
}
