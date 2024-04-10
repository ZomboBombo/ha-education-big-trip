import AbstractView from '../framework/view/abstract-view';

function _createTemplate() {
  return `
    <form class="trip-filters" action="#" method="get">
      <div class="trip-filters__filter">
        <input
          type="radio"
          name="trip-filter"
          value="everything"
          id="filter-everything"
          class="trip-filters__filter-input visually-hidden"
          checked
        >
        <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
      </div>

      <div class="trip-filters__filter">
        <input
          type="radio"
          name="trip-filter"
          value="future"
          id="filter-future"
          class="trip-filters__filter-input visually-hidden"
        >
        <label class="trip-filters__filter-label" for="filter-future">Future</label>
      </div>

      <div class="trip-filters__filter">
        <input
          type="radio"
          name="trip-filter"
          value="present"
          id="filter-present"
          class="trip-filters__filter-input visually-hidden"
        >
        <label class="trip-filters__filter-label" for="filter-present">Present</label>
      </div>

      <div class="trip-filters__filter">
        <input
          type="radio"
          name="trip-filter"
          value="past"
          id="filter-past"
          class="trip-filters__filter-input visually-hidden"
        >
        <label class="trip-filters__filter-label" for="filter-past">Past</label>
      </div>

      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>
  `;
}

export default class FiltersView extends AbstractView {
  get template() {
    return _createTemplate();
  }
}
