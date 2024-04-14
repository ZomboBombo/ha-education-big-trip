// Utils
import { render, replace } from '../framework/render';

// Views
import TripEventsListView from '../view/trip-events-list-view';
import TripEventView from '../view/trip-event-view';
import SortView from '../view/sort-view';
import TripEditFormView from '../view/trip-edit-form-view';

export default class TripPresenter {
  #tripEventsListComponent = new TripEventsListView();
  #container = null;
  #teModel = null;
  #feModel = null;

  constructor({ tripContainer, tripEventModel, formEditModel }) {
    this.#container = tripContainer;
    this.#teModel = tripEventModel;
    this.#feModel = formEditModel;
  }

  init() {
    this.tripEvents = [...this.#teModel.getTripEvents()];

    render(this.#tripEventsListComponent, this.#container);
    render(new SortView(), this.#tripEventsListComponent.element);

    for (let i = 0; i < this.tripEvents.length; i++) {
      this.#renderTripEvent(this.tripEvents[i]);
    }
  }

  #renderTripEvent(tripEvent) {
    const escKeyDownhandler = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        replaceFormToEvent();
        document.removeEventListener('keydown', escKeyDownhandler);
      }
    };

    const tripEventComponent = new TripEventView({
      tripEvent,
      editClickHandler: () => {
        replaceEventToForm();
        document.addEventListener('keydown', escKeyDownhandler);
      },
    });

    const tripEditEventComponent = new TripEditFormView({
      formEditData: this.#feModel.getData(),
      submitFormHandler: () => {
        replaceFormToEvent();
        document.removeEventListener('keydown', escKeyDownhandler);
      },
    });

    function replaceEventToForm() {
      replace(tripEditEventComponent, tripEventComponent);
    }

    function replaceFormToEvent() {
      replace(tripEventComponent, tripEditEventComponent);
    }

    render(tripEventComponent, this.#tripEventsListComponent.element);
  }
}
