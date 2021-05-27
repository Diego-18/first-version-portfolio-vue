new Vue({
    el: '#app',
    data: {
        name: 'Diego J.',
        lastName: 'Chavez Ch.',
        profession: '💻 Ingeniero en Informatica | 💻 Desarrollador Web Fullstack | 💻 Analista Digital',
        phrase: '"Vive cada día como si fuera el último, porque un día tendrás razón"',
        author: 'Steve Jobs', 
        years: '2021',
        facebook: 'https://www.facebook.com/d.j.c.c.20',
        twitter: 'https://twitter.com/djchvz18',
        instagram: 'https://www.instagram.com/djchvz18',
        github: 'https://github.com/Diego-18',
        gitlab: 'https://gitlab.com/Diego-18',
        medium: 'https://diegochavez18.medium.com',
        hackerrank: 'https://www.hackerrank.com/ingdiegochavez18',
        email: 'ingdiegochavez18@gmail.com',
        linkedin: 'https://www.linkedin.com/in/diego-jose-chavez-chirinos-9a7034a6/',
        dribble: 'https://dribbble.com/diegochavez20',
        behance: '',
        from_name: '',
        from_email: '',
        from_phone: '',
        message: '',
        subject: '',
        show: false,

        description: `Hola, soy un desarrollador de software, apasionado por la creación y desarrollo de interfaces web. Capaz de utilizar herramientas y técnicas para recolectar datos, analizar, diseñar, desarrollar e implementar nuevos sistemas para automatizar procedimientos.`,
        objetives: [
            { objetive: 'Usar mis conocimientos como herramienta para crear soluciones tecnológicas en la medida de cualquier necesidad.' },
            { objetive: 'Contribuir en el avance y desarrollo de la presencia digital y posicionamiento de empresas y StartUp.' }
        ],

        stack_front: true,
        frontend: [
            {
                name: 'html-5',
                style: 'color:#f16529;',
                icon: 'fab fa-html5',
                img: 'https://image.flaticon.com/icons/png/512/1216/1216733.png'
            },
            {
                name: 'CSS',
                style: 'color:#0170ba;',
                icon: 'fab fa-css3',
                img: 'https://image.flaticon.com/icons/png/512/732/732190.png'
            },
            {
                name: 'Javascript',
                style: 'color:#ffe629; background-color:#2d2d2d;',
                icon: 'fab fa-js',
                img: 'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg'
            },
            {
                name: 'Bootstrap',
                style: 'color:#563d7c;',
                icon: 'fab fa-bootstrap',
                img: 'https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg'
            },
            {
                name: 'Vue',
                style: 'color:#4fc08d;',
                icon: 'fab fa-vuejs',
                img: 'https://cdn.worldvectorlogo.com/logos/vue-9.svg'
            },
        ],
        stack_back: true,
        backend: [
            {
                name: 'NodeJs',
                style: 'color:#43853d;',
                icon: 'fab fa-node',
                img: 'https://image.flaticon.com/icons/png/512/919/919825.png'
            },
            {
                name: 'npm',
                style: 'color:#ED1C24;',
                icon: 'fab fa-npm',
                img: 'https://cdn.worldvectorlogo.com/logos/npm.svg'
            },
            {
                name: 'yarn',
                style: 'color:#25799f;',
                icon: 'fab fa-yarn',
                img: 'https://cdn.worldvectorlogo.com/logos/yarn.svg'
            },
            {
                name: 'docker',
                style: 'color:#0091e2;',
                icon: 'fab fa-docker',
                img: 'https://cdn.worldvectorlogo.com/logos/docker.svg'
            },
            {
                name: 'php',
                style: 'color:#4f1379;',
                icon: 'fab fa-php',
                img: 'https://cdn.worldvectorlogo.com/logos/php.svg'
            },
            {
                name: 'Java',
                style: 'color:#ED1C24;',
                icon: 'fab fa-java',
                img: 'https://cdn.worldvectorlogo.com/logos/java-14.svg'
            }
        ],
        stack_tools: true,
        tools: [
            {
                name: 'Git',
                style: 'color:#f64e27;',
                icon: 'fab fa-git-alt',
                img: 'https://cdn.worldvectorlogo.com/logos/git-icon.svg'
            }
        ],
        stack_bd: true,
        stack_cloud: false,
        stack_server: true,
        server: [
            {
                name: 'Linux',
                style: 'color:#2d2d2d;',
                icon: 'fab fa-linux',
                img: 'https://cdn.worldvectorlogo.com/logos/linux-tux-2.svg'
            },
            {
                name: 'Ubuntu',
                style: 'color:#e95420;',
                icon: 'fab fa-ubuntu',
                img: 'https://cdn.worldvectorlogo.com/logos/ubuntu-4.svg'
            },
            {
                name: 'Fedora',
                style: 'color:#0069ff;',
                icon: 'fab fa-fedora',
                img: 'https://cdn.worldvectorlogo.com/logos/fedora-1.svg'
            },
            {
                name: 'Windows',
                style: 'color:#0069ff;',
                icon: 'fab fa-windows',
                img: 'https://cdn.worldvectorlogo.com/logos/microsoft-windows-22.svg'
            }
        ],
        bd: [
            {
                name: 'PostgreSQL',
                img: 'https://cdn.worldvectorlogo.com/logos/postgresql.svg'
            },
            {
                name: 'MySQL',
                img: 'https://cdn.worldvectorlogo.com/logos/mysql-6.svg'
            }
        ],

        academic: true,
        stack_academic: true,
        study:[
            {
                university: 'UPTP "Juan de Jesus Montilla"',
                profession: 'Ing. en Informatica',
                period: '2013 - 2019',
                img:'background-image: url("src/public/img/uptp.jpg")',
                study_country: 'Venezuela',
                icon_country: 'https://image.flaticon.com/icons/png/512/2412/2412432.png'
            }
        ],

        stack_courses: false,

        work: true,
        stack_work: true,
        work:[
            {
                company_name:'DW Comercializadora ',
                company_description: 'Galepso ERP',
                company_position: 'Coordinador de Soporte Tecnico',
                company_start: '2017',
                company_find: '2018',
                company_img: 'background-image: url("src/public/img/galepso1.jpg"); width: 100%;',
                company_country: 'Venezuela',
                icon_country: 'https://image.flaticon.com/icons/png/512/2412/2412432.png'
            },
            {
                company_name:'Las Plumas y Asociados C.A',
                company_description: '',
                company_position: 'Especialista en Sistemas de Información',
                company_start: '2018',
                company_find: 'Actualidad',
                company_img: 'background-image: url("src/public/img/lpa.jpg"); width: 100%;',
                company_country: 'Venezuela',
                icon_country: 'https://image.flaticon.com/icons/png/512/2412/2412432.png'
            },
        ],

        stack_project: true,
        project: true,
        projects: [
            {
                name: 'KeyframesAnimations',
                img: 'background-image: url("src/public/img/image-2.jpg")',
                description: 'Librería con animacionaciones usables en elementos de un portal web.',
                rol: 'Front-End',
                demo:'https://keyframes-animations.netlify.app',
                code: true,
                gh:'https://github.com/Diego-18/KeyframesAnimations',
                tag:[
                    {
                        name:'Librería'
                    }
                ],
                tools:[
                    {
                        icon:'fab fa-html5',
                        style:'color:#f16529;',
                        img:''
                    },
                    {
                        icon:'fab fa-css3-alt',
                        style:'color:#0170ba;',
                        img:''
                    }
                ]
            },

            {
                name: 'Photografic-Filter',
                img: 'background-image: url("src/public/img/image-2.jpg")',
                description: 'Librería con filtros usados en fotografías aplicables para mejores efectos en tus imágenes en tu sitio web.',
                rol: 'Front-End',
                demo:'https://diego-18.github.io/photografic-filter/',
                code: true,
                gh:'https://github.com/Diego-18/photografic-filter',
                tag:[
                    {
                        name:'Librería'
                    }
                ],
                tools:[
                    {
                        icon:'fab fa-html5',
                        style:'color:#f16529;',
                        img:''
                    },
                    {
                        icon:'fab fa-css3-alt',
                        style:'color:#0170ba;',
                        img:''
                    }
                ]
            },

            {
                name: 'SISCAS',
                img: 'background-image: url("src/public/img/sisca.png")',
                description: 'Sistema para el control y gestión de almacenes y suministros.',
                rol: 'Full Stack',
                demo:'https://siscas.diegochavez-dc.com/',
                code: false,
                gh:'',
                tag:[
                    {
                        name:'Sistema'
                    }
                ],
                tools:[
                    {
                        icon:'fab fa-php',
                        style:'color:#4f1379;',
                        img:''
                    },
                    {
                        icon:'fab fa-css3-alt',
                        style:'color:#0170ba;',
                        img:''
                    },
                    {
                        icon:'fab fa-html5',
                        style:'color:#f16529;',
                        img:''
                    },
                    {
                        icon:'fab fa-bootstrap',
                        style:'color:#563d7c;',
                        img:''
                    },
                    {
                        icon:'fab fa-js',
                        style:'color:#ffe629; background-color: #2d2d2d;',
                        img:''
                    }
                ]
            },
        ],

        services: [
            { 
                name: 'Desarrollo Web',
                icon: 'icon fa fa-desktop',
                description: 'Desarrollo de páginas y sistemas web para cualquier persona, empresa o estudiante.' 
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
            let data = {
                from_name: this.from_name,
                from_email: this.from_email,
                from_phone: this.from_phone,
                message: this.message,
                subject: this.subject,
            };
                        
            emailjs.send("service_6o9pu4t","template_m2q5azs", data).then(function(response) {
                if(response.text === 'OK'){
                    // alert('El correo se ha enviado de forma exitosa');
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Tu mensaje fué enviado correctamente, pronto me pondré en contacto con usted.',
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            }, function(err) {
                // alert('');
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Ocurrió un problema al enviar el mensaje. Vuelva a intentarlo.'
                  // footer: '<a href>Why do I have this issue?</a>'
                });
            });
        }
    }
});
