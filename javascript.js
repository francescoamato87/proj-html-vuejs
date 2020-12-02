// MY PERSONAL LOGIC

const footer = new Vue({
  el: '#footer',
  data:{
    logo:'',
    menu:[
      {
        title:'Home'
      },
      {
        title:'Meet The Band'
      },
      {
        title:'Live Dates'
      },
      {
        title:'Live News'
      },
      {
        title:'Albums'
      },
      {
        title:'Fans'
      },
    ]
  },
  methods:{}
});

const date = new Vue({
  el:'#date',
  data:{

    dates:[
      {
        isOpen: false,
        day:'26/11/2020 CROSSROAD FESTIVAL 2020 LOS ANGELES, CALIFORNIA',
        ticket:'Tickets available until 12 October.'
      },
      {
        isOpen: false,
        day:'17/08/20 GEM FESTIVAL 2020 ANAKALIA, GEORGIA',
        ticket:'Tickets available until 12 October.'
      },
      {
        isOpen: false,
        day:'24/09/20 GROOVEFEST DOMINICAL REPUBLIC',
        ticket:'Tickets available until 12 October.'
      },
      {
        isOpen: false,
        day: '31/10/2020 OASIS FESTIVAL 2020 MARRAKECH, MAROCCO',
        ticket:'Tickets available until 12 October.'
      },
      {
        isOpen: false,
        day:'07/11/20 MOGA FESTIVAL 2020 -  ESSAURIA, MAROCCO',
        ticket:'Tickets available until 12 October.'
      },
      {
        isOpen: false,
        day: '10/12/20 SAGRA DELLA PORCHETTA, CASALETTO SPARTANO – SALERNO',
        ticket:'Tickets available until 12 October.'
      },
    ]
  },

  // methods:{
  //   toggleAccordion(element){
  //     element.isOpen = !element.isOpen;
  //     // if(element.isOpen == true){
  //     //   element.isOpen = false;
  //     // }
  //     // else{
  //     //   element.isOpen= true;
  //     // }
  //   }
  // }
});

// ..................................................

// TEMPLATE LOGIC

const store = Vue.observable({
    isNavOpen: false
});

const mutations = {
    setIsNavOpen(yesno) {
        store.isNavOpen = yesno;
    },
    toggleNav() {
      store.isNavOpen = !store.isNavOpen;
    }
};


Vue.component('sidebar', {
  template: '#sidebar',
  methods: {
    closeSidebarPanel: mutations.toggleNav
  },
  computed: {
    isPanelOpen() {
      return store.isNavOpen
    }
  }
});

Vue.component('burger', {
  template: '#burger',
  computed: {
    isBurgerActive() {
      return store.isNavOpen
    }
  },
  methods: {
    toggle() {
      mutations.toggleNav()
    }
  }
});

new Vue({
  el: '#app'
});

// w3Schools.com DOCUMENTATION

// Scroll Back To Top Button

mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
}
