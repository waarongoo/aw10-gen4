var loader = document.querySelector('#svgLoaderCircle'),
    percentagetext = document.querySelector('#svgPercentageText'),
    copyFiles = document.querySelector('.copyFiles'),
    installOS = document.querySelector('.installOS'),
    config = document.querySelector('.config'),
    progress = 820,
    percentage = 0;

setInterval( function(){
  loader.setAttribute("stroke-dashoffset", progress);
  percentagetext.innerHTML = percentage + "%";
  if (percentage <= 30) {
    copyFiles.classList.add('active');
    copyFiles.children[0].innerHTML = percentage + "%";
    installOS.classList.remove('active');
    installOS.classList.remove('done');
    installOS.children[0].innerHTML = "";
    config.classList.remove('active');
    config.classList.remove('done');
    config.children[0].innerHTML = "";
  }
  if (percentage >= 31 && percentage <= 75) {
    copyFiles.classList.remove('active');
    copyFiles.classList.add('done');
    copyFiles.children[0].innerHTML = "";
    installOS.classList.add('active');
    installOS.children[0].innerHTML = percentage + "%";
    config.classList.remove('active');
    config.children[0].innerHTML = "";
  }
  if (percentage >= 76) {
    copyFiles.classList.remove('active');
    copyFiles.children[0].innerHTML = "";
    installOS.classList.remove('active');
    installOS.classList.add('done');
    installOS.children[0].innerHTML = "";
    config.classList.add('active');
    config.children[0].innerHTML = percentage + "%";
  }
  percentage++;
  progress = +progress-8.19;
  if (progress < 0) {
    progress = 820;
  }
  if (percentage > 100) {
    percentage = 0;
  }
  
}, 1500);