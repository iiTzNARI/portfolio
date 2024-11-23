"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/hooks/useLanguage";
import { Code2, Palette, Rocket } from "lucide-react";

export default function AboutPage() {
  const { t } = useLanguage();

  const skills = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: t.about.skills.development.title,
      description: t.about.skills.development.description,
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: t.about.skills.design.title,
      description: t.about.skills.design.description,
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: t.about.skills.performance.title,
      description: t.about.skills.performance.description,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-16"
      >
        <span className="gradient-text">{t.about.title}</span>
      </motion.h1>

      {/* Skills Section */}
      <section className="mb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-secondary/10 p-6 rounded-lg card-hover"
            >
              <div className="text-primary mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-300">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8"
        >
          {t.about.education.title}
        </motion.h2>
        {t.about.education.items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="bg-secondary/10 p-6 rounded-lg mb-6"
          >
            <div className="text-primary mb-2">{item.period}</div>
            <h3 className="text-xl font-semibold mb-2">{item.degree}</h3>
            <div className="text-gray-300 mb-2">{item.school}</div>
            <p className="text-gray-400">{item.description}</p>
          </motion.div>
        ))}
      </section>

      {/* Career Section */}
      <section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8"
        >
          {t.about.career.title}
        </motion.h2>
        {t.about.career.items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="bg-secondary/10 p-6 rounded-lg mb-6"
          >
            <div className="text-primary mb-2">{item.period}</div>
            <h3 className="text-xl font-semibold mb-2">{item.position}</h3>
            <div className="text-gray-300 mb-2">{item.company}</div>
            <p className="text-gray-400">{item.description}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
}