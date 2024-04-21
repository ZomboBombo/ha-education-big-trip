import AbstractView from '../framework/view/abstract-view';

function _createTemplate() {
  return `
    <p class="trip-events__msg">
      <strong>No events :(</strong>
      <span>Click «New Event» to create your first point.</span>
    </p>
  `;
}

export default class EmptyPlaceholderView extends AbstractView {
  get template() {
    return _createTemplate();
  }
}
