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
    slideImgBase: 'assets/img/h5-slide-',
    jumboSlide: [
      {
        img: '3',
        title: 'Contemporary Ideas',
        text: 'Lorem Ipns gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elited odio sit amet nibcursus a sit amet mauris.',
        button: 'Register now'
      },
      {
        img: '2',
        title: 'Contemporary Ideas',
        text: 'Lorem Ipns gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elited odio sit amet nibcursus a sit amet mauris.',
        button: 'Register now'
      },
      {
        img: '1',
        title: 'Contemporary Ideas',
        text: 'Lorem Ipns gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elited odio sit amet nibcursus a sit amet mauris.',
        button: 'Register now'
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
        ]
      },
      {
        intro: 'Degree Programme',
      },
      {
        intro: 'Career Achievements',
      },
      {
        intro: 'Personal Managment',
      },
      {
        intro: 'Steps To Success',
      },
      {
        intro: 'Knowledge Transfer',
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
      }
    ], //Chiusura Online Courses




  }, //Chiusura Data

  methods: {

    // getBenefit: function (possibilities) {
    //   console.log(possibilities[0].benefit[0].first);
    //   return possibilities[0].benefit[0].first;
    //
    // }

  } //Chiusura Methods

}); //Chiusura Vue
