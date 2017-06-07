import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Http, Response } from "@angular/http";
import { Headers, RequestOptions } from '@angular/http';

import { Pais } from "../utilidades";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class DatosPaisService {
  //private datosPais: string = 'http://192.168.10.80:8080/Principal/recursos/servicio/queso/';
  //private datosPais: string = 'http://192.168.10.80:8080/AppDemo/recursos/pais/';
  private datosPais: string = 'http://192.168.10.80:8080/AppClasificateAdmin/recursos/pais/';

  constructor( private http: Http ) { }

  private extractData(res: Response): Pais[] {
    let body = res.json();
    let datos: Pais[] = body;
    datos.forEach(element => {
      if(element.idPais == 1){
        alert(element.estadoRegionList);
      }
    });

    //alert(datos[1].nombre);
    return datos;
  }

  getPaises(): Observable<Pais[]> {
    return this.http.get(this.datosPais)
                  .map(this.extractData)
                  .catch(this.handleError);
  }

  private extractDataSingle(res: Response): Pais {
    let body = res.json();
    let dato: Pais = body;
    return dato;
  }

  getPais(id: number): Observable<Pais> {
    return this.http.get(this.datosPais + id)
                  .map(this.extractDataSingle)
                  .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  agregarPais(pais: Pais): Observable<Pais>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    //alert(pais.nombre) ;
    let body = JSON.stringify(pais);
    return this.http.post(this.datosPais, body, options)
                    .map(this.extractDataSingle)
                    .catch(this.handleError);
  }


  editarPais(pais: Pais): Observable<Pais>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    //alert(pais.nombre) ;
    let body = JSON.stringify(pais);
    return this.http.put(this.datosPais, body, options)
                    .map(this.extractDataSingle)
                    .catch(this.handleError);
  }

}
