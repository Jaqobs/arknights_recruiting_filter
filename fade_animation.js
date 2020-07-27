function fadeInPage() {
    var fader = document.getElementById('fader');
    fader.classList.add('fade-out');
};



window.addEventListener('pageshow', function (event) {
  if (!event.persisted) {
    return;
  }
  var fader = document.getElementByClassName('fader');
  fader.classList.remove('fade-in');
});