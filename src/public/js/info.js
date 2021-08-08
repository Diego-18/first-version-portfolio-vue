new Vue({
    el: '#app',
    data: {
        name: 'Diego J.',
        lastName: 'Chavez Ch.',
        profession: `Ingeniero en Informática |
                     Desarrollador Web Fullstack |
                     Analista Digital`,
        phrase: '"La única forma de hacer un gran trabajo, es amar lo que haces."',
        author: 'Steve Jobs', 
        years: '2021',
        facebook: 'https://www.facebook.com/d.j.c.c.20',
        twitter: 'https://twitter.com/djchvz18',
        instagram: 'https://www.instagram.com/djchvz18',
        github: 'https://github.com/Diego-18',
        gitlab: 'https://gitlab.com/Diego-18',
        medium: 'https://diegochavez-dc.medium.com',
        hackerrank: 'https://www.hackerrank.com/ingdiegochavez18',
        email: 'ingdiegochavez18@gmail.com',
        linkedin: 'https://www.linkedin.com/in/diego-jose-chavez-chirinos-9a7034a6/',
        dribble: 'https://dribbble.com/diegochavez20',
        behance: 'https://www.behance.net/ingdiegoch1a44',
        whatsapp: 'https://wa.link/9nyu80',
        url: 'www.diegochavez-dc.com',
        phone: '+584125264207',
        show: false,

        name_contact: '',
        email_contact: '',
        phone_contact: '',
        message_contact: '',
        filterByTools: '',

        p1: 'Hola, trabajo como freelancer en desarrollos de software, apasionado por la creación de interfaces web. Capaz de utilizar herramientas y técnicas para recolectar datos, analizar, diseñar, desarrollar e implementar nuevos sistemas para automatizar procedimientos.',
        p2:'Asesoro a empresas a tener una mejor presencia digital y como mejorar su posicionamiento a nivel digital.',
        p3:'Aparte del desarrollo web tengo un blog donde disfruto el compartir contenido de valor en el área de programación, freelancer y marketing, utiles para desarrolladores, emprendedores.',
        stack: false,
        portfolio: false,
        contact: false,

        stack_front: true,
        frontend: [
            {
                name: 'html',
                style: 'color:#f16529;',
                icon: 'fab fa-html5',
                img: 'src/public/img/logos/html5.svg'
            },
            {
                name: 'CSS',
                style: 'color:#0170ba;',
                icon: 'fab fa-css3',
                img: 'src/public/img/logos/css-3.svg'
            },
            {
                name: 'Javascript',
                style: 'color:#ffe629; background-color:#2d2d2d;',
                icon: 'fab fa-js',
                img: 'src/public/img/logos/js.svg'
            },
            {
                name: 'Bootstrap',
                style: 'color:#563d7c;',
                icon: 'fab fa-bootstrap',
                img: 'src/public/img/logos/bootstrap-4.svg'
            },
            {
                name: 'Vue',
                style: 'color:#4fc08d;',
                icon: 'fab fa-vuejs',
                img: 'src/public/img/logos/vue.svg'
            },
        ],
        stack_back: true,
        backend: [
            {
                name: 'NodeJs',
                style: 'color:#43853d;',
                icon: 'fab fa-node',
                img: 'src/public/img/logos/nodejs.svg'
            },
            {
                name: 'php',
                style: 'color:#4f1379;',
                icon: 'fab fa-php',
                img: 'src/public/img/logos/php.svg'
            },
            {
                name: 'Java',
                style: 'color:#ED1C24;',
                icon: 'fab fa-java',
                img: 'src/public/img/logos/java.svg'
            }
        ],
        stack_tools: true,
        tools: [
            {
                name: 'Git',
                style: 'color:#f64e27;',
                icon: 'fab fa-git-alt',
                img: 'src/public/img/logos/git.svg'
            },
            {
                name: 'npm',
                style: 'color:#ED1C24;',
                icon: 'fab fa-npm',
                img: 'src/public/img/logos/npm.svg'
            },
            {
                name: 'yarn',
                style: 'color:#25799f;',
                icon: 'fab fa-yarn',
                img: 'src/public/img/logos/yarn.svg'
            },
            {
                name: 'docker',
                style: 'color:#0091e2;',
                icon: 'fab fa-docker',
                img: 'src/public/img/logos/docker.svg'
            },
            {
                name: 'Illustrator',
                style: 'color:#0091e2;',
                icon: 'fab fa-docker',
                img: 'src/public/img/logos/illustrator.svg'
            },
            {
                name: 'Photoshop',
                style: 'color:#0091e2;',
                icon: 'fab fa-docker',
                img: 'src/public/img/logos/photoshop.svg'
            }
        ],
        stack_server: true,
        server: [
            {
                name: 'Ubuntu',
                style: 'color:#e95420;',
                icon: 'fab fa-ubuntu',
                img: 'src/public/img/logos/ubuntu.svg'
            },
            {
                name: 'Fedora',
                style: 'color:#0069ff;',
                icon: 'fab fa-fedora',
                img: 'src/public/img/logos/fedora.svg'
            },
            {
                name: 'Windows',
                style: 'color:#0069ff;',
                icon: 'fab fa-windows',
                img: 'src/public/img/logos/windows.svg'
            }
        ],
        stack_bd: true,
        bd: [
            {
                name: 'Postgres',
                img: 'src/public/img/logos/postgresql.svg'
            },
            {
                name: 'MySQL',
                img: 'src/public/img/logos/mysql.svg'
            }
        ],

        stack_project: true,
        projects: [
            {
                name: 'Favorite Links',
                // img: 'background-image: url("src/public/img/projects/FL.png")',
                // img: 'src/public/img/projects/FL.png',
                img: 'src/public/img/logos/nodejs.svg',
                description: 'Es una aplicación que te permite gestionar tus links favoritos para acceder a ellos cuando lo necesites.',
                rol: 'Fullstack',
                code: true,
                gh:'https://github.com/Diego-18/FavoriteLinks',
                tools1: 'nodejs',
                tools2: '',
                tag:[
                    {
                        name:'Aplicación Web'
                    }
                ],
                tools:[
                    {
                        name: "CSS-3",
                        icon:'fab fa-css3-alt',
                        style:'color:#0170ba; margin-right:3%;',
                        img:''
                    },
                    {
                        name: "Bootstrap",
                        icon:'fab fa-bootstrap',
                        style:'color:#563d7c; margin-right:3%;',
                        img:''
                    },
                    {
                        name: "html5",
                        icon:'fab fa-html5',
                        style:'color:#f16529; margin-right:3%;',
                        img:''
                    },
                    {
                        name:"NodeJS",
                        icon:'fab fa-node-js',
                        style:'color:#68a063; margin-right:3%;',
                        img:''
                    }
                ]
            },
            {
                name: 'Social Link',
                // img: 'background-image: url("src/public/img/projects/sociallink.png")',
                // img: 'src/public/img/projects/sociallink.png',
                img: 'src/public/img/logos/vue.svg',
                description: 'Es un proyecto basado en el listado de enlace que ofrece la herramienta linktree.',
                rol: 'Front-End',
                demo_verify: true,
                demo:'https://social-link.diegochavez-dc.com/',
                code: true,
                gh:'https://github.com/Diego-18/social.link/',
                tools1: 'vuejs',
                tools2: '',
                tag:[
                    {
                        name:'Front-End'
                    }
                ],
                tools:[
                    {
                        name: "CSS-3",
                        icon:'fab fa-css3-alt',
                        style:'color:#0170ba; margin-right:3%;',
                        img:''
                    },
                    {
                        name: "html5",
                        icon:'fab fa-html5',
                        style:'color:#f16529; margin-right:3%;',
                        img:''
                    },
                    {
                        name:"VueJS",
                        icon:'fab fa-vuejs',
                        style:'color:#42b883; margin-right:3%;',
                        img:''
                    }
                ]
            },
            {
                name: 'KeyframesAnimations',
                // img: 'background-image: url("src/public/img/projects/image-2.jpeg")',
                // img: 'src/public/img/projects/image-2.jpeg',
                img: 'src/public/img/logos/css-3.svg',
                description: 'Librería con animacionaciones usables para elementos de un portal web.',
                rol: 'Front-End',
                demo_verify: true,
                demo:'https://keyframes-animations.netlify.app',
                code: true,
                gh:'https://github.com/Diego-18/KeyframesAnimations',
                tools1: 'css',
                tools2: '',
                tag:[
                    {
                        name:'Librería'
                    }
                ],
                tools:[
                    {
                        name: "html5",
                        icon:'fab fa-html5',
                        style:'color:#f16529; margin-right:3%;',
                        img:''
                    },
                    {
                        name: "CSS-3",
                        icon:'fab fa-css3-alt',
                        style:'color:#0170ba; margin-right:3%;',
                        img:''
                    }
                ]
            },
            {
                name: 'Photografic-Filter',
                // img: 'background-image: url("src/public/img/projects/image-2.jpeg")',
                // img: 'src/public/img/projects/image-2.jpeg',
                img: 'src/public/img/logos/css-3.svg',
                description: 'Librería con filtros usados en fotografías aplicables para mejores efectos a tus imágenes en tu sitio web.',
                rol: 'Front-End',
                demo_verify: true,
                demo:'https://diego-18.github.io/photografic-filter/',
                code: true,
                gh:'https://github.com/Diego-18/photografic-filter',
                tools1: 'css',
                tools2: '',
                tag:[
                    {
                        name:'Librería'
                    }
                ],
                tools:[
                    {
                        name: "html5",
                        icon:'fab fa-html5',
                        style:'color:#f16529; margin-right:3%;',
                        img:''
                    },
                    {
                        name: "CSS-3",
                        icon:'fab fa-css3-alt',
                        style:'color:#0170ba; margin-right:3%;',
                        img:''
                    }
                ]
            },
            {
                name: 'SYS-HUMAN',
                // img: 'background-image: url("src/public/img/projects/syshuman.png")',
                // img: 'src/public/img/projects/syshuman.png',
                img: 'src/public/img/logos/php.svg',
                description: 'Sistema para el control y cálculos de procesos en el área de RRHH.',
                rol: 'Full Stack',
                demo_verify: true,
                demo:'https://sys-human.diegochavez-dc.com/',
                code: false,
                gh:'',
                tools1: 'php',
                tools2: 'bootstrap',
                tag:[
                    {
                        name:'Sistema'
                    }
                ],
                tools:[
                    {
                        name:"php",
                        icon:'fab fa-php',
                        style:'color:#fff; margin-right:3%;',
                        img:''
                    },
                    {
                        name: "CSS-3",
                        icon:'fab fa-css3-alt',
                        style:'color:#0170ba; margin-right:3%;',
                        img:''
                    },
                    {
                        name: "html5",
                        icon:'fab fa-html5',
                        style:'color:#f16529; margin-right:3%;',
                        img:''
                    },
                    {
                        name: "Bootstrap",
                        icon:'fab fa-bootstrap',
                        style:'color:#563d7c; margin-right:3%;',
                        img:''
                    },
                    {
                        name:"Javascript",
                        icon:'fab fa-js',
                        style:'color:#ffe629; background-color: #2d2d2d; margin-right:3%;',
                        img:''
                    }
                ]
            },
            {
                name: 'SISCAS',
                // img: 'background-image: url("src/public/img/projects/syshuman.png")',
                // img: 'src/public/img/projects/sisca.png',
                img: 'src/public/img/logos/php.svg',
                description: 'Sistema para el control y gestión de almacenes y suministros.',
                rol: 'Full Stack',
                demo_verify: true,
                demo:'https://siscas.diegochavez-dc.com/',
                code: false,
                gh:'',
                tools1: 'php',
                tools2: 'bootstrap',
                tag:[
                    {
                        name:'Sistema'
                    }
                ],
                tools:[
                    {
                        name:"php",
                        icon:'fab fa-php',
                        style:'color:#fff; margin-right:3%;',
                        img:''
                    },
                    {
                        name: "CSS-3",
                        icon:'fab fa-css3-alt',
                        style:'color:#0170ba; margin-right:3%;',
                        img:''
                    },
                    {
                        name: "html5",
                        icon:'fab fa-html5',
                        style:'color:#f16529; margin-right:3%;',
                        img:''
                    },
                    {
                        name: "Bootstrap",
                        icon:'fab fa-bootstrap',
                        style:'color:#563d7c; margin-right:3%;',
                        img:''
                    },
                    {
                        name:"Javascript",
                        icon:'fab fa-js',
                        style:'color:#ffe629; background-color: #2d2d2d; margin-right:3%;',
                        img:''
                    }
                ]
            },
        ],

        form: false,
        services: [
            { 
                name: 'Desarrollo Web',
                icon: 'icon fa fa-desktop',
                description: 'Desarrollo de páginas y sistemas web para todo tipo de empresa o persona.' 
            },
            { 
                name: 'Marketing Digital',
                icon: 'icon fa fa-shopping-bag',
                description: `Creación y planificación de estrategias de Marketing, desarrollo y administración de páginas web
                 y redes sociales para la promoción y venta de productos o servicios.`
            }
        ]
    }, 
    methods: {
        sendMessage(){
            let name_contact = this.name_contact;
            let phone_contact = this.phone_contact;
            let email_contact = this.email_contact;
            let message_contact = this.message_contact;
        
            if (!name_contact=="" && !phone_contact=="" && !email_contact=="" && !message_contact==""){
                if(!this.validEmail(this.email_contact)){
                    Swal.fire({
                        icon: 'error',
                        title: '',
                        text: 'Introduzca un correo electrónico valido.'
                    });
                }
                else{
                    let data = {
                        from_name: name_contact,
                        from_email: email_contact,
                        from_phone: phone_contact,
                        from_message: message_contact,
                    };
                    
                    emailjs.send("service_6o9pu4t","template_m2q5azs", data).then(function(response) {
                        if(response.text === 'OK'){
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Su mensaje fue enviado correctamente, pronto me pondré en contacto con usted.',
                                showConfirmButton: false
                                // timer: 2000
                            });
                        }
                    }, function(err) {
                        Swal.fire({
                          icon: 'error',
                          title: '',
                          text: 'Ocurrió un problema al enviar el mensaje. Vuelva a intentarlo.'
                        });
                    });
                }
            } 
            else{
                Swal.fire({
                    icon: 'error',
                    title: '',
                    text: 'Existe algún campo vació. Llena todos los campos y vuelve a intentarlo.'
                }); 
            }
            this.name_contact = '',
            this.phone_contact = '',
            this.email_contact = '',
            this.message_contact = '';
        },
        validEmail: function (p_email) {
            let patterEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return patterEmail.test(p_email);
        }
    },
    computed:{
        filterTools(){
            return this.projects.filter(u => u.tools1.includes(this.filterByTools) || u.tools2.includes(this.filterByTools) )
        }
    }
});
