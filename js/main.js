function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}

// alert(checkStringLength('Привет!', 1));

function getRandomInteger(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));

  const random = lower + Math.random() * (upper + 1 - lower);
  return Math.floor(random);
}

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

function makeCounter() {
  let currentCount = 1;

  return function () {
    return currentCount++;
  };
}

const counterId = makeCounter(); // (*)
const counterUrl = makeCounter();
const counterIdComment = makeCounter();

const getRandomArrayElement = function (elements) {
  return elements[getRandomInteger(0, elements.length - 1)];
};

const createComment = function () {
  return {
    id: counterIdComment(),
    avatar: 'img/avatar-' + getRandomInteger(1, 6) + '.svg',
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES) + ' ' + getRandomArrayElement(SURNAMES),
  };
};

const createImage = function () {
  return {
    id: counterId(),
    url: 'photos/' + counterUrl(),
    description: 'Описание придумайте самостоятельно.',
    likes: getRandomInteger(15, 200),
    comments: Array.from({ length: getRandomInteger(0, 10) }, createComment),
  };
};

const createImagesList = Array.from({ length: 25 }, createImage);

console.log(createImagesList);
