const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const toast = document.getElementById('toast');
let toastTimer;

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2000);
}

// Contact and email buttons copy the address instead of opening a mail app.
document.querySelectorAll('.copy-email').forEach((button) => {
  button.addEventListener('click', async () => {
    const email = button.dataset.email;
    try {
      await navigator.clipboard.writeText(email);
      showToast(`Copied: ${email}`);
    } catch {
      showToast(`Email: ${email}`);
    }
  });
});
