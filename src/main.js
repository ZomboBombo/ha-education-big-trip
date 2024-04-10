// Utils
import { render } from './framework/render';

// Views
import FiltersView from './view/filters-view';
import TripPresenter from './presenter/trip-presenter';
import TripEventModel from './model/trip-event-model';
import FormEditModel from './model/form-edit-model';

const filtersContainer = document.querySelector('[data-filters="container"]');
const tripContainer = document.querySelector('[data-trip="container"]');
const tripEventModel = new TripEventModel();
const formEditModel = new FormEditModel();
const tripPresenter = new TripPresenter({tripContainer, tripEventModel, formEditModel});


/**
 * Рендер блока Фильтров:
 * находится вне Презентера, т.к. отрисовывается
 * внутри Хедера, а не внутри блока ".trip-events".
*/
render(new FiltersView(), filtersContainer);


/**
 * Отрисовка всех основных компонентов
 * с помощью Презентера.
*/
tripPresenter.init();
