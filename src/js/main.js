Vue.config.devtools = true;

var app = new Vue ({

  el: '#root',
  data: {
    menuNavbar: [
      {
        name: 'Home',
        link: '#'
      },
      {
        name: 'Courses',
        link: '#'
      },
      {
        name: 'Instructors',
        link: '#'
      },
      {
        name: 'Events',
        link: '#'
      },
      {
        name: 'Pages',
        link: '#'
      },
      {
        name: 'Elements',
        link: '#'
      }
    ], //Chiusura Menu Navbar
    iconNavbar: [
      {
        name: 'search',
        link: '#'
      },
      {
        name: 'shopping-bag',
        link: '#'
      },
      {
        name: 'bars',
        link: '#'
      },
    ], //Chiusura Icon Navbar
    index: '0',
    jumboSlide: [
      {
        img: 'assets/img/h5-slide-3-background.jpg',
        title: 'Contemporary Ideas',
        text: 'Lorem Ipns gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elited odio sit amet nibcursus a sit amet mauris.',
        button: 'Register now'
      },
      {
        img: 'assets/img/h5-slide-2-background.jpg',
        title: 'Increase your knowledge',
        text: 'Lorem Ipns gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elited odio sit amet nibcursus a sit amet mauris.',
        button: 'Search now'
      },
      {
        img: 'assets/img/h5-slide-1-background.jpg',
        title: 'Boost Your Career',
        text: 'Lorem Ipns gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elited odio sit amet nibcursus a sit amet mauris.',
        button: 'Contact now'
      }
    ], //Chiusura Jumbo Slide
    coursesImgBase: 'assets/img/h5-custom-icon-',
    courses: [
      {
        title: 'Languages'
      },
      {
        title: 'Software'
      },
      {
        title: 'Business'
      },
      {
        title: 'Chemistry'
      },
      {
        title: 'Science'
      },
      {
        title: 'DIY&Craft'
      }
    ], //Chiusura Courses
    dataWorld: [
      {
        number: '168',
        text: 'User Stories'
      },
      {
        number: '347',
        text: 'Events',
      }
    ], //Chiusura Data World
    reviewImgBase: 'assets/img/testimonials-standard-',
    review: [
      {
        author: 'Joan Collins',
        type: 'Student',
        description: 'Mroin gravida nibh vel veliauctor aliquenean aollicitudin, lorem quis bbendum auctor, nisi elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nivulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus.',
        img: '2'
      },
      {
        author: 'Joe Kennedy',
        type: 'Architect',
        description: 'Nisi elit consequat ipsutis sem nibh id elit. Morbi accumsan ipsum velit. Mroin gravida nibh vel veliauctor aliquenean aollicitudin, lorem quis bbendum auctor. Nam nec tellus. Duis sed odio sit amet nivulputate cursus a sit amet mauris. ',
        img: '3'
      },
      {
        author: 'Catherine Fletcher',
        type: 'Psychologist',
        description: 'Lorem quis bbendum auctor, nisi elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nivulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus.Mroin gravida nibh vel veliauctor aliquenean aollicitudin.',
        img: '5'
      }
    ],
    indexPossibilities: 0,
    possibilities:[
      {
        intro: 'What We Do',
        title: 'Learning Possibilities',
        description: 'Lorem Ipns gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elited odio sit amet nibcursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt.',
        benefit: [
          {
            title: 'We enrich lives through learning'
          },
          {
            title: 'Maximing potentual through individual attention.'
          },
          {
            title: 'The trusted name for specialized training.'
          },
          {
            title: 'People teach. People learn. This is where they connect.'
          }
        ],
      },
      {
        intro: 'Degree Programme',
        title: 'Degree Programme',
        description: 'Lorem Ipns gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elited odio sit amet nibcursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt.',
        benefit: [
          {
            title: 'The trusted name for specialized training.'
          },
          {
            title: 'People teach. People learn. This is where they connect.'
          },
          {
            title: 'We enrich lives through learning'
          },
          {
            title: 'Maximing potentual through individual attention.'
          }
        ],

      },
      {
        intro: 'Career Achievements',
        title: 'Career Achievements',
        description: 'Lorem Ipns gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elited odio sit amet nibcursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt.',
        benefit: [
          {
            title: 'People teach. People learn. This is where they connect.'
          },
          {
            title: 'The trusted name for specialized training.'
          },
          {
            title: 'Maximing potentual through individual attention.'
          },
          {
            title: 'We enrich lives through learning'
          }
        ],

      },
      {
        intro: 'Personal Managment',
        title: 'Personal Managment',
        description: 'Lorem Ipns gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elited odio sit amet nibcursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt.',
        benefit: [
          {
            title: 'Maximing potentual through individual attention.'
          },
          {
            title: 'We enrich lives through learning'
          },
          {
            title: 'People teach. People learn. This is where they connect.'
          },
          {
            title: 'The trusted name for specialized training.'
          }
        ],

      },
      {
        intro: 'Steps To Success',
        title: 'Steps To Success',
        description: 'Lorem Ipns gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elited odio sit amet nibcursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt.',
        benefit: [
          {
            title: 'People teach. People learn. This is where they connect.'
          },
          {
            title: 'Maximing potentual through individual attention.'
          },
          {
            title: 'The trusted name for specialized training.'
          },
          {
            title: 'We enrich lives through learning'
          }
        ],

      },
      {
        intro: 'Knowledge Transfer',
        title: 'Knowledge Transfer',
        description: 'Lorem Ipns gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elited odio sit amet nibcursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt.',
        benefit: [
          {
            title: 'We enrich lives through learning'
          },
          {
            title: 'The trusted name for specialized training.'
          },
          {
            title: 'Maximing potentual through individual attention.'
          },
          {
            title: 'People teach. People learn. This is where they connect.'
          }
        ],

      }
    ], //Chiusura Possibilities
    onlineCoursesImgBase: 'assets/img/course-',
    onlineCourses: [
      {
        img: 5,
        title: 'Android Developer',
        author: 'David Sanders',
        price: 'free',
        description: 'Lorem ipsum dolor sit amet, te eros consulatu pro, quem labores petentium no sea, atqui posidonium interpretaris.',
        people: '1',
        tag: 'Programming'
      },
      {
        img: 6,
        title: 'Web Designing',
        author: 'Jennifer Powell',
        price: 'free',
        description: 'Lorem ipsum dolor sit amet, te eros consulatu pro, quem labores petentium no sea, atqui posidonium interpretaris.',
        people: '1',
        tag: 'Programming'
      },
      {
        img: 12,
        title: 'Financial Modeling',
        author: 'Edward Bowman',
        price: '$20',
        description: 'Lorem ipsum dolor sit amet, te eros consulatu pro, quem labores petentium no sea, atqui posidonium interpretaris.',
        people: '1',
        tag: 'Business'
      },
      // {
      //   img: 2,
      //   title: 'Speed Reading',
      //   author: 'Emanuel Red',
      //   price: 'Free',
      //   description: 'Lorem ipsum dolor sit amet, te eros consulatu pro, quem labores petentium no sea, atqui posidonium interpretaris.',
      //   people: '2',
      //   tag: 'Hobby'
      // },
      // {
      //   img: 3,
      //   title: 'Mockuping',
      //   author: 'Daniele Fied',
      //   price: 'Free',
      //   description: 'Lorem ipsum dolor sit amet, te eros consulatu pro, quem labores petentium no sea, atqui posidonium interpretaris.',
      //   people: '4',
      //   tag: 'Design'
      // }
    ], //Chiusura Online Courses
    dataTableImgBase: 'assets/img/h5-custom-icon-',
    dateTable: [
      {
        title: 'Save up to 40% by paying weekly',
        courses: ' Number of Courses',
        time: 'Time',
        web: 'Web Designing',
        human: 'Human-Centered Design',
        marketing: 'Basic Marketing',
        python: 'Python for Everybody',
        android: 'Android Developer',
        english: 'Business English',
      },
      {
        img: '7',
        title: 'Standard',
        cost: '$12',
        courses: '2',
        time: '15 Days',
        web: '<i class="fas fa-check"></i>',
        human: '<i class="fas fa-check"></i>',
        marketing: '<i class="fas fa-times"></i>',
        python: '<i class="fas fa-times"></i>',
        android: '<i class="fas fa-times"></i>',
        english: '<i class="fas fa-times"></i>',
        button: 'Get it now'
      },
      {
        img: '8',
        title: 'Professional',
        cost: '$59',
        courses: '4',
        time: '30 Days',
        web: '<i class="fas fa-check"></i>',
        human: '<i class="fas fa-check"></i>',
        marketing: '<i class="fas fa-check"></i>',
        python: '<i class="fas fa-check"></i>',
        android: '<i class="fas fa-times"></i>',
        english: '<i class="fas fa-times"></i>',
        button: 'Get it now'
      },
      {
        img: '9',
        title: 'Advanced',
        cost: '$88',
        courses: '6',
        time: '30 Days',
        web: '<i class="fas fa-check"></i>',
        human: '<i class="fas fa-check"></i>',
        marketing: '<i class="fas fa-check"></i>',
        python: '<i class="fas fa-check"></i>',
        android: '<i class="fas fa-check"></i>',
        english: '<i class="fas fa-check"></i>',
        button: 'Get it now'
      },
    ], //Chiusura Date Table
    partnersImgBase: 'assets/img/h5-client-',
    partners: [
      {
        img: '1',
      },
      {
        img: '2',
      },
      {
        img: '3',
      },
      {
        img: '4',
      },
    ], //Chiusura Partners
    widgetFirst: [
      {
        title: 'Prova',
        // img: '',
        description: 'Providing Life Changing Experiences Through Education. Class That Fit Your Busy Life. Closer to Home',
      },
      {
        description: '1-677-124-44227',
      },
      {
        description: 'Mon-Sat 8.00 - 18.00'
      }
    ], //Chiusura Widget First
    widgetSecond: [
      {
        title: 'Popular Courses',
      },
      {
        type: 'Business English',
        author: 'Preston Marshall',
      },
      {
        type: 'Social Computing',
        author: 'David Sanders',
      },
      {
        type: 'Learn Spanish',
        author: 'Jennie King'
      }
    ], //Chiusura Widget Second
    widgetThird: [
      {
        title: 'Support',
      },
      {
        menu: 'User dashboard',
        link: '#',
      },
      {
        menu: 'Contact Us',
        link: '#',
      },
      {
        menu: 'FAQ',
        link: '#',
      },
      {
        menu: 'Course Offer',
        link: '#'
      },
      {
        menu: 'Events',
        link: '#'
      }
    ], //Chiusura Widget Third
    widgetFourthImgBase: 'assets/img/footer-img-1.png',
    widgetFourth: [
      {
        title: 'Flexible Learning',
      }
    ], // Chiusura Widget Fourth
    widgetCopyRight: [
      {
        title: 'Copyrights 2017'
      },
      {
        title: '© Mikado Themes'
      },
    ], //  Chiusura widgetCopyRight
    widgetCopyLeft: [
      {
        title: 'Call +44 300 303 0266',
        link: 'tel:#',
      },
      {
        title: 'Follow Us',
        link: '',
      },
    ], //  Chiusura widgetCopyRight
    iconSocialFooterImgBase: 'fab fa-',
    iconSocialFooter: [
      {
        title: 'twitter',
        link: 'www.twitter.com'
      },
      {
        title: 'instagram',
        link: 'www.instagram.com'
      },
      {
        title: 'facebook-f',
        link: 'www.facebook.com'
      }
    ], //Chiusura Icon Social Footer

  }, //Chiusura Data

  created () {
    setInterval(() =>{
      this.next();
    }, 3000);
  }, //Chiusura Created

  methods: {

    next: function () {
      if (this.index < this.jumboSlide.length - 1) {
          this.index++;
        } else {
          this.index = 0;
        };
    },

    active: function (index) {
      this.index = index;
      console.log(index);
    },

    selezione: function (index) {
      this.indexPossibilities = index;
    },

    // getBenefit: function (possibilities) {
    //   console.log(possibilities[0].benefit[0].first);
    //   return possibilities[0].benefit[0].first;
    //
    // }

  } //Chiusura Methods

}); //Chiusura Vue
