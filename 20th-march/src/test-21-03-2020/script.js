window.addEventListener('load', function(){
  var conversation = document.getElementsByClassName('nquantum-conversation')[0],
      primaryActionArea = document.getElementsByClassName('primary-action-area')[0],
      mainInputForm = document.getElementsByClassName('nquantum-main-input-form')[0],
      mainInputField = mainInputForm.getElementsByClassName('nquantum-main-input')[0],
      mainInputSubmit = mainInputForm.getElementsByClassName('nquantum-main-input-submit')[0],
      recipient_id = Math.random().toString(36).slice(2);

  var existingConversation;
  var xhr = new XMLHttpRequest();
  var host = 'https://3ae3e4b6.ngrok.io/webhooks/rest/webhook';

  var templates = {
    botMessage: function(message){
      message = (typeof message == 'string') ? message : message.text;
      return '<div class="bot"><div class="message">'+ message +'</div> <div class="time-stamp">'+ getNquantumTimeStamp() +'</div></div>';
    },
    userMessage: function(message){
      return '<div class="user"><div class="message">'+ message +'</div> <div class="time-stamp">'+ getNquantumTimeStamp() +'</div></div>';
    },
    inputField: function(obj){
      return '<label><input type='+ obj.type +' name='+ obj.label +' placeholder='+ obj.placeholder +'><p class=error>Please enter a valid '+ obj.placeholder +'</p></label>';
    },
    form: function(obj){
      var help = '';
      if(obj.text){
        help = '<p>'+ obj.text +'</p>';
      }
      var str = '';
      obj.form.forEach(function(a){
        str = str + templates.inputField(a);
      });
      str = '<div class="bot form"><div class="message">'+ help +'<form>'+ str +'<button type="submit" class=nquantum-button>SUBMIT</button><form></div><div class="time-stamp">'+ getNquantumTimeStamp() +'</div></div>';
      return str;
    },
    submittedFormData: function(obj){
      var str = '<div class="user submitted-form-data"><div class="message">';
      var keys = Object.keys(obj);
      keys.forEach(function(a){
        str = str + '<div class="field-name">'+ a +'</div><div class="field-value">'+ obj[a] +'</div>';
      });
      return str + '</div><div class="time-stamp">'+ getNquantumTimeStamp() +'</div></div>';
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
      str = '<div class="bot-message nquantum-social">'+ str +'</div>';
      return textMsg + str;
    },
    button: function(obj){
      return '<button type="button" data-name="' + obj.payload + '">' + obj.title + '</button>';
    },
    choiceButtons: function(obj){
      var str = '';
      if(obj.text){
        str = '<p>'+ obj.text +'</p>';
      }
      obj.buttons.forEach(function(a){
        str = str + templates.button(a);
      });
      return '<div class="bot buttons"><div class="message">'+ str +'</div><div class="time-stamp">'+ getNquantumTimeStamp() +'</div></div>';
    },
    primaryActionAreaButtons: function(obj){
      var str = '';
      if(obj.text){
        str = '<p>'+ obj.text +'</p>';
      }
      obj.buttons.forEach(function(a){
        str = str + templates.button(a);
      });
      return '<div class="bot buttons"><div class="message">'+ str +'</div><div class="time-stamp">'+ getNquantumTimeStamp() +'</div></div>';
    },
    loadingIndicator: '<div class="bot loading"><nquantum-loading><nquantum-spinner><nquantum-spinner-bar class=nquantum-spinner-bar-rect1></nquantum-spinner-bar><nquantum-spinner-bar class=nquantum-spinner-bar-rect2></nquantum-spinner-bar><nquantum-spinner-bar class=nquantum-spinner-bar-rect3></nquantum-spinner-bar><nquantum-spinner-bar class=nquantum-spinner-bar-rect4></nquantum-spinner-bar><nquantum-spinner-bar class=nquantum-spinner-bar-rect5></nquantum-spinner-bar></nquantum-spinner></nquantum-loading></div>'
  };

  function getNquantumTimeStamp(){
    var x = new Date();
    return x.getHours() + ':' + x.getMinutes();
  }

  function updateConversation(chatElement){
    var loading = conversation.getElementsByClassName('loading');
    for(var i = loading.length - 1; i > -1; i = i - 1){
      conversation.removeChild(loading[i]);
    }
    conversation.insertAdjacentHTML('beforeend', chatElement);
    conversation.scroll({
      top: conversation.scrollHeight,
      behavior: 'smooth'
    });
    var obj = {
      type: 'conversation',
      content: conversation.innerHTML
    };
    window.top.postMessage(obj, '*');
  }

  function updateChatLog(obj){
    delete obj.recipient_id;
    delete obj.timeStamp;
    delete obj.templateFunction;

    obj.type = 'chatMessage';
    obj.timestamp = (new Date()).getTime();
    window.top.postMessage(obj, '*');
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
      console.log(str, str.length, Number(str), isNaN(Number(str)));
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

  function appendSpinner(){
    conversation.insertAdjacentHTML('beforeend', templates.loadingIndicator);
    conversation.scroll({
      top: conversation.scrollHeight,
      behavior: 'smooth'
    });
  }

  function keyData(form){
    var inputs = form.getElementsByTagName('input');
    var obj = {};
    for(var i = 0, l = inputs.length; i < l; i++){
      obj[inputs[i].getAttribute('placeholder')] = inputs[i].value;
    }
    return obj;
  }

  function send(obj){
    xhr.open('POST', host , true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(obj));
  }

  function disablePreviousInputs(){

    conversation.classList.add('all-disabled');
  }

  function enableAllInputs(){
    mainInputField.removeAttribute('disabled');
    conversation.classList.remove('all-disabled');
  }

  function userResponse(obj){
    appendSpinner();
    send(obj);
    updateChatLog(obj);
  }

  function handleResponse(obj){
    console.log(obj);
    obj.forEach(function(a){
      a = a.custom;
      var tmplt = a.templateFunction;
      updateConversation(templates[tmplt](a));
      disablePreviousInputs();
      if(a.mandatory){

      }
      updateChatLog(a);
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

  window.addEventListener('message', function loadConversation(e){
    if(e.data.type == 'conversationQueryResult'){
      existingConversation = e.data.content;
      window.removeEventListener('message', loadConversation);
    }
  });

  window.top.postMessage({type: 'conversationQuery'}, '*');

  window.addEventListener('message', function(e){
    if(e.data == 'launch chat'){
      if(existingConversation){
        conversation.innerHTML = existingConversation;
      }
      else{
        userResponse({
          recipient_id:recipient_id,
          message:'Hi'
        });
      }
    }
  });

  mainInputForm.addEventListener('submit', function(e){
    e.preventDefault();
    if (mainInputField.value === '') {
      return;
    }
    updateConversation(templates.userMessage(mainInputField.value));
    userResponse({
      recipient_id:recipient_id,
      message:mainInputField.value.toLowerCase()
    });
    mainInputField.value = '';
    mainInputSubmit.setAttribute('disabled', 'disabled');
  });

  mainInputField.addEventListener('input', function(e){
    if(this.value === ''){
      mainInputSubmit.setAttribute('disabled', 'disabled');
    } else {
      mainInputSubmit.removeAttribute('disabled');
    }
  });

  conversation.addEventListener('submit', function(e){
    e.preventDefault();
    var form = e.target;
    if(!validateForm(form)){
      return;
    }
    mainInputField.removeAttribute('disabled');
    var obj = keyData(form);
    var str = '#'+ Object.values(obj).join('#') +'#';
    form.parentElement.removeChild(form);
    updateConversation(templates.submittedFormData(obj));
    enableAllInputs();
    userResponse({
      recipient_id:recipient_id,
      message:str
    });
  });

  conversation.addEventListener('click', function(e){
    if(e.target.localName == 'button' && e.target.hasAttribute('data-name')){
      e.preventDefault();
      updateConversation(templates.userMessage(e.target.textContent));
      enableAllInputs();
      userResponse({
        recipient_id: recipient_id,
        message: e.target.getAttribute('data-name'),
        //timeStamp: getNquantumTimeStamp()
      });
    }
  });

  xhr.addEventListener('readystatechange', function(e){
    if(this.readyState == 4 && this.status == 200){
      var response = JSON.parse(this.responseText);
      handleResponse(response);
    }
  })

  /*handleResponse([{
    recipient_id: "dspaces",
    custom: {
      text: "Hi.  D Spaces here...!! What are you looking for?",
      templateFunction: "choiceButtons",
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
    }
  }]);*/

});
