const form = document.querySelector('.img-upload__form');
console.log(Object.entries(form));

function getMaxLength(str, maxLength) {
  return str.length <= maxLength ? true : false;
}

alert(getMaxLength('Привет!', 6));
