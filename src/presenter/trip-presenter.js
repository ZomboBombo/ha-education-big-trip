// Utils
import { render } from '../framework/render';

// Views
import TripEventsListView from '../view/trip-events-list-view';
import TripEventView from '../view/trip-event-view';
import SortView from '../view/sort-view';
import FormCreateView from '../view/form-create-view';
import FormEditView from '../view/form-edit-view';

export default class TripPresenter {
  _tripEventsListComponent = new TripEventsListView();

  constructor ({tripContainer, tripEventModel, formEditModel}) {
    this._container = tripContainer;
    this._teModel = tripEventModel;
    this._feModel = formEditModel;
  }

  init() {
    this.tripEvents = [...this._teModel.getTripEvents()];

    render(this._tripEventsListComponent, this._container);
    render(new SortView(), this._tripEventsListComponent.element);
    render(new FormCreateView(), this._tripEventsListComponent.element);

    for (let i = 0; i < this.tripEvents.length; i++) {
      render(new TripEventView({tripEvent: this.tripEvents[i]}), this._tripEventsListComponent.element);
    }

    render(new FormEditView({formEditData: this._feModel.getData()}), this._tripEventsListComponent.element);
  }
}
