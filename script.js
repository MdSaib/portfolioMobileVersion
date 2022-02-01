let test = document.querySelector('.menuIcon');
const openMenu = document.querySelector('#nav');

function test2() {
  openMenu.style.display = 'flex';
};

test.addEventListener('click', test2);

let test3 = document.querySelector('.closeIcon');

function test4() {
  openMenu.style.display = 'none';
};
test3.addEventListener('click', test4);