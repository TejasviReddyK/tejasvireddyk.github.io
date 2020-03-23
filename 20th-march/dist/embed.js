window.addEventListener('load', function(){
    var html = "  <nquantum-widget>     <nquantum-chat-window class='nquantum-chat-window hidden' id='nquantum-chat-window'>       <nquantum-header>         <nquantum-bot-name>           D Spaces         </nquantum-bot-name>       </nquantum-header>       <nquantum-conversation>         <nquantum-user-message>           Hello!           <nquantum-time-stamp>             14:17           <nquantum-time-stamp>         </nquantum-user-message>         <nquantum-bot-message>           Select one of the following           <nquantum-time-stamp>             14:17           <nquantum-time-stamp>         </nquantum-bot-message>         <nquantum-bot-message class='nquantum-buttons'>           <nquantum-button role='button' tabindex='0' data-name='/office'>Offices</nquantum-button>           <nquantum-button role='button' tabindex='0' data-name='/hotels'>Hotels</nquantum-button>           <nquantum-button role='button' tabindex='0' data-name='/residential'>Residential</nquantum-button>           <nquantum-button role='button' tabindex='0' data-name='/hospital'>Hospital</nquantum-button>         </nquantum-bot-message>         <nquantum-user-message>           Architecture           <nquantum-time-stamp>             14:17           <nquantum-time-stamp>         </nquantum-user-message>         <nquantum-bot-message>           Please let us know your Name, Phone Number and Email Address.           <nquantum-time-stamp>             14:17           <nquantum-time-stamp>         </nquantum-bot-message>         <nquantum-bot-message class='nquantum-form'>           <nquantum-form>             <nquantum-label>               <!--<nquantum-label-text>Name</nquantum-label-text>-->               <input type='text' name='name' placeholder='Name'>               <nquantum-error-text class='nquantum-error'>Please enter a valid name</nquantum-error-text>             </nquantum-label>             <nquantum-label>               <!--<nquantum-label-text>Phone Number</nquantum-label-text>-->               <input type='text' name='phone' placeholder='Phone Number'>               <nquantum-error-text class='nquantum-error'>Please enter a valid phone number</nquantum-error-text>             </nquantum-label>             <nquantum-label>               <!--<nquantum-label-text>Email</nquantum-label-text>-->               <input type='text' name='email'  placeholder='Email'>               <nquantum-error-text class='nquantum-error'>Please enter a valid email address</nquantum-error-text>             </nquantum-label>             <nquantum-button role='button' tabindex='0' class='nquantum-button'>SUBMIT</nquantum-button>           </nquantum-form>         </nquantum-bot-message>       </nquantum-conversation>       <nquantum-form class='nquantum-main-input-form'>         <!--<textarea rows='1' cols='80' placeholder='Type a message...' aria-labelledby='nquantum-main-input-helper-text'></textarea>-->         <input type='text' class='nquantum-main-input' placeholder='Type a message...' aria-labelledby='nquantum-main-input-helper-text'>         <nquantum-screen-reader-text id='nquantum-main-input-helper-text' class='nquantum-input-helper-text'>Type a message...</nquantum-screen-reader-text>         <nquantum-button role='button' tabindex='0' class='nquantum-main-input-submit' role='button' disabled>           <svg style='width:36px;height:36px;margin:auto;' viewBox='0 0 24 24'>             <path fill='currentColor' d='M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M8,7.71V11.05L15.14,12L8,12.95V16.29L18,12L8,7.71Z' />           </svg>         </nquantum-button>       </nquantum-form>       <nquantum-footer>         <a href='http://nquantum.ai' target='_blank'>Powered by nQuantum.</a>       </nquantum-footer>     </nquantum-chat-window>     <nquantum-button role='button' tabindex='0' class='nquantum-chat-trigger' aria-expanded='false' aria-controls='nquantum-chat-window' aria-labelledby='lets-chat-helper-text'>       <nquantum-screen-reader-text id='lets-chat-helper-text'>Let&rsquo;s chat.</nquantum-screen-reader-text>       <svg style='width:24px; height:24px' viewBox='0 0 24 24' class='nquantum-chat-icon'>         <path d='M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2Z' />       </svg>       <svg style='width:24px;height:24px' viewBox='0 0 24 24' class='nquantum-close-icon'>         <path d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z' />       </svg>     </nquantum-button>   </nquantum-widget>";
    var css = "<style>/* border-radius, background, box-shadow to be configurable  */@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,700&display=swap');nquantum-widget form,nquantum-widget input[type=text],nquantum-widget input[type=tel],nquantum-widget input[type=email],nquantum-widget textarea,nquantum-widget a,nquantum-widget svg,nquantum-widget img{  all:unset;}nquantum-widget,nquantum-chat-window,nquantum-header,nquantum-bot-name,nquantum-conversation,nquantum-bot-message,nquantum-user-message,nquantum-time-stamp,nquantum-form,nquantum-label,nquantum-label-text,nquantum-error-text,nquantum-footer,nquantum-loading,nquantum-spinner,nquantum-spinner-rect,nquantum-widget svg{  display:block;}nquantum-button{  display:inline-block; user-select:none;}nquantum-widget{  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'IBM Plex Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; color:#222!important; position:fixed; bottom:12px; right:30px; padding-bottom:64px; z-index:999999; font-size:16px;}nquantum-button,nquantum-widget a{  cursor:pointer; }nquantum-widget a{  text-decoration:none;}nquantum-screen-reader-text{  border: 0;  clip: rect(1px, 1px, 1px, 1px);  clip-path: inset(50%);  height: 1px;  margin: -1px;  overflow: hidden;  padding: 0;  position: absolute;  width: 1px;  word-wrap: normal !important;}nquantum-chat-window{  height:640px; width:400px; background-color:#fff; border-radius:28px; -webkit-box-shadow:0 0 38px 14px #e4e4e4; box-shadow:0 0 38px 14px #e4e4e4; overflow:hidden; position:relative;}nquantum-chat-window.hidden{  display:none;}nquantum-header,nquantum-user-message,nquantum-bot-message.nquantum-buttons nquantum-button:hover,nquantum-bot-message.nquantum-buttons nquantum-button:focus,.nquantum-form .nquantum-button:hover,.nquantum-form .nquantum-button:focus,nquantum-button.nquantum-chat-trigger:hover,nquantum-button.nquantum-chat-trigger:focus{  background:linear-gradient(148deg, #012773, #2196F3); color:#fff;}nquantum-header{  width:100%; -webkit-box-shadow:rgba(60, 64, 67, .3) 0 1px 2px 0, rgba(60, 64, 67, .15) 0 1px 3px 1px; box-shadow:rgba(60, 64, 67, .3) 0 1px 2px 0, rgba(60, 64, 67, .15) 0 1px 3px 1px; font-weight:bold;}nquantum-bot-name{  line-height:20px; font-size:16px; padding:36px; font-weight:bold;}nquantum-conversation{  padding:8px 10px 8px 16px; overflow-y:scroll; scrollbar-width:thin; scrollbar-color:#cdcdcd transparent; -webkit-box-sizing:border-box; box-sizing:border-box; height:468px;}nquantum-conversation::-webkit-scrollbar{  width:6px;}nquantum-conversation::-webkit-scrollbar-track{  background:transparent;}nquantum-conversation::-webkit-scrollbar-thumb{  background-color:#cdcdcd; border-radius:6px; border:3px solid transparent;}nquantum-conversation:after{  content:''; display:block; clear:both;}nquantum-user-message,nquantum-bot-message{  padding:8px; border-radius:12px; margin-bottom:12px; overflow-wrap:break-word; clear:both; max-width:80%;}nquantum-user-message{  float:right; border-top-right-radius:0;}nquantum-bot-message{  float:left; background-color:#cbcbcc; border-top-left-radius:0;}nquantum-time-stamp{  float:right; position:relative; top:10px; left:6px; opacity:.5; font-size:10px; text-align:right; font-weight:bold; user-select:none;}nquantum-time-stamp:before{  content:''; display:inline-block; width:4px; height:1px;}nquantum-bot-message.nquantum-buttons{  background:none; margin-top:-12px; padding:0;}nquantum-bot-message.nquantum-buttons nquantum-button{  background:#2195f3; color:#fff; padding:4px 12px; border-radius:12px; font-size:13px; margin:6px 4px 0 0; text-decoration:none;}.nquantum-form{  float:left; width:80%; margin-top:-6px; padding:8px; border-radius:12px; border:1px solid #c5cdd3; background:#fff!important;}.nquantum-form input[type=text],.nquantum-form input[type=tel],.nquantum-form input[type=email]{  display:block!important; padding:18px 0 6px!important; width:100%!important; border-bottom:1px solid #c5cdd3!important; margin:0!important;}.nquantum-form input[type=text]:focus,.nquantum-form input[type=tel]:focus,.nquantum-form input[type=email]:focus{  border:1px solid #c5cdd3!important; padding:18px 0 6px!important; background:none!important;}nquantum-error-text {display:none; font-size:13px; color:#d01515; margin-top:4px; font-weight:500;}nquantum-error-text.show{  display:block;}.nquantum-form .nquantum-button{  background:#2195f3; color:#fff; border-radius:8px; padding:12px; width:100%; box-sizing:border-box; text-align:center; margin-top:12px; font-variant-caps:all-small-caps; font-weight:bold; letter-spacing:.05em;}nquantum-bot-message.nquantum-social{  background:none; margin-top:-10px}nquantum-bot-message.nquantum-social a{  margin-right:4px;}nquantum-bot-message.nquantum-social img{  margin:0 8px 0 0; width:24px;}nquantum-loading{  clear:both;}nquantum-form.nquantum-main-input-form{  position:absolute; bottom:24px; width:100%; padding:8px 54px 8px 8px; box-sizing:border-box; box-shadow: rgba(60, 64, 67, .3) 0 1px 4px -1px, rgba(60, 64, 67, .15) 0 1px 6px -1px; border-top:1px solid #c5cdd3;}nquantum-form.nquantum-main-input-form.hidden{  display:none;}nquantum-form.nquantum-main-input-form input[type=text].nquantum-main-input{  padding:8px!important; width:100%!important; box-sizing:border-box!important; color:#333!important; height:40px!important; line-height:1.5!important;}nquantum-form.nquantum-main-input-form input[type=text].nquantum-main-input:focus{  border:none!important; box-shadow:none!important;}nquantum-main-input-helper-text{  display:none;}nquantum-button.nquantum-main-input-submit{  background:none!important; border:0!important; position:absolute; right:4px; padding:6px; top:50%; margin-top:-24px;}nquantum-button.nquantum-main-input-submit svg path{  fill:#2189e5;}nquantum-button.nquantum-main-input-submit[disabled] svg path{  fill:#cdcdcd;}nquantum-footer{  position:absolute; bottom:0; width:100%; height:24px; text-align:center; background:#fff;}nquantum-footer a{  font-size:12px; opacity:.3;}nquantum-button.nquantum-chat-trigger{  background:#2195f3; position:absolute; right:0; bottom:0; padding:16px; -webkit-box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0,0,0,.12); box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0,0,0,.12); -webkit-transform:scaleX(-1); -ms-transform:scaleX(-1); transform:scaleX(-1); border-radius:50%; animation:nquantum-heart-beat 1s ease infinite;}nquantum-button.nquantum-chat-trigger:focus,nquantum-button.nquantum-chat-trigger:hover,nquantum-button.nquantum-chat-trigger[aria-expanded=true]{  animation:none;}nquantum-button.nquantum-chat-trigger:focus,nquantum-button.nquantum-chat-trigger:hover{  transform:scale(-1.25,1.25);}nquantum-button.nquantum-chat-trigger svg path{  fill:#fff;}nquantum-button.nquantum-chat-trigger[aria-expanded=false] svg.nquantum-close-icon,nquantum-button.nquantum-chat-trigger[aria-expanded=true] svg.nquantum-chat-icon{  display:none;}nquantum-spinner{  width: 50px;  height: 40px;  text-align: center;}nquantum-spinner-bar {  background-color: #cbcbcc;  height: 100%;  width: 6px;  display: inline-block;  margin:0 1px;  -webkit-animation: nquantum-sk-stretchdelay 1.2s infinite ease-in-out;  animation: nquantum-sk-stretchdelay 1.2s infinite ease-in-out;}.nquantum-spinner-bar-rect2 {  -webkit-animation-delay: -1.1s;  animation-delay: -1.1s;}.nquantum-spinner-bar-rect3 {  -webkit-animation-delay: -1.0s;  animation-delay: -1.0s;}.nquantum-spinner-bar-rect4 {  -webkit-animation-delay: -0.9s;  animation-delay: -0.9s;}.nquantum-spinner-bar-rect5 {  -webkit-animation-delay: -0.8s;  animation-delay: -0.8s;}@-webkit-keyframes nquantum-sk-stretchdelay {  0%, 40%, 100% { -webkit-transform: scaleY(0.4) }  20% { -webkit-transform: scaleY(1.0) }}@keyframes nquantum-sk-stretchdelay {  0%, 40%, 100% {    transform: scaleY(0.4);    -webkit-transform: scaleY(0.4);  }  20% {    transform: scaleY(1.0);    -webkit-transform: scaleY(1.0);  }}@-webkit-keyframes nquantum-heart-beat{0% {-webkit-transform: scale(-1,1);transform: scale(-1,1);}14% {-webkit-transform: scale(-1.3,1.3);transform: scale(-1.3,1.3);}28% {-webkit-transform: scale(-1,1);transform: scale(-1,1);}42% {-webkit-transform: scale(-1.3,1.3);transform: scale(-1.3,1.3);}70% {-webkit-transform: scale(-1,1);transform: scale(-1,1);}}@keyframes nquantum-heart-beat{0% {-webkit-transform: scale(-1,1);transform: scale(-1,1);}14% {-webkit-transform: scale(-1.3,1.3);transform: scale(-1.3,1.3);}28% {-webkit-transform: scale(-1,1);transform: scale(-1,1);}42% {-webkit-transform: scale(-1.3,1.3);transform: scale(-1.3,1.3);}70% {-webkit-transform: scale(-1,1);transform: scale(-1,1);}}</style>";
    var nquantumThemeCss = "<style></style>";

    document.head.insertAdjacentHTML('beforeend', css); document.head.insertAdjacentHTML('beforeend', nquantumThemeCss); document.body.insertAdjacentHTML('beforeend', html);
    var host = 'https://294717b8.ngrok.io/webhooks/rest/webhook'; (function(){
  var widget = document.querySelector('nquantum-widget'),
      chatWindow = widget.getElementsByTagName('nquantum-chat-window')[0],
      conversation = chatWindow.getElementsByTagName('nquantum-conversation')[0],
      mainInputForm = chatWindow.getElementsByClassName('nquantum-main-input-form')[0],
      mainInputField = mainInputForm.getElementsByClassName('nquantum-main-input')[0],
      mainInputSubmit = mainInputForm.getElementsByClassName('nquantum-main-input-submit')[0],
      widgetTrigger = widget.getElementsByClassName('nquantum-chat-trigger')[0],
      templates = widget.getElementsByTagName('nquantum-reusable-elements')[0],
      existingConversation = window.sessionStorage.getItem('nquantumConversation'),
      recipient_id = Math.random().toString(36).slice(2),
      nquantumChatLog = [];

  var host = 'https://294717b8.ngrok.io/webhooks/rest/webhook';

  var templates = {
    botMessage: function(message){
      message = (typeof message == 'string') ? message : message.text;
      return '<nquantum-bot-message>'+ message +' <nquantum-time-stamp>'+ getNquantumTimeStamp() +'<nquantum-time-stamp></nquantum-bot-message>';
    },
    userMessage: function(message){
      return '<nquantum-user-message>'+ message +' <nquantum-time-stamp>'+ getNquantumTimeStamp() +'<nquantum-time-stamp></nquantum-user-message>';
    },
    inputField: function(obj){
      return '<nquantum-label><input type='+ obj.type +' name='+ obj.label +' placeholder='+ obj.placeholder +'><nquantum-error-text class=error>Please enter a valid '+ obj.placeholder +'</nquantum-error-text></nquantum-label>';
    },
    form: function(obj){
      var textMsg = '';
      if(obj.text){
        textMsg = templates.botMessage(obj.text);
      }
      var str = '';
      obj.form.forEach(function(a){
        str = str + templates.inputField(a);
      });
      str = '<nquantum-bot-message class=nquantum-form><nquantum-form>'+ str +'<nquantum-button role=button tabindex=0 class=nquantum-button>SUBMIT</nquantum-button><nquantum-form></nquantum-bot-message>';
      return textMsg + str;
    },
    socialLink: function(obj){
      return '<a target=_blank href="' + obj.link + '" title = "' + obj.title + '"><img src="' + obj.image + '" alt="' + obj.title + '"></a>';
    },
    sociallinks: function(obj){
      var textMsg = '';
      if(obj.text){
        textMsg = templates.botMessage(obj.text);
      }
      var str = '';
      obj.links.forEach(function(a){
        str = str + templates.socialLink(a);
      });
      str = '<nquantum-bot-message class=nquantum-social>'+ str +'</nquantum-bot-message>';
      return textMsg + str;
    },
    button: function(obj){
      return '<nquantum-button role=button tabindex=0 data-name="' + obj.payload + '">' + obj.title + '</nquantum-button>';
    },
    choiceButtons: function(obj){
      var textMsg = '';
      if(obj.text){
        textMsg = templates.botMessage(obj.text);
      }
      var str = '';
      obj.buttons.forEach(function(a){
        str = str + templates.button(a);
      });
      return textMsg + '<nquantum-bot-message class=nquantum-buttons>'+ str +'</nquantum-bot-message>';
    },
    loadingIndicator: '<nquantum-loading><nquantum-spinner><nquantum-spinner-bar class=nquantum-spinner-bar-rect1></nquantum-spinner-bar><nquantum-spinner-bar class=nquantum-spinner-bar-rect2></nquantum-spinner-bar><nquantum-spinner-bar class=nquantum-spinner-bar-rect3></nquantum-spinner-bar><nquantum-spinner-bar class=nquantum-spinner-bar-rect4></nquantum-spinner-bar><nquantum-spinner-bar class=nquantum-spinner-bar-rect5></nquantum-spinner-bar></nquantum-spinner></nquantum-loading>'
  };

  function getNquantumTimeStamp(){
    var x = new Date();
    return x.getHours() + ':' + x.getMinutes();
  }

  function showWidget(){
    widgetTrigger.setAttribute('aria-expanded', 'true');
    chatWindow.classList.remove('hidden');
    mainInputField.focus();
  }

  function hideWidget(){
    widgetTrigger.setAttribute('aria-expanded', 'false');
    chatWindow.classList.add('hidden');
    widgetTrigger.focus();
  }

  function updateConversation(chatElement){
    var loading = conversation.getElementsByTagName('nquantum-loading');
    for(var i = loading.length - 1; i > -1; i = i - 1){
      conversation.removeChild(loading[i]);
    }
    conversation.insertAdjacentHTML('beforeend', chatElement);
    conversation.scrollTop = conversation.scrollHeight;
  }

  function isName(str){
    if(str.length == 0){
      return false;
    }
    var allowedChars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',' ','.'];
    for(var i = 0, l = str.length; i < l; i++){
      if(allowedChars.indexOf(str[i]) == -1){
        return false;
      }
    }
    return true;
  }

  function isPhoneNumber(str){
    if(str.length != 10 || isNaN(Number(str))){
      return false;
    }
    var numbersNotAllowedInTheBeginning = [0,1,2,3,4,5];
    if(numbersNotAllowedInTheBeginning.indexOf(Number(str[0])) != -1){
      return false;
    }
    return true
  }

  function isEmailId(str){
    if(str.length == 0){
      return false;
    }
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(str);
  }

  function validateForm(form){
    var allInputsValid = true;
    var inputs = form.getElementsByTagName('input');
    for(var i = 0, l = inputs.length; i < l; i++){
      var input = inputs[i];
      var check;
      switch(input.name){
        case 'name':
          check = isName;
          break;
        case 'phone':
          check = isPhoneNumber;
          break;
        case 'email':
          check = isEmailId;
          break;
      }
      if(!check(input.value)){
        input.nextElementSibling.classList.add('show');
        allInputsValid = false;
      }
      else{
        input.nextElementSibling.classList.remove('show');
      }
    }
    return allInputsValid;
  }

  function sendUserResponseToBotResponse(e){
    e.preventDefault();
    var form = e.target;
    if(!validateForm(form)){
      return;
    }
    var str = extractKeyData(form);
    var dataToSend = {
      recipient_id:recipient_id,
      message:str
    };
    sendData(dataToSend);
  }

  function appendSpinner(){
    var htmlString = templates.loadingIndicator;
    conversation.insertAdjacentHTML('beforeend', htmlString);
    conversation.scrollTop = conversation.scrollHeight;
  }

  function extractKeyData(form){
    var inputs = form.getElementsByTagName('input');
    var str = '#';
    for(var i = 0, l = inputs.length; i < l; i++){
      str = str + inputs[i].value + '#';
    }
    return str;
  }

  function handleMainInput(){
    var message = mainInputField.value;
    var htmlString = templates.userMessage(message);
    updateConversation(htmlString);
    mainInputField.value = '';
    mainInputField.rows = 1;
    var dataToSend = {
      recipient_id:recipient_id,
      message:message
    };
    sendData(dataToSend);
  };

  function sendData(obj){
    appendSpinner();
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
        var response = JSON.parse(this.responseText);
        handleResponse(response);
      }
    };
    xhr.open('POST', host , true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(obj));
    obj.timestamp = (new Date()).getTime();
    delete obj.recipient_id;
    delete obj.timeStamp;
    nquantumChatLog.push(obj);
  }

  function handleResponse(obj){
    obj.forEach(function(a){
      var tmplt = a.custom.templateFunction;
      var messageHTML = templates[tmplt](a.custom);
      updateConversation(messageHTML);
      delete a.custom.templateFunction;
      a.custom.timestamp = (new Date()).getTime();
      nquantumChatLog.push(a.custom);
    });
  }

  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  }
  
  if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
      var el = this;
  
      do {
        if (el.matches(s)) return el;
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);
      return null;
    };
  }

  if(existingConversation){
    conversation.innerHTML = existingConversation;
    window.sessionStorage.removeItem('nquantumConversation');
    showWidget();
  }

  (function(){
    var url = 'http://192.168.5.97:5000/bussiness/QA/persist/on/close';
    var x = new XMLHttpRequest();
    x.open('GET', url, true);
    //x.setRequestHeader('Access-Control-Allow-Origin', '*');
    //x.send();
  })()

  /*var sd = new FormData();
  sd.append('data', 'hello dude!');
  console.log(sd);
  var ds = navigator.sendBeacon('http://192.168.5.97:5000/bussiness/QA/persist/on/close', sd);
  console.log(ds);*/

  window.addEventListener('unload', function(){
    var x = {};
    x.timeStamp = getNquantumTimeStamp();
    x.recipient_id = recipient_id;
    x.conversation = nquantumChatLog;
    x = JSON.stringify(x);
    var y = new FormData();
    y.append('data', x);
    navigator.sendBeacon('http://192.168.5.97:5000/bussiness/QA/persist/on/close', y);
    window.sessionStorage.setItem('nquantumConversation', conversation.innerHTML);
  });

  widget.addEventListener('keypress', function(e){
    var t = e.target;
    if((e.keyCode == 13 || e.keyCode == 32) && t.getAttribute('role') === 'button' ){
      var inputClick = new Event('click', {cancelable:true, bubbles:true});
      t.dispatchEvent(inputClick);
    }
    if(e.keyCode == 13 && t.localName == 'input'){
      var formSubmit = new Event('submit', {cancelable:true, bubbles:true});
      t.closest('nquantum-form').dispatchEvent(formSubmit);
    }
  });

  widgetTrigger.addEventListener('click', function(){
    var str = this.getAttribute('aria-expanded');
    if(str == 'false'){
      showWidget(); return;
    }
    if(str == 'true'){
      hideWidget(); return;
    }
  });

  mainInputForm.addEventListener('submit', function(e){
    e.preventDefault();
    if (mainInputField.value !== '') {
      handleMainInput();
    }
  });

  mainInputField.addEventListener('input', function(e){
    if(this.value === ''){
      mainInputSubmit.setAttribute('disabled', 'disabled');
    } else {
      mainInputSubmit.removeAttribute('disabled');
    }
    /* If the user enters a message long enough that a scrollbar is
    necessary, increase the height of the text input field instead
    of letting the scrollbar show. */
    if(this.clientHeight < this.scrollHeight){
      this.rows = this.rows + 1;
    }
  });

  conversation.addEventListener('submit', sendUserResponseToBotResponse);

  conversation.addEventListener('click', function(e){
    if(e.target.localName == 'nquantum-button' && e.target.closest('nquantum-form') != null){
      var submitEvent = new Event('submit', {cancelable:true, bubbles:true});
      e.target.closest('nquantum-form').dispatchEvent(submitEvent);
    }
    if(e.target.localName == 'nquantum-button' && e.target.hasAttribute('data-name')){
      e.preventDefault();
      updateConversation(templates.userMessage(e.target.textContent));
      var dataToSend = {
        recipient_id:recipient_id,
        message:e.target.getAttribute('data-name')
      };
      dataToSend.timeStamp = getNquantumTimeStamp();
      sendData(dataToSend);
    }
  });

  /*handleResponse([{
    recipient_id: "dspaces",
    text: "Hi.  D Spaces here...!! What are you looking for?",
    buttons:[
      {
        payload: "/apply",
        title: "Careers"
      },
      {
        payload: "/bussiness",
        title: "Design Your Space"
      }
    ]
  }]);*/
  
})();

  })