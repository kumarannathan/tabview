/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollpos = window.scrollY;
window.onscroll = function() {
    let currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-85px";
    }
    prevScrollpos = currentScrollPos;
}




const readMoreContainers = document.querySelectorAll('.read-more-container');

readMoreContainers.forEach(container => {
  const readMoreBtn = container.querySelector('.read-more-btn');
  const readMoreText = container.querySelector('.read-more-text');

  readMoreBtn.addEventListener('click', () => {
    if (readMoreText.style.display === 'none' || readMoreText.style.display === '') {
      readMoreText.style.display = 'block';
      readMoreBtn.textContent = 'Read Less...';
    } else {
      readMoreText.style.display = 'none';
      readMoreBtn.textContent = 'Read More...';
    }
  });
});
