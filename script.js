document.addEventListener("DOMContentLoaded", () => {
  const colorBox = document.querySelector('.color-box');

  function startAnimation() {
    colorBox.style.color = 'lightgreen';
    setTimeout(() => {
      colorBox.style.color = 'white'; 
      setTimeout(startAnimation, 2000); 
    }, 1000); 
  }

  startAnimation(); 
});
