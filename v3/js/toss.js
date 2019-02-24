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

  if(window.innerWidth < 550){
    var la = document.getElementsByClassName('logo-and-affiliation')[0];
    
    setInterval(function(){
      la.classList.toggle('show-affiliation');
    }, 7000);
  }

  window.removeEventListener('load', setUp, false);

}, false);



window.addEventListener('load', function(){
  var body = document.body,
      nav = document.getElementsByTagName('nav')[0];

  nav.addEventListener('click', function(e){
    var t = e.target;
    if(t.matches('button.level-1-a')){
      var expanded = t.getAttribute('aria-expanded');
      if(expanded == 'false'){
        showSubmenu(null, t);
      }
      else{
        hideSubmenu(null, t);
      }
    }
  });
  
  nav.addEventListener('keydown', function(e){
    if(e.which == 27){
      // find all submenus that are being displayed, including submenus of submenus
      var showing = this.getElementsByClassName("showing-submenu");
      // last submenu to be opened should be closed first - last-in--first-out
      var submenuToBeHidden = showing[showing.length - 1].querySelector('[aria-expanded=true]');
    }
  });  
  
  function showSubmenu(submenu, btn){
    btn.setAttribute('aria-expanded', 'true');
    btn.parentElement.classList.add('showing-submenu');
  }

  function hideSubmenu(submenu, btn){
    btn.setAttribute('aria-expanded', 'false');
    btn.parentElement.classList.remove('showing-submenu');
  }

});




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
