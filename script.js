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

// Copy buttons next to the mailto link; on failure the toast shows the address instead.
document.querySelectorAll('.copy-email').forEach((button) => {
  button.addEventListener('click', async () => {
    const email = button.dataset.email;
    try {
      await navigator.clipboard.writeText(email);
      showToast(`복사했습니다: ${email}`);
    } catch {
      showToast(`이메일: ${email}`);
    }
  });
});
