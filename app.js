let container = document.querySelector('.container');
let toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.onclick = function () {
  container.classList.toggle('active');
};
