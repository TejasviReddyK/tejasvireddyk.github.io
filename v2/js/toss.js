(function(){

window.addEventListener('load', function setUp(){

  window.addEventListener('touchstart', function touched(){  
    document.body.classList.add('touch');
    window.removeEventListener('touchstart', touched, false);
  }, false);

  window.addEventListener('mouseover', function moused(){
    document.body.classList.add('mouse');
    window.removeEventListener('mouseover', moused, false);
  }, false);
  
  window.addEventListener('keydown', function keyed(e){
    if(e.which == 9){
      document.body.classList.add('keyboard');
      window.removeEventListener('keydown', keyed);
    }
  });

  window.removeEventListener('load', setUp, false);

}, false);



window.addEventListener('load', function(){
  var body = document.body,
      nav = document.getElementsByTagName('nav')[0],
      showButton = nav.querySelector('.show-menu'),
      hideButton = nav.querySelector('.hide-menu'),
      mask = nav.querySelector('.primary-menu-mask');

  showButton.addEventListener('click', showMenu);
  hideButton.addEventListener('click', hideMenu);
  mask.addEventListener('click', hideMenu);

  function showMenu(){
    body.classList.add('showing-menu');
    showButton.setAttribute('aria-expanded', 'true');
  }

  function hideMenu(){
    nav.addEventListener('animationend', function xyz(){
      body.classList.remove('showing-menu');
      body.classList.remove('hiding-menu-transition');
      showButton.setAttribute('aria-expanded', 'false');
      nav.removeEventListener('animationend', xyz);
    });
    body.classList.add('hiding-menu-transition');
  }

});




})()
