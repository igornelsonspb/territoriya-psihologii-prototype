function toggleMobileMenu(open) {
  var menu = document.getElementById('mobileMenu');
  if (!menu) return;
  menu.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
}

// Remember the feed's scroll position so "Назад" from an article returns
// to the same spot instead of jumping back to the top of the list.
(function () {
  var feed = document.querySelector('.articles');
  if (!feed) return;

  var savedY = sessionStorage.getItem('feedScrollY');
  if (savedY !== null) {
    // Wait for images to finish loading first, otherwise the page is
    // still short and the scroll position gets clamped too early.
    window.addEventListener('load', function () {
      window.scrollTo(0, parseInt(savedY, 10));
    });
  }

  window.addEventListener('beforeunload', function () {
    sessionStorage.setItem('feedScrollY', window.scrollY);
  });
})();
