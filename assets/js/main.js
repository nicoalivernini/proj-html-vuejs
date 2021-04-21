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
  }, //Chiusura Data

  methods: {

  } //Chiusura Methods

}); //Chiusura Vue
