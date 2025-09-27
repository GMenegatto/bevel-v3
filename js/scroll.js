window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.reveal');
  // var highlight = document.querySelector('.highlight');

  for(var i = 0; i< reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 60;

    if(revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active')
    }
  }

  // var highlightTop = highlight.getBoundingClientRect().top;

  // if (highlightTop < window.innerHeight ) {
  //   highlight.classList.add('active')
  // }
}

// const firstReveal = document.getElementById('first-reveal')

// firstReveal.classList.add('active')