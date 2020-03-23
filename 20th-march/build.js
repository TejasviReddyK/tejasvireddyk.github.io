(function(){
  var fs = require('fs');

  var preferences = require('./config/user-preferences.js').preferences;
  var botConfig = require('./config/bot-config.js').config;

  var html = fs.readFileSync('src/index.html').toString();
  html = eval('`' + html + '`');
  html = html.replace(/\n/g, ' ');
  html = html.replace(/\t/g, '');

  var css = fs.readFileSync('src/style.css').toString();
  css = '<style>' + css + '</style>';
  css = css.replace(/\n/g, '');
  css = css.replace(/\t/g, '');

  var js = fs.readFileSync('src/script.js').toString();

  //var themeCss = fs.readFileSync('src/nquantumTheme.css').toString();
  //themeCss = eval('`' + themeCss.trim() + '`');
  var themeCss = '';
  themeCss = '<style>' + themeCss + '</style>';

  var str = `window.addEventListener('load', function(){
    var html = "${html}";
    var css = "${css}";
    var nquantumThemeCss = "${themeCss}";

    document.head.insertAdjacentHTML('beforeend', css); document.head.insertAdjacentHTML('beforeend', nquantumThemeCss); document.body.insertAdjacentHTML('beforeend', html);
    var host = '${botConfig.host}'; ${js}
  })`;

  var embed = fs.writeFile('dist/embed.js', str, err => {if (err) console.log(err)});
})()
