// Example: Dark mode toggle
/*const toggleButton = document.createElement('button');
toggleButton.innerText = 'Toggle Dark Mode';
document.body.prepend(toggleButton);

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});*/

//All links are new tab (rather than replacement)
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('a[href^="http"]').forEach(link => {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
  });
});
