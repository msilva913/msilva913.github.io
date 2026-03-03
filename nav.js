// nav.js — shared navigation injection
(function() {
  const path = window.location.pathname.replace(/\/$/, '') || '/index';
  const pages = [
    { href: 'index.html',     label: 'Home' },
    { href: 'research.html',  label: 'Research' },
    { href: 'teaching.html',  label: 'Teaching' },
    { href: 'cv.html',        label: 'CV' },
    { href: 'resources.html', label: 'Resources' },
    { href: 'influences.html',label: 'Influences' },
  ];

  const current = path.split('/').pop() || 'index.html';

  // Sub-pages highlight their parent nav item
  const parentMap = {
    'research-statement.html': 'research.html',
    'teaching-statement.html': 'teaching.html',
    'teaching-econ7800.html':  'teaching.html',
  };
  const activeHref = parentMap[current] || current;

  const navHTML = `
  <nav>
    <div class="nav-inner">
      <a class="nav-name" href="index.html">Mario Rafael Silva</a>
      <button class="nav-toggle" aria-label="Toggle menu" onclick="this.nextElementSibling.classList.toggle('open')">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-links">
        ${pages.map(p => `<li><a href="${p.href}"${activeHref === p.href ? ' class="active"' : ''}>${p.label}</a></li>`).join('')}
      </ul>
    </div>
  </nav>`;

  const footerHTML = `
  <footer>
    <div class="footer-inner">
      <p>Mario Rafael Silva &mdash; Assistant Professor, Hong Kong Baptist University</p>
      <p><a href="mailto:msilva913@hkbu.edu.hk">msilva913@hkbu.edu.hk</a></p>
    </div>
  </footer>`;

  document.currentScript.insertAdjacentHTML('beforebegin', navHTML);
  document.addEventListener('DOMContentLoaded', function() {
    document.body.insertAdjacentHTML('beforeend', footerHTML);
  });
})();
