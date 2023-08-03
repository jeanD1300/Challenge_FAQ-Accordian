let button = document.querySelectorAll('.questions button');
let rotate = document.querySelectorAll('.questions img');
let answer = document.querySelectorAll('.answer');
let bold = document.querySelectorAll('.bold');

for (let i = 0; i < bold.length; i++) {
    bold[i].classList.remove('bold');
  }

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', function () {
    answer[i].classList.toggle('answer');
    rotate[i].style.transform = answer[i].classList.contains('answer') ? 'rotate(0deg)' : 'rotate(180deg)';
    bold[i].classList.toggle('bold');
  });
}