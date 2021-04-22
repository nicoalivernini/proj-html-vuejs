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
    ], //Chiusura menuNavbar
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
    ], //Chiusura iconNavbar
    slideImgBase: 'assets/img/h5-slide-',
    jumboSlide: [
      {
        img: 3,
        title: 'Contemporary Ideas',
        text: 'Lorem Ipns gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elited odio sit amet nibcursus a sit amet mauris.',
        button: 'Register now'
      },
      {
        img: 2,
        title: 'Contemporary Ideas',
        text: 'Lorem Ipns gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elited odio sit amet nibcursus a sit amet mauris.',
        button: 'Register now'
      },
      {
        img: 1,
        title: 'Contemporary Ideas',
        text: 'Lorem Ipns gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elited odio sit amet nibcursus a sit amet mauris.',
        button: 'Register now'
      }
    ], //Chiusura jumboSlide
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
    ], //Chiusura dataWorld
    possibilities:[
      {
        intro: 'What We Do',
        title: 'Learning Possibilities',
        description: 'Lorem Ipns gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elited odio sit amet nibcursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt.',
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
    ]




  }, //Chiusura Data

  methods: {

  } //Chiusura Methods

}); //Chiusura Vue
