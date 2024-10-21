import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

//hoy es local storage, manana mongobd o sqllite.
export class PersistenceService {

  constructor() { }

  setItem(key:string,value:any):void{
    localStorage.setItem(key,JSON.stringify(value));
  }

  getItem(key:string) {
    const storadgeItem = localStorage.getItem(key);
    if(storadgeItem){
      return JSON.parse(storadgeItem);
    }else{
      return null;
    }
  }

  removeItem(key:string):void {
    localStorage.removeItem(key);
  }

  removeAll(){
    localStorage.clear();
  }

}
