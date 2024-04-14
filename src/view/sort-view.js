import AbstractView from '../framework/view/abstract-view';

function _createTemplate() {
  return `
    <form class="trip-events__trip-sort trip-sort" action="#" method="get">
      <div class="trip-sort__item trip-sort__item--day">
        <input
          type="radio"
          name="trip-sort"
          value="sort-day"
          id="sort-day"
          class="trip-sort__input visually-hidden"
        >
        <label class="trip-sort__btn" for="sort-day">Day</label>
      </div>

      <div class="trip-sort__item trip-sort__item--event">
        <input
          type="radio"
          name="trip-sort"
          value="sort-event"
          id="sort-event"
          class="trip-sort__input visually-hidden"
          disabled
        >
        <label class="trip-sort__btn" for="sort-event">Event</label>
      </div>

      <div class="trip-sort__item trip-sort__item--time">
        <input
          type="radio"
          name="trip-sort"
          value="sort-time"
          id="sort-time"
          class="trip-sort__input visually-hidden"
        >
        <label class="trip-sort__btn" for="sort-time">Time</label>
      </div>

      <div class="trip-sort__item trip-sort__item--price">
        <input
          type="radio"
          name="trip-sort"
          value="sort-price"
          id="sort-price"
          class="trip-sort__input visually-hidden"
          checked
        >
        <label class="trip-sort__btn" for="sort-price">Price</label>
      </div>

      <div class="trip-sort__item trip-sort__item--offer">
        <input
          type="radio"
          name="trip-sort"
          value="sort-offer"
          id="sort-offer"
          class="trip-sort__input visually-hidden"
          disabled
        >
        <label class="trip-sort__btn" for="sort-offer">Offers</label>
      </div>
    </form>
  `;
}

export default class SortView extends AbstractView {
  get template() {
    return _createTemplate();
  }
}
