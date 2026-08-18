function toggleMobileMenu(open) {
  var menu = document.getElementById('mobileMenu');
  if (!menu) return;
  menu.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
}
