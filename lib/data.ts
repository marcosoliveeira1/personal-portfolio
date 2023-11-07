import { ExperienceType } from "./types";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Sobre",
    hash: "#about",
  },
  {
    name: "Contato",
    hash: "#contact",
  },
] as const;

export const site = {
  title: 'Marcos.Oliveira',
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


export const experiences = [

  {

    "period": {
      "begin": "12/2022",
      "end": "09/2023"
    },

    "company": "Pappsales",

    "position": "Engenheiro de Software",

    "activities":
      "Desenvolvimento de front-end e back-end de aplicativos web na plataforma Salesforce, utilizando Apex e Lightning Web Components. Integração do Salesforce com ERPs como SAP, Sybiz e Everest, desenvolvendo soluções customizadas em Java e Spring Boot. Modelagem de bancos de dados relacionais em MySQL e PostgreSQL para suportar integrações. Aplicação de metodologias ágeis, refatoração de código e escrita de testes unitários.",

    "stack": [
      "Java",
      "Spring Boot",
      "MySQL",
      "Apex",
      "Lightning Web Components",
      "PostgreSQL"
    ]

  },

  {

    "period": {
      "begin": "11/2021",
      "end": "03/2023"
    },

    "company": "Veggi",

    "position": "Engenheiro de Software",

    "activities":
      "Desenvolvimento do painel administrativo em Node.js, Express e MongoDB. Integração do painel administrativo com APIs de entregas da Lalamove e Mottu. Otimização do serviço de busca utilizando Elasticsearch. Desenvolvimento de um scraper em Node.Js, AWS Lambda e Puppeteer para importação de cardápios do Ifood.",

    "stack": [
      "Node.js",
      "PHP",
      "React",
      "Serverless",
      "Express",
      "MongoDB",
      "AWS Lambda",
      "Elasticsearch"
    ]

  },

  {

    "period": {
      "begin": "12/2018",
      "end": "11/2021"
    },

    "company": "InCuca Tech",

    "position": "Desenvolvedor Full-stack",

    "activities":
      "Desenvolvimento de sistemas web customizados para clientes americanos em PHP, MySQL, JavaScript e CSS. Manutenção e otimização de sites WordPress aplicando boas práticas. Criação de temas e plugins customizados para WordPress.",

    "stack": [
      "PHP",
      "MySQL",
      "JavaScript",
      "CSS",
      "WordPress"
    ]

  },

  {

    "period": {
      "begin": "12/2016",
      "end": "12/2018"
    },

    "company": "Força Aérea Brasileira",

    "position": "Desenvolvedor Full-stack",

    "activities":
      "Participação no desenvolvimento de sistemas internos em ASP Clássico e PostgreSQL. Refatoração e integração de sistemas legados, entregando versões mais robustas. Modelagem de bancos de dados relacionais normalizados.",

    "stack": [
      "PHP",
      "JavaScript",
      "PostgreSQL",
      "ASP Clássico"
    ]

  }

] as ExperienceType[];