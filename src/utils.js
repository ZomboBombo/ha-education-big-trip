import dayjs from 'dayjs';

const CNST_DATE_HUMAN_FORMAT = 'MMM DD';
const CNST_DATE_STANDARD_FORMAT = 'YYYY-MM-DD';

function humanizeDate(date) {
  return date
    ? dayjs(date).format(CNST_DATE_HUMAN_FORMAT)
    : '';
}

function standardizeDate(date) {
  return date
    ? dayjs(date).format(CNST_DATE_STANDARD_FORMAT)
    : '';
}

function hasEventOffers(teOffers) {
  return Object.values(teOffers).some(Boolean);
}

function getRandomArrElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/***
 * [Временная ф-ция]
 * ~~~
 *
 * Получение случайного
 * 4-х значного числа — "хеша".
 *
 * Для генерации случайных ID- и name-атрибутов
 * для полей.
 *
 * Будет использоваться до тех пор, пока не настроена
 * логика работы форм Создания и Редактирования
 * точек маршрута.
*/
function getHashCode() {
  return Math.floor((Math.random() * 9000) + 999);
}

export {
  getRandomArrElement,
  getHashCode,
  humanizeDate,
  standardizeDate,
  hasEventOffers,
};
