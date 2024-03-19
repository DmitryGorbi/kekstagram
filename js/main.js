const form = document.querySelector('.img-upload__form');
console.log(Object.entries(form));

function getMaxLength(str, maxLength) {
  return str.length <= maxLength ? true : false;
}

alert(getMaxLength('Привет!', 6));

function getRandomInteger(min = 0, max = 5) {
  const random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
}

console.log(getRandomInteger());
