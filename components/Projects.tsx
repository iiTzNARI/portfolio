"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/lib/hooks/useLanguage";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          <span className="gradient-text">{t.projects.title}</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.projects.details.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-secondary/10 rounded-lg overflow-hidden card-hover"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <Github size={20} />
                    {t.projects.viewCode}
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink size={20} />
                    {t.projects.viewDemo}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
