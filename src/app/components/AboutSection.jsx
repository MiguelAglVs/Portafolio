"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_CONTENT = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold mb-2">Frontend</h3>
          <ul className="text-base lg:text-lg">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold mb-2">Backend</h3>
          <ul className="text-base lg:text-lg">
            <li>Node.js</li>
            <li>Express</li>
            <li>Python</li>
            <li>Flask</li>
            <li>SQL</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div>
        <h3 className="text-2xl font-semibold mb-2">Educacion</h3>
        <ul className="text-base lg:text-lg">
          <li>Técnico Prof. en prog. de sistemas de información</li>
          <li>Politécnico Colombiano Jaime Isaza Cadavid</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <div>
        <h3 className="text-2xl font-semibold mb-2">Experiencia</h3>
        <ul className="text-base lg:text-lg">
          <li>Programador web</li>
          <li>Misioneros Urbanos de Jesucristo</li>
        </ul>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 ">
        <Image
		className="rounded-2xl"
          src={"/images/about-image.avif"}
          alt="About Image"
          width={500}
          height={500}
          priority
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Acerca de mí</h2>
          <p className="text-base lg:text-lg ">
            Soy Miguel Angel Vargas, un programador junior apasionado por el
            código limpio y eficiente. Estoy siempre listo para aprender y
            enfrentar nuevos desafíos. ¡Listo para contribuir al éxito de tu
            equipo!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handTabChange("skills")}
              active={tab === "skills"}
            >
              Habilidades
            </TabButton>
            <TabButton
              selectTab={() => handTabChange("education")}
              active={tab === "education"}
            >
              Educacion
            </TabButton>
            <TabButton
              selectTab={() => handTabChange("experience")}
              active={tab === "experience"}
            >
              Experiencia
            </TabButton>
          </div>
          <div className="mt-8">
            {isPending ? (
              <p>Loading...</p>
            ) : (
              <div className="text-base lg:text-lg">
                {TAB_CONTENT.find((t) => t.id === tab).content}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
