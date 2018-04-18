window.onload = function() {
  var toggleTrigger = document.getElementsByClassName("toggle");
  var toggleBackground = function() {
    var theme = this.getAttribute("id");
    document.body.classList.remove("night");
    document.body.classList.add(theme);
  };
  for (var i = 0; i < toggleTrigger.length; i++) {
    toggleTrigger[i].addEventListener('click', toggleBackground, false);
  }
}
