window.onload = function() {
  document.getElementById('js-day').onclick = function() {
    document.documentElement.style.setProperty('--primary', '#1eb7da');
    document.documentElement.style.setProperty('--secondary', '#fff7dd');
    document.getElementById('js-hero').style.backgroundImage = 'url(images/phone--day.png)';
    document.getElementById('js-logan').style.backgroundImage = 'url(images/logan--day.svg)';
    document.getElementById('js-matt').style.backgroundImage = 'url(images/matt--day.svg)';
    document.getElementById('js-kevin').style.backgroundImage = 'url(images/kevin--day.svg)';
    document.getElementById('js-download').src = 'images/download--day.svg';
    document.getElementById('js-screenshot1').src = 'images/screenshot1--day.png';
    document.getElementById('js-screenshot2').src = 'images/screenshot2--day.png';
    document.getElementById('js-screenshot3').src = 'images/screenshot3--day.png';
    document.getElementById('js-screenshot4').src = 'images/screenshot4--day.png';
    document.getElementById('js-screenshot5').src = 'images/screenshot5--day.png';
    document.getElementById('js-screenshot6').src = 'images/screenshot6--day.png';
    document.getElementById('js-screenshot7').src = 'images/screenshot7--day.png';
    document.getElementById('js-screenshot8').src = 'images/screenshot8--day.png';
  }
  document.getElementById('js-night').onclick = function() {
    document.documentElement.style.setProperty('--primary', '#fdc82e');
    document.documentElement.style.setProperty('--secondary', '#2a0a31');
    document.getElementById('js-hero').style.backgroundImage = 'url(images/phone--night.png)';
    document.getElementById('js-logan').style.backgroundImage = 'url(images/logan--night.svg)';
    document.getElementById('js-matt').style.backgroundImage = 'url(images/matt--night.svg)';
    document.getElementById('js-kevin').style.backgroundImage = 'url(images/kevin--night.svg)';
    document.getElementById('js-download').src = 'images/download--night.svg';
    document.getElementById('js-screenshot1').src = 'images/screenshot1--night.png';
    document.getElementById('js-screenshot2').src = 'images/screenshot2--night.png';
    document.getElementById('js-screenshot3').src = 'images/screenshot3--night.png';
    document.getElementById('js-screenshot4').src = 'images/screenshot4--night.png';
    document.getElementById('js-screenshot5').src = 'images/screenshot5--night.png';
    document.getElementById('js-screenshot6').src = 'images/screenshot6--night.png';
    document.getElementById('js-screenshot7').src = 'images/screenshot7--night.png';
    document.getElementById('js-screenshot8').src = 'images/screenshot8--night.png';
  }
}
