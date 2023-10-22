(function() {
  'use strict';

  var header = document.getElementById('header');
  var searchbox = document.getElementById('searchbox');
  var searchboxInput = document.getElementById('searchbox-input');

  document.addEventListener('scroll', () => {
    if (document.scrollingElement.scrollTop >= header.offsetHeight) {
      header.classList.add('visible');
    } else {
      header.classList.remove('visible');
    }
  });

  searchbox.addEventListener('submit', function(evt) {
    evt.preventDefault();
    location.href = 'https://www.google.com/search?q=' + searchboxInput.value;
  });
})();
