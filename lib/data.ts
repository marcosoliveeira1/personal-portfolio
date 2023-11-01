import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const site = {
  title: 'Marcos.Dev',
  description: 'Portfolio do desenvolvedor Marcos Oliveira',
  url: 'https://marcos.oliveira.software'
} as const;

export const contact = {
  name: 'Marcos Oliveira',
  phone: '(48) 984032914',
  email: 'olv.marcos1@gmail.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/dev-marcos-oliveira/',
    github: 'https://github.com/marcosoliveeira1',
    whatsapp: 'http://api.whatsapp.com/send?phone=5548984032914',
    twitter: null,
    youtube: null,
    facebook: null
  }
} as const;
export const about = {
  developerSince: 2017,
  yearsDeveloping: new Date().getFullYear() - 2017,
  locatedAt: 'Florianópolis/SC',
  description: 'Sou um desenvolvedor full-stack com experiência prática em desenvolvimento web desde 2017. \n Meu conjunto de habilidades abrange uma ampla variedade de tecnologias e ferramentas, incluindo Java, PHP, Node.js, TypeScript, JavaScript, React, Tailwind CSS, Bootstrap, Svelte, MongoDB, bancos de dados relacionais, Elasticsearch, arquitetura serverless e web scraping. Tenho uma base sólida em programação orientada a objetos, princípios de arquitetura limpa e ampla experiência na escrita de testes unitários. Git e Git flow são parte integrante do meu fluxo de trabalho. Tenho experiência em colaborar com equipes multidisciplinares e entregando aplicações web excepcionais que atendem aos mais altos padrões de qualidade, desempenho e escalabilidade.'
} as const;
