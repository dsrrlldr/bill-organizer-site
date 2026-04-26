// Copyright year
document.getElementById('copyright-year').textContent = new Date().getFullYear()

// ── Feature tabs ───────────────────────────────────────────────────────────

const navItems = document.querySelectorAll('.cap-nav-item')
const panels   = document.querySelectorAll('.cap-detail-panel')

function setFeature(index) {
  navItems.forEach((btn, i) => btn.classList.toggle('active', i === index))
  panels.forEach((panel, i) => panel.classList.toggle('active', i === index))
}

navItems.forEach((btn, i) => btn.addEventListener('click', () => setFeature(i)))

// activate first tab on load
setFeature(0)
