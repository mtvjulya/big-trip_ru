import AbstractView from "./absctract-view";
import { SortType } from "../utils/const"; 
const createSortElement = (currrentSortType)=>{
  return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      <div class="trip-sort__item  trip-sort__item--day">
        <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" data-sort-type="${SortType.DEFAULT}" ${currrentSortType === SortType.DEFAULT ? 'checked' : ''}>
        <label class="trip-sort__btn" for="sort-day">День</label>
      </div>

      <div class="trip-sort__item  trip-sort__item--event">
        <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>
        <label class="trip-sort__btn" for="sort-event">Событие</label>
      </div>

      <div class="trip-sort__item  trip-sort__item--time">
        <input id="sort-time" class="trip-sort__input visually-hidden" type="radio" name="trip-sort" value="sort-time" data-sort-type="${SortType.TIME}" ${currrentSortType === SortType.TIME ? 'checked' : ''}>
        <label class="trip-sort__btn" for="sort-time">Время</label>
      </div>

      <div class="trip-sort__item  trip-sort__item--price">
        <input id="sort-price" class="trip-sort__input visually-hidden" type="radio" name="trip-sort" value="sort-price" data-sort-type="${SortType.PRICE}" ${currrentSortType === SortType.PRICE ? 'checked' : ''}>
        <label class="trip-sort__btn" for="sort-price">Цена</label>
      </div>

      <div class="trip-sort__item  trip-sort__item--offer">
        <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>
        <label class="trip-sort__btn" for="sort-offer">Предложения</label>
      </div>
    </form>`;
};
export default class Sort extends AbstractView{
  constructor(currrentSortType) {
    super();
    this._currrentSortType = currrentSortType;
    this._sortTypeChangeHandler = this._sortTypeChangeHandler.bind(this);
  }
  getTemplate(){
   return createSortElement(this._currrentSortType);
  }
  _sortTypeChangeHandler(evt){
    if(evt.target.tagName !== 'INPUT'){
      return;
    }
    
    this.getElement().querySelector(`input[data-sort-type='${evt.target.dataset.sortType}']`).checked = true;

    // evt.preventDefault();
    this._callback.sortTypeChangeHandler(evt.target.dataset.sortType);
  }
  setSortTypeChangeHandler(callback){
    this._callback.sortTypeChangeHandler = callback;
    this.getElement().addEventListener('click', this._sortTypeChangeHandler);
  }
} 