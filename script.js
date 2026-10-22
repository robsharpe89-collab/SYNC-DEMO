/* ============================================================
   SYNC — static landing page behaviour (Dreamweaver-editable)
   Pure vanilla JS, no framework or build step.
   ============================================================ */

/* Map the data-icon attributes to Lucide icon names, then render.
   (Edit or replace these with your own inline SVGs in Dreamweaver if you prefer.) */
document.querySelectorAll('svg[data-icon]').forEach(function (el) {
  el.setAttribute('data-lucide', el.getAttribute('data-icon'));
});
if (window.lucide) { window.lucide.createIcons(); }

/* ---------- Auth / age-gate modal ---------- */
var authModal = document.getElementById('authModal');

function openAuth(mode) {
  switchTab(mode || 'register');
  authModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeAuth() {
  authModal.classList.remove('open');
  document.body.style.overflow = '';
}

function closeAuthOutside(event) {
  if (event.target === authModal) { closeAuth(); }
}

function switchTab(mode) {
  var isRegister = mode === 'register';
  document.getElementById('tab-register').classList.toggle('active', isRegister);
  document.getElementById('tab-login').classList.toggle('active', !isRegister);
  document.getElementById('dobField').style.display = isRegister ? 'flex' : 'none';
  document.getElementById('authSubmit').textContent = isRegister ? 'Create account' : 'Log in';
}


function fakeSubmit(event) {
  event.preventDefault();
  alert('This is a static Dreamweaver mockup — connect it to your backend to make sign-up live.');
  closeAuth();
}

function connectMusic(btn) {
  var tile = btn.parentNode;
  var name = tile.getAttribute('data-platform');
  if (tile.classList.contains('connected')) {
    tile.classList.remove('connected');
    btn.textContent = 'Connect';
    return;
  }
  btn.textContent = 'Connecting…';
  btn.disabled = true;
  setTimeout(function () {
    btn.disabled = false;
    btn.textContent = '✓ Connected';
    tile.classList.add('connected');
    alert(name + ' connected (simulated). In the full app, your top artists and playlists are added to your interests.');
  }, 1000);
}

/* Close on Escape */
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') { closeAuth(); }
});

/* Default the sign-up tab as active on load */
switchTab('register');
