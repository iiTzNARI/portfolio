"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/hooks/useLanguage";
import Image from "next/image";

const skills = [
  {
    iconSrc: "/html-5-svgrepo-com.svg",
  },
  {
    iconSrc: "/css-3-svgrepo-com.svg",
  },
  {
    iconSrc: "/javascript-svgrepo-com.svg",
  },
  {
    iconSrc: "/typescript-svgrepo-com.svg",
  },
  {
    iconSrc: "/java-svgrepo-com.svg",
  },
  {
    iconSrc: "/node-js-svgrepo-com.svg",
  },
  {
    iconSrc: "/react-svgrepo-com.svg",
  },
  {
    iconSrc: "/nextjs-svgrepo-com.svg",
  },
  {
    iconSrc: "/github-svgrepo-com.svg",
  },
];

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          <span className="gradient-text">{t.about.title}</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex-col"
        >
          <div className="text-xl md:text-2xl font-bold p-5">
            <span className="text-white">Skills</span>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12 p-3 bg-secondary/10 rounded-lg">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center justify-center rounded-lg p-2"
              >
                <Image
                  src={skill.iconSrc}
                  alt={`Skill ${index + 1}`}
                  width={128}
                  height={128}
                  style={{ width: "16", height: "16" }}
                  className="object-contain "
                />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
          >
            More Info
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
