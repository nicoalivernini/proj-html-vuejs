Vue.config.devtools = true;

var app = new Vue ({

  el: '#root',
  data: {
    menuNavbar: [
      {
        name: 'Home',
        //link:
      },
      {
        name: 'Courses',
        //link:
      },
      {
        name: 'Instructors',
        //link: ,
      },
      {
        name: 'Events',
        //link:
      },
      {
        name: 'Pages',
        //link:
      },
      {
        name: 'Elements',
        //link:
      }
    ], //Chiusura menuNavbar
    iconNavbar: [
      {
        name: 'search'
      },
      {
        name: 'shopping-bag'
      },
      {
        name: 'bars'
      },
    ], //Chiusura iconNavbar
    jumboSlide: [
      {
        img: 9,
        title: 'Contemporary Ideas',
        text: 'Lorem Ipns gravide nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elited odio sit amet nibcursus a sit amet mauris.'
      },
      {
        img: 10,
        title: 'Contemporary Ideas',
        text: 'Lorem Ipns gravide nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elited odio sit amet nibcursus a sit amet mauris.'
      }
    ], //Chiusura jumboSlide
    courses: [
      {
        //icon: ,
        title: 'Languages'
      },
      {
        //icon: ,
        title: 'Software'
      },
      {
        //icon: ,
        title: 'Business'
      },
      {
        //icon: ,
        title: 'Chemistry'
      },
      {
        //icon: ,
        title: 'Science'
      },
      {
        //icon: ,
        title: 'DIY&Craft'
      }
    ], //Chiusura Courses




  }, //Chiusura Data

  methods: {

  } //Chiusura Methods

}); //Chiusura Vue
