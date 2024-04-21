import { getRandomTripEvent } from '../mock/trip-event-mock';

const randomTripEventsLength = Math.floor(Math.random() * 10);

export default class TripEventModel {
  #tripEvents = Array.from({length: randomTripEventsLength}, getRandomTripEvent);

  get tripEvents() {
    return this.#tripEvents;
  }
}
