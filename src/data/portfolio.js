const projects = [
    {
        id: 4,
        title: 'Pampa Hard Seltzer',
        categories: ['SASS', 'HUGO', 'FORESTRY'],
        slug: 'pampa-hard-seltzer',
        thumbnail: '/assets/img/slider/phs.png',
        background: '/assets/img/slider/slide-1.jpg',
        date: '2020',
        link: {
            url: "https://pampahardseltzer.com/",
            label: "Visiter PampaHardSeltzer.com"
        },
        repo: {
            url: "https://github.com/PM-GROUPE/pampaseltzer",
            private: false,
            label: "Github",
        },
        details : {
            introduction: 
            `Pampa Hard Seltzer est une boisson alcoolisée lancée en 2020 en partenariat avec la brasserie La Gorge Fraîche. 
            <br><br> 
            Après avoir créé l'identité graphique j'ai été chargé de mettre en place le site internet. Le front est réalisé avec le framework <span class="bold">Hugo</span>, 
            le contenu est géré avec le <span class="bold">CMS Forestry</span>, le tout déployé avec <span class="bold">Render</span>.`
        }
    },
    {
        id: 5,
        title: 'BRAVOGAMES',
        categories: ['HTML5', 'CSS3', 'BOOTSTRAP'],
        slug: 'bravogames',
        thumbnail: '/assets/img/slider/bravogames.png',
        background: '/assets/img/slider/slide-2.jpg',
        date: '2016 - 2022',
        link: {
            url: "https://www.bravospeed.com/",
            label: "Visiter Bravospeed.com"
        },
        repo: {
            url: "https://github.com/rdesitter/bravospeed",
            private: false,
            label: "Github",
        },
        details : {
            introduction: 
            `Bravogames est un éditeur de jeux mobiles tels que Bravoloto, Bravospeed, Bravonimo. Il permet de gagner des lots et de l'argent via des lotteries gratuites. <br><br> En tant que designer j'ai notemment eu pour mission de mettre en place les sites vitrines des différents jeux dont Bravospeed.`
        }
    },
    {
        id: 3,
        title: 'Ballman Project',
        categories: ['HTML5', 'SASS', 'JAVASCRIPT', 'BOOTSTRAP'],
        slug: 'ballman',
        thumbnail: '/assets/img/slider/ballman-preview.png',
        background: '/assets/img/slider/ballman-cover.jpg',
        date: 'Novembre 2021 - Janvier 2022',
        link: {
            url: "https://ballmanproject.io/",
            label: "Visiter BallmanProject.io"
        },
        repo: {
            url: "https://github.com/rdesitter/02-BALLMANProject",
            private: true,
            label: "Private repo",
        },
        details : {
            introduction: 
            `Le Ballman Project est né en novembre 2021 en partenariat avec Stanislas Wawrinka. <br> 
            Ce projet a pour but de créer un tournoi de tennis virtuel ouvert à tous les possesseurs de NFT BALLMAN.<br><br>
            J'ai eu l'occasion de réaliser tous les supports de communication dont le site vitrine du projet.`
        }
    },
    {
        id: 2,
        title: 'Lords of Meta',
        categories: ['HTML5', 'JAVASCRIPT', 'VUE', 'SASS'],
        slug: 'lords-of-meta',
        thumbnail: '/assets/img/slider/lordsofmeta-preview.png',
        background: '/assets/img/slider/lordsofmeta-cover.jpg',
        date: 'Février 2022 - Avril 2022',
        link: {
            url: "https://lordsofmeta.io/",
            label: "Visiter LordsOfMeta.io"
        },
        repo: {
            url: "https://github.com/PeteBore/weblom",
            private: true,
            label: "Private repo",
        },
        details : {
            introduction: 
            `Lords of Meta est un projet d'utilisation de NFT.<br><br>
            Via le site lordsofmeta.io, tout le monde peut réserver un bout de terrain quelque part dans le monde.<br>
            A la date de lancement, les propriétaires pourront sonder le sol pour découvrir des ressources et gagner des tokens ou des NFTs.<br><br>
            Réalisation des supports, et du front-end.
            `
        }
    },
    {
        id: 1,
        title: 'Transmission des savoirs',
        categories: ['ReactJS', 'REDUX', 'NodeJS', 'PostgreSQL'],
        slug: 'savoir',
        thumbnail: '/assets/img/slider/savoir-preview.png',
        background: '/assets/img/slider/savoir-cover.jpg',
        date: 'Septembre 2022',
        link: {
            url: "https://savoir.surge.sh/",
            label: "Voir le site"
        },
        repo: {
            url: "https://github.com/O-clock-Flamel/projet-11-transmission-des-savoirs-front",
            label: "Front-end",
            private: false,
        },
        back:  {
            url: "https://github.com/O-clock-Flamel/projet-11-transmission-des-savoirs-back",
            label: "Back-end",
            private: false,
        },
        details : {
            introduction: 
            `Projet de fin de formation chez O'Clock, l'application de transmission des savoirs est réalisée sur 1 mois en équipe réduite.<br><br>
            Il s'agit d'une plateforme ouverte à tous, centrée sur l'accessibilité, permettant l'échange de savoirs-faire par le biais de petites annonces.<br><br>
            Front : ReactJS / Redux / Sass / Axios<br>
            Back : NodeJs / Express / PostgreSQL / Nodemailer / JWT`
        }
    }
]

export default projects;
