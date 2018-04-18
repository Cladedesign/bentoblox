window.onload = function() {
  document.getElementById('js-day').onclick = function() {
    document.documentElement.style.setProperty('--primary', '#1eb7da');
    document.documentElement.style.setProperty('--secondary', '#fff7dd');
    document.getElementById('js-logan').style.backgroundImage = 'url(images/logan--day.png)';
    document.getElementById('js-matt').style.backgroundImage = 'url(images/matt--day.png)';
    document.getElementById('js-kevin').style.backgroundImage = 'url(images/kevin--day.png)';
  }
  document.getElementById('js-night').onclick = function() {
    document.documentElement.style.setProperty('--primary', '#fdc82e');
    document.documentElement.style.setProperty('--secondary', '#2a0a31');
    document.getElementById('js-logan').style.backgroundImage = 'url(images/logan--night.png)';
    document.getElementById('js-matt').style.backgroundImage = 'url(images/matt--night.png)';
    document.getElementById('js-kevin').style.backgroundImage = 'url(images/kevin--night.png)';
  }
}
