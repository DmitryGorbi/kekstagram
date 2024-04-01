function checkStringLength(str, maxLength) {
  return str.length <= maxLength ? true : false;
}

// alert(checkStringLength('Привет!', 6));

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

// function compareNumbers(a, b) {
//   return a - b;
// }

// const getUniqueNumber = () => {
//   const array = [];
//   let i = 0;
//   while (i <= 24) {
//     const j = getRandomInteger(1, 25);
//     if (array.includes(j)) {
//       continue;
//     }
//     array[i] = j;
//     i++;
//   }
//   return array.sort(compareNumbers);
// };

const array = [];
const addElementToArray = () => {
  const id = 1;
  const count = array.push(id);
  return count;
};

const createImage = () => ({
  id: addElementToArray(),
  description: 'Описание придумайте самостоятельно.',
  likes: getRandomInteger(15, 200),
});

const createImagesList = Array.from({ length: 25 }, createImage);

console.log(createImagesList);

const object1 = {
  a: 'somestring',
  b: 42,
};

for (const key in object1) {
  console.log(object1[key]);
}
