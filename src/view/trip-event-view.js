import AbstractView from '../framework/view/abstract-view';
import {humanizeDate, standardizeDate, hasEventOffers} from '../utils';

function createTripEventOffersTemplate(offers) {
  return (
    `${hasEventOffers(offers) ? `<h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${Object.values(offers).map((offer) => `
          <li class="event__offer">
            <span class="event__offer-title">${offer.name}</span>
            +€&nbsp;
            <span class="event__offer-price">${offer.cost}</span>
          </li>
        `).join('')}
      </ul>` : ''}`
  );
}

function _createTemplate(data) {
  const {
    date,
    type,
    travelTime,
    offers,
  } = data;

  const humanDate = humanizeDate(date);
  const standardDate = standardizeDate(date);
  const ttStart = travelTime.start;
  const ttEnd = travelTime.end;
  const offersTemp = createTripEventOffersTemplate(offers);

  return `
    <li class="trip-events__item">
      <div class="event">
        <time class="event__date" datetime="${standardDate}">${humanDate}</time>
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${type}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${standardDate}T${ttStart}">${ttStart}</time>
            —
            <time class="event__end-time" datetime="${standardDate}T${ttEnd}">${ttEnd}</time>
          </p>
          <p class="event__duration">???</p>
        </div>
        <p class="event__price">
          €&nbsp;<span class="event__price-value">20</span>
        </p>

        ${offersTemp}

        <button class="event__favorite-btn event__favorite-btn--active" type="button">
          <span class="visually-hidden">Add to favorite</span>
          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>
          </svg>
        </button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>
  `;
}

export default class TripEventView extends AbstractView {
  constructor({tripEvent}) {
    super();
    this._tripEvent = tripEvent;
  }

  get template() {
    return _createTemplate(this._tripEvent);
  }
}
