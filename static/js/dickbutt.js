var butt = false;

if (/HeadlessChrome/.test(window.navigator.userAgent)) {
  butt |= true;
}

if(navigator.webdriver) {
  butt |= true;
}

if(typeof isChrome !== 'undefined') {
  if(isChrome && !window.chrome) {
    butt |= true;
  }
}

navigator.permissions.query({name:'notifications'}).then(function(permissionStatus) {
  if(Notification.permission === 'denied' && permissionStatus.state === 'prompt') {
    butt |= true;
  } 
});

if(navigator.languages === "") {
  butt |= true;
}

if(butt) {
  document.documentElement.innerHTML = '<img src="/theme/images/dickbutt-highres.png" width="100%"></img>';
}
