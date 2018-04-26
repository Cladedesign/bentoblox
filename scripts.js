window.onload = function() {
  document.getElementById('js-day').onclick = function() {
    document.documentElement.style.setProperty('--primary', '#1eb7da');
    document.documentElement.style.setProperty('--secondary', '#fff7dd');
    document.getElementById('js-hero').style.backgroundImage = 'url(images/phone--day.png)';
    document.getElementById('js-logan').style.backgroundImage = 'url(images/logan--day.svg)';
    document.getElementById('js-matt').style.backgroundImage = 'url(images/matt--day.svg)';
    document.getElementById('js-kevin').style.backgroundImage = 'url(images/kevin--day.svg)';
    document.getElementById('js-download').src = 'images/download--day.svg';
    document.getElementById('js-screenshot1').src = 'images/screenshots/screenshot-01--day.png';
    document.getElementById('js-screenshot2').src = 'images/screenshots/screenshot-02--day.png';
    document.getElementById('js-screenshot3').src = 'images/screenshots/screenshot-03--day.png';
    document.getElementById('js-screenshot4').src = 'images/screenshots/screenshot-04--day.png';
    document.getElementById('js-screenshot5').src = 'images/screenshots/screenshot-05--day.png';
    document.getElementById('js-screenshot6').src = 'images/screenshots/screenshot-06--day.png';
    document.getElementById('js-screenshot7').src = 'images/screenshots/screenshot-07--day.png';
    document.getElementById('js-screenshot8').src = 'images/screenshots/screenshot-08--day.png';
  }
  document.getElementById('js-night').onclick = function() {
    document.documentElement.style.setProperty('--primary', '#fdc82e');
    document.documentElement.style.setProperty('--secondary', '#2a0a31');
    document.getElementById('js-hero').style.backgroundImage = 'url(images/phone--night.png)';
    document.getElementById('js-logan').style.backgroundImage = 'url(images/logan--night.svg)';
    document.getElementById('js-matt').style.backgroundImage = 'url(images/matt--night.svg)';
    document.getElementById('js-kevin').style.backgroundImage = 'url(images/kevin--night.svg)';
    document.getElementById('js-download').src = 'images/download--night.svg';
    document.getElementById('js-screenshot1').src = 'images/screenshots/screenshot-01--night.png';
    document.getElementById('js-screenshot2').src = 'images/screenshots/screenshot-02--night.png';
    document.getElementById('js-screenshot3').src = 'images/screenshots/screenshot-03--night.png';
    document.getElementById('js-screenshot4').src = 'images/screenshots/screenshot-04--night.png';
    document.getElementById('js-screenshot5').src = 'images/screenshots/screenshot-05--night.png';
    document.getElementById('js-screenshot6').src = 'images/screenshots/screenshot-06--night.png';
    document.getElementById('js-screenshot7').src = 'images/screenshots/screenshot-07--night.png';
    document.getElementById('js-screenshot8').src = 'images/screenshots/screenshot-08--night.png';
  }
}
