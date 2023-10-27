const developerSince = 2017;
const yearsDeveloping = () => {
    const currentYear = new Date().getFullYear();
    return currentYear - developerSince;
}

export const CONFIG = {
    site: {
        title: 'Marcos.Dev',
        description: 'Portfolio do desenvolvedor Marcos Oliveira',
        url: 'https://marcos.oliveira.software'
    },
    navbar: [
        {
            name: 'Home',
            url: '#'
        },
        {
            name: 'Sobre',
            url: '#about'
        },
        {
            name: 'Projetos',
            url: '#projects'
        },
        {
            name: 'Contato',
            url: '#contact'
        }
    ],
    contact: {
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
    },
    about: {
        developerSince,
        yearsDeveloping: yearsDeveloping(),
        locatedAt: 'Florianópolis/SC',
        description: 'Sou um desenvolvedor full-stack com experiência prática em desenvolvimento web desde 2017. \n Meu conjunto de habilidades abrange uma ampla variedade de tecnologias e ferramentas, incluindo Java, PHP, Node.js, TypeScript, JavaScript, React, Tailwind CSS, Bootstrap, Svelte, MongoDB, bancos de dados relacionais, Elasticsearch, arquitetura serverless e web scraping. Tenho uma base sólida em programação orientada a objetos, princípios de arquitetura limpa e ampla experiência na escrita de testes unitários. Git e Git flow são parte integrante do meu fluxo de trabalho. Tenho experiência em colaborar com equipes multidisciplinares e entregando aplicações web excepcionais que atendem aos mais altos padrões de qualidade, desempenho e escalabilidade.'
    }
}

