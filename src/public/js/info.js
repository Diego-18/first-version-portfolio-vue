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
        behance: 'https://www.behance.net/ingdiegoch1a44',
        whatsapp: 'https://wa.link/9nyu80',
        url: 'www.dev.diegochavez-dc.com',
        phone: '+584125264207',
        show: false,

        name_contact: '',
        email_contact: '',
        phone_contact: '',
        message_contact: '',

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
                img: 'https://image.flaticon.com/icons/png/512/528/528260.png'
            }
        ],

        academic: true,
        stack_academic: true,
        study:[
            {
                university: 'UPTP "Juan de Jesus Montilla"',
                profession: 'Ing. en Informatica',
                period: '2013 - 2019',
                img:'background-image: url("src/public/img/uptp.jpeg")',
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
                company_img: 'background-image: url("src/public/img/galepso1.jpeg"); width: 100%;',
                company_country: 'Venezuela',
                icon_country: 'https://image.flaticon.com/icons/png/512/2412/2412432.png'
            },
            {
                company_name:'Las Plumas y Asociados C.A',
                company_description: '',
                company_position: 'Especialista en Sistemas de Información',
                company_start: '2018',
                company_find: 'Actualidad',
                company_img: 'background-image: url("src/public/img/lpa.jpeg"); width: 100%;',
                company_country: 'Venezuela',
                icon_country: 'https://image.flaticon.com/icons/png/512/2412/2412432.png'
            },
        ],

        stack_project: true,
        project: true,
        projects: [
            {
                name: 'KeyframesAnimations',
                img: 'background-image: url("src/public/img/image-2.jpeg")',
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
                img: 'background-image: url("src/public/img/image-2.jpeg")',
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
                        name:"php",
                        icon:'fab fa-php',
                        style:'color:#4f1379; margin-right:3%;',
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
            let name_contact = this.name_contact;
            let phone_contact = this.phone_contact;
            let email_contact = this.email_contact;
            let message_contact = this.message_contact;
        
            if (!name_contact=="" && !phone_contact=="" && !email_contact=="" && !message_contact==""){
                if(!this.validEmail(this.email_contact)){
                    Swal.fire({
                        icon: 'error',
                        title: '',
                        text: 'Introduzca un correo electronico valido.'
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
                                title: 'Tu mensaje fué enviado correctamente, pronto me pondré en contacto con usted.',
                                showConfirmButton: false,
                                timer: 2000
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
                    text: 'Existe algun campo vacio. Llena todos los campos y vuelve a intentarlo.'
                }); 
            }
        },
        validEmail: function (p_email) {
            let patterEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return patterEmail.test(p_email);
        }
    }
});
