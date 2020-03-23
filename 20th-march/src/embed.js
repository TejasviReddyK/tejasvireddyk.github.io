(function(){
  /* To do:
     Store the chat log in the parent window
     instead of the iframe
  */
  var recipientId;
  var nquantumChatLog = [];
  var existingConversation = window.sessionStorage.getItem('nquantumConversation');

  var html = '<nquantum-wrapper style="display: block; position: fixed; bottom: 76px; right: 30px;"><iframe src="chat.html" style="display: none; height: 640px; width: 400px; border: none; border-radius: 28px; box-shadow: rgb(228, 228, 228) 0px 0px 38px 14px;"></iframe><nquantum-button role="button" tabindex="0" class="nquantum-chat-trigger" aria-expanded="false" aria-controls="nquantum-chat-window" aria-labelledby="nquantum-lets-chat-helper-text" style="display:block;background:#2195f3;position:fixed;right:30px;bottom:12px;padding:16px;box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);transform: scaleX(-1);border-radius:50%; animation:nquantum-heart-beat 1s ease infinite;"><nquantum-screen-reader-text id="nquantum-lets-chat-helper-text">Let’s chat.</nquantum-screen-reader-text><svg style="display:block;width:24px; height:24px" viewBox="0 0 24 24" class="nquantum-chat-icon"><path d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2Z"></path></svg><svg style="display:block;width:24px;height:24px" viewBox="0 0 24 24" class="nquantum-close-icon"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"></path></svg></nquantum-button><nquantum-wrapper>';

  var css = '<style>nquantum-screen-reader-text{border:0;clip:rect(1px,1px,1px,1px);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;word-wrap:normal!important}nquantum-button.nquantum-chat-trigger:focus,nquantum-button.nquantum-chat-trigger:hover,nquantum-button.nquantum-chat-trigger[aria-expanded=true]{animation:none!important;}nquantum-button.nquantum-chat-trigger:focus,nquantum-button.nquantum-chat-trigger:hover{outline:none;transform:scale(-1.25,1.25)}nquantum-button.nquantum-chat-trigger svg path{fill:#fff}nquantum-button.nquantum-chat-trigger[aria-expanded=false] svg.nquantum-close-icon,nquantum-button.nquantum-chat-trigger[aria-expanded=true] svg.nquantum-chat-icon{display:none!important;}@keyframes nquantum-heart-beat{0%{transform:scale(-1,1)}14%{transform:scale(-1.3,1.3)}28%{transform:scale(-1,1)}42%{transform:scale(-1.3,1.3)}70%{transform:scale(-1,1)}}</style>';

  document.head.insertAdjacentHTML('beforeend', css);
  document.body.insertAdjacentHTML('beforeend', html);

  var wrapper = document.querySelector('nquantum-wrapper');
  var chatFrame = wrapper.getElementsByTagName('iframe')[0];
  var trigger = document.getElementsByTagName('nquantum-button')[0];

  function showWidget(){
    trigger.setAttribute('aria-expanded', 'true');
    chatFrame.style.display = 'block';
    //mainInputField.focus();
  }
  showWidget();

  function hideWidget(){
    trigger.setAttribute('aria-expanded', 'false');
    chatFrame.style.display = 'none';
    trigger.focus();
  }

  window.addEventListener('unload', function(){
    var x = {};
    x.timeStamp = (new Date()).getTime();
    x.recipient_id = recipient_id;
    x.conversation = nquantumChatLog;
    x = JSON.stringify(x);
    var y = new FormData();
    y.append('data', x);
    navigator.sendBeacon('http://192.168.5.97:5000/bussiness/QA/persist/on/close', y);
  });

  trigger.addEventListener('keypress', function(e){
    if(e.keyCode == 13 || e.keyCode == 32){
      var inputClick = new Event('click', {cancelable:true, bubbles:true});
      e.target.dispatchEvent(inputClick);
    }
  });

  trigger.addEventListener('click', function(){
    var str = this.getAttribute('aria-expanded');
    if(str == 'false'){
      showWidget(); return;
    }
    if(str == 'true'){
      hideWidget(); return;
    }
  });

  trigger.addEventListener('click', function a(){
    chatFrame.contentWindow.postMessage('launch chat', '*');
    trigger.removeEventListener('click', a);
  });

  window.addEventListener('message', function(e){
    return;
    if(e.source.frameElement !== chatFrame){
      return
    }
    if(e.data.type === 'chatMessage'){
      delete e.data.type;
      nquantumChatLog.push(e.data);
    }
    if(e.data.type === 'conversation'){
      window.sessionStorage.setItem('nquantumConversation', e.data.content);
    }
    if(e.data.type === 'conversationQuery'){
      conversation = existingConversation ? existingConversation : null;
      var obj = {
        type: 'conversationQueryResult',
        content: conversation
      };
      chatFrame.contentWindow.postMessage(obj, '*');
    }
  });
})()
