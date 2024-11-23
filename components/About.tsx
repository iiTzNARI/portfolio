"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/hooks/useLanguage";

const skills = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Development",
    description: "Expert in React, Next.js, TypeScript, and Node.js",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Design",
    description: "Creating beautiful and intuitive user interfaces",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Performance",
    description: "Building fast and optimized web applications",
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
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-secondary/10 p-6 rounded-lg card-hover"
            >
              <div className="text-primary mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-300">{skill.description}</p>
            </div>
          ))}
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
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}