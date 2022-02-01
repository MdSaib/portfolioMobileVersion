let test = document.querySelector('.menuIcon');
const openMenu = document.querySelector('#nav');
let test3 = document.querySelector('.closeIcon');

function test2() {
  openMenu.style.display = 'flex';
  test3.style.display = 'flex';
};

test.addEventListener('click', test2);

function test4() {
  openMenu.style.display = 'none';
  test3.style.display = 'none';
};
test3.addEventListener('click', test4);

