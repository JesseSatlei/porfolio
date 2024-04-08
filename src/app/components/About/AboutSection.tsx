"use client"
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "../Utils/TabButton";

interface TabData {
  title: string;
  id: string;
  content: React.ReactNode;
}

const TAB_DATA: TabData[] = [
  {
    title: "Habilidades",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js - Nestjs e Koa</li>
        <li>Php - Laravel</li>
        <li>Python - Django</li>
        <li>Golang</li>
        <li>Gitflow</li>
        <li>Bancos - Mysql, PostgreSQL, MongoDb</li>
        <li>Docker</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Educação",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Analise e Desenvolvimento de Sistemas - Faculdade de Tecnologia de Franca</li>
      </ul>
    ),
  },
  {
    title: "Cursos",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>SOLID - Os 5 princípios para as boas práticas da POO - Udemy</li>
        <li>NestJS: Criando uma Api Rest com Typescript - Alura</li>
        <li>Conceitos Básicos de Agilidade - Diwe</li>
      </ul>
    ),
  },
];

const AboutSection: React.FC = () => {
  const [tab, setTab] = useState<string>("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-16">
        <Image src="/images/AboutImage.png" className="rounded-[12px]" width={500} height={500} alt={"Sobre mim"} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre Mim</h2>
          <p className="text-white texxt-base md:text-lg">
            Minha especialização inclui trabalhar com NodeJS, Golang, Git, APIs REST, padrões de projeto e bancos de dados relacionais como MySQL e PostgreSQL, entre outros. Além disso, tenho experiência em frameworks como NestJS e Koa, e estou constantemente buscando aprender novas tecnologias para oferecer soluções eficazes aos clientes.
          </p>
          <div className="flex flex-row justify-start mt-8">
            {TAB_DATA.map((tabData) => (
              <TabButton
                key={tabData.id}
                selectTab={() => handleTabChange(tabData.id)}
                active={tab === tabData.id}
              >
                {tabData.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
