import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Http, Response } from "@angular/http";
import { Headers, RequestOptions } from '@angular/http';

import { EstadoRegion } from "../utilidades";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DatosEstadoRegionService {
  private urlEstadoRegion: string = 'http://192.168.10.80:8080/AppAdmin/recursos/estadoregion/';
  private urlEstadoRegionPais: string = 'http://192.168.10.80:8080/AppAdmin/recursos/estadoregion/pais/';

  constructor( private http: Http ) { }

  private extractData(res: Response): EstadoRegion[] {
    let body = res.json();
    let datos: EstadoRegion[] = body;
    return datos;
  }

  getEstados(): Observable<EstadoRegion[]> {
    return this.http.get(this.urlEstadoRegion)
                  .map(this.extractData)
                  .catch(this.handleError);
  }

  getEstadosPais(id: number): Observable<EstadoRegion[]> {
    let urlDatos: string = this.urlEstadoRegionPais + id;
    return this.http.get(this.urlEstadoRegionPais + id)
                    .map(this.extractData)
                    .catch(this.handleError);

  }

  private extractDataSingle(res: Response): EstadoRegion {
    let body = res.json();
    let dato: EstadoRegion = body;
    return dato;
  }

  getEstado(id: number): Observable<EstadoRegion> {
    return this.http.get(this.urlEstadoRegion + id)
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

  agregarEstadoRegion(estado: EstadoRegion): Observable<EstadoRegion>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(estado);
    return this.http.post(this.urlEstadoRegion, body, options)
                    .map(this.extractDataSingle)
                    .catch(this.handleError);
  }


  editarEstado(estado: EstadoRegion): Observable<EstadoRegion>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(estado);
    return this.http.put(this.urlEstadoRegion, body, options)
                    .map(this.extractDataSingle)
                    .catch(this.handleError);
  }

    borrarEstado(id: number):Observable<EstadoRegion>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(this.urlEstadoRegion + id)
                    .map(this.extractDataSingle)
                    .catch(this.handleError);
  }

}
