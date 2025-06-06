const toggleBtn = document.getElementById('toggleModeBtn');
const body = document.body;
let isAdmin = false;

toggleBtn.addEventListener('click', () => {
  isAdmin = !isAdmin;
  body.classList.toggle('admin-mode');
  toggleBtn.textContent = isAdmin ? 'Switch to User Mode' : 'Switch to Admin Mode';

  document.querySelectorAll('.tile-img').forEach(img => {
    const userSrc = img.dataset.user;
    const adminSrc = img.dataset.admin;
    const tile = img.closest('.tile');

    if (isAdmin && adminSrc) {
      img.src = adminSrc;
      tile.removeAttribute('hidden');
    } else if (isAdmin && !adminSrc) {
      tile.setAttribute('hidden', '');
    } else {
      img.src = userSrc;
      tile.removeAttribute('hidden');
    }
  });
});
