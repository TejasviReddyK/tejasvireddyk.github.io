(function(){
  window.addEventListener('load', setUp);
  
  function setUp(){
    
  }



window.addEventListener('load', function(){
  var body = document.body,
      nav = document.getElementsByTagName('nav')[0],
      toggleMenu = nav.querySelector('.toggle-menu'),
      menu = nav.querySelector('#primary-menu');

  function showMenu(){
    var initialHeight = nav.getBoundingClientRect().height;
    toggleMenu.setAttribute('aria-expanded', 'true');
    body.classList.add('showing-menu');

/* menu.style.display = "block";
nav.getBoundingClientRect().height;
menu.style.display = "none"; */

  }

  function hideMenu(){
    var initialHeight = nav.getBoundingClientRect().height;
    toggleMenu.setAttribute('aria-expanded', 'false');
    body.classList.remove('showing-menu');
  }

  toggleMenu.addEventListener('click', function(){
    var expanded = this.getAttribute('aria-expanded'),
        body = document.body;

    if(expanded === 'false'){
      showMenu();
    }
    else{
      hideMenu();
    }
  });
});




})()
