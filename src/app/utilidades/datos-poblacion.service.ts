import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Http, Response } from "@angular/http";
import { Headers, RequestOptions } from '@angular/http';

import { Poblacion } from "../utilidades";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DatosPoblacionService {

  private urlPoblacion: string = 'http://192.168.10.80:8080/AppAdmin/recursos/poblacion/';
  private urlPoblacionEstado: string = 'http://192.168.10.80:8080/AppAdmin/recursos/poblacion/estado/';

  constructor( private http: Http ) { }

  private extractData(res: Response): Poblacion[] {
    let body = res.json();
    let datos: Poblacion[] = body;
    return datos;
  }

  getPoblaciones(): Observable<Poblacion[]> {
    return this.http.get(this.urlPoblacion)
                  .map(this.extractData)
                  .catch(this.handleError);
  }

  getPoblacionesEstado(id: number): Observable<Poblacion[]> {
    return this.http.get(this.urlPoblacionEstado + id)
                    .map(this.extractData)
                    .catch(this.handleError);

  }

  private extractDataSingle(res: Response): Poblacion {
    let body = res.json();
    let dato: Poblacion = body;
    return dato;
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

  agregarPoblacion(estado: Poblacion): Observable<Poblacion>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(estado);
    return this.http.post(this.urlPoblacion, body, options)
                    .map(this.extractDataSingle)
                    .catch(this.handleError);
  }


  editarPoblacion(estado: Poblacion): Observable<Poblacion>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(estado);
    return this.http.put(this.urlPoblacion, body, options)
                    .map(this.extractDataSingle)
                    .catch(this.handleError);
  }

    borrarPoblacion(id: number):Observable<Poblacion>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(this.urlPoblacion + id)
                    .map(this.extractDataSingle)
                    .catch(this.handleError);
  }
}
