
import AbstractView from "./absctract-view.js";
const createEmptyEventList = ()=>{
  return `<p class="trip-events__msg">Нажмите "Создать событие", чтобы создать свою первую точку</p>`;
}

export default class EmptyEventList extends AbstractView{

  getTemplate(){
    return createEmptyEventList();
  }
  
}