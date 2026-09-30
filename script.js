'use strict';
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu() { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; nav.classList.toggle('open', open); toggle.setAttribute('aria-expanded', String(open)); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if(event.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); toggle.focus(); } });
document.addEventListener('click', event => { if(!event.target.closest('.header')) closeMenu(); });
window.matchMedia('(min-width: 761px)').addEventListener('change', event => { if(event.matches) closeMenu(); });
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting) {entry.target.classList.remove('is-pending');observer.unobserve(entry.target);} }), {threshold:0.06});
  document.querySelectorAll('.reveal').forEach(element => { element.classList.add('is-pending'); observer.observe(element); });
}
document.querySelectorAll('[data-inquiry]').forEach(link => link.addEventListener('click', () => {document.querySelector('#service').value = 'Project demo'; document.querySelector('#message').value = 'Hi Ali & Aliya, I would like to arrange a walkthrough of the ' + link.dataset.inquiry + '.';}));
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if(!form.reportValidity()) return;
  const data = new FormData(form);
  const name = String(data.get('name')).trim();
  const message = String(data.get('message')).trim();
  if(!name || !message) {document.querySelector('#form-status').textContent = 'Please add your name and a short message.'; return;}
  const subject = 'Project inquiry: ' + data.get('service');
  const body = 'Hi Ali & Aliya,\n\n' + message + '\n\nService: ' + data.get('service') + '\nName: ' + name + '\nReply to: ' + data.get('email');
  const url = 'mailto:aliya.nyahoo@gamil.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  const fallback = document.querySelector('#email-fallback'); fallback.href = url; fallback.hidden = false;
  document.querySelector('#form-status').textContent = 'Your draft is ready. Your email app should open; the message has not been sent. You can also contact us using WhatsApp.';
  window.location.href = url;
});

// Keep the service strip readable without JavaScript or when motion is reduced.
const serviceStrip = document.querySelector('.expertise-strip');
const serviceMotion = document.querySelector('.expertise-motion');
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
function updateServiceMotion() {
  serviceStrip.classList.toggle('is-animated', !motionPreference.matches);
  serviceMotion.hidden = motionPreference.matches;
}
serviceMotion.addEventListener('click', () => {
  const paused = serviceStrip.dataset.paused !== 'true';
  serviceStrip.dataset.paused = String(paused);
  serviceMotion.setAttribute('aria-pressed', String(paused));
  serviceMotion.setAttribute('aria-label', paused ? 'Resume scrolling services' : 'Pause scrolling services');
});
motionPreference.addEventListener('change', updateServiceMotion);
updateServiceMotion();

// Browse two projects at a time on desktop and one on mobile, or open the full grid.
const projectGrid = document.querySelector('#project-grid');
const projectCards = Array.from(projectGrid.querySelectorAll(':scope > .project'));
const projectToolbar = document.querySelector('.projects-toolbar');
const projectNavigation = document.querySelector('.project-navigation');
const allProjectsToggle = document.querySelector('#all-projects-toggle');
const allProjectsLabel = document.querySelector('.projects-toggle-label');
const projectStatus = document.querySelector('#project-status');
const projectMobile = window.matchMedia('(max-width: 760px)');
let projectPage = 0;
let showAllProjects = false;

function projectsPerPage() { return projectMobile.matches ? 1 : 2; }
function renderProjects() {
  const pageSize = projectsPerPage();
  const pageCount = Math.ceil(projectCards.length / pageSize);
  projectPage = ((projectPage % pageCount) + pageCount) % pageCount;
  const firstProject = projectPage * pageSize;
  projectCards.forEach((card, index) => {
    const visible = showAllProjects || (index >= firstProject && index < firstProject + pageSize);
    card.hidden = !visible;
    if (visible) card.classList.remove('is-pending');
  });
  allProjectsToggle.setAttribute('aria-expanded', String(showAllProjects));
  allProjectsLabel.textContent = showAllProjects ? 'Show Fewer Projects' : 'View All Projects';
  projectNavigation.hidden = showAllProjects || pageCount < 2;
  projectStatus.textContent = showAllProjects
    ? 'Showing all ' + projectCards.length + ' projects.'
    : 'Showing projects ' + (firstProject + 1) + ' to ' + Math.min(firstProject + pageSize, projectCards.length) + ' of ' + projectCards.length + '.';
}
document.querySelector('#previous-projects').addEventListener('click', () => {
  projectPage -= 1;
  renderProjects();
});
document.querySelector('#next-projects').addEventListener('click', () => {
  projectPage += 1;
  renderProjects();
});
allProjectsToggle.addEventListener('click', () => {
  showAllProjects = !showAllProjects;
  if (!showAllProjects) projectPage = 0;
  renderProjects();
});
projectMobile.addEventListener('change', () => {
  projectPage = 0;
  renderProjects();
});
projectGrid.classList.add('carousel-ready');
projectToolbar.hidden = false;
renderProjects();
