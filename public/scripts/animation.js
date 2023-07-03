export function fadeOutAfterDelay() {
  setTimeout(function () {
    var doubleArrow = document.querySelector('.double-arrow');
    doubleArrow.classList.add('fade-out');
  }, 9000);

  setTimeout(function () {
    var arrowContainer = document.querySelector('.arrow-container');
    arrowContainer.style.opacity = '1';
  }, 7000); //
}