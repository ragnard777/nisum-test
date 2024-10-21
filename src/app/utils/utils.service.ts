import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  validarRespuesta(respuesta:any) {
    if(typeof respuesta === undefined || typeof respuesta === null || respuesta === ""){
      return false;
    }
    return true;
  }



}
