"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/hooks/useLanguage";
import { Code2, Palette, Rocket } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const { t } = useLanguage();

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex-col"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-white"
          >
            Skills
          </motion.h2>
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
