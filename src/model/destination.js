import Observer from "../utils/observer";
export default class Destinations extends Observer {
  constructor() {
    super();
    this._destinations = [];
  }

  setDestinations(updateType, destinations) {
    this._destinations = destinations;
    this._notify(updateType);
  }

  getDestinations() {
    return this._destinations;
  }
}