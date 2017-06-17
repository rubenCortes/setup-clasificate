import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Http, Response } from "@angular/http";
import { Headers, RequestOptions } from '@angular/http';

import { Categoria } from "../utilidades";


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DatosCategoriaService {
 private datosCategoria: string = 'http://192.168.10.80:8080/AppAdmin/recursos/categoria/';

  constructor( private http: Http ) { }

  private extractData(res: Response): Categoria[] {
    let body = res.json();
    let datos: Categoria[] = body;

    return datos;
  }

  getCategorias(): Observable<Categoria[]> {
    return this.http.get(this.datosCategoria)
                  .map(this.extractData)
                  .catch(this.handleError);
  }

  private extractDataSingle(res: Response): Categoria {
    let body = res.json();
    let dato: Categoria = body;
    return dato;
  }

  getCategoria(id: number): Observable<Categoria> {
    return this.http.get(this.datosCategoria + id)
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

  agregarCategoria(pais: Categoria): Observable<Categoria>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(pais);
    return this.http.post(this.datosCategoria, body, options)
                    .map(this.extractDataSingle)
                    .catch(this.handleError);
  }


  editarCategoria(pais: Categoria): Observable<Categoria>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(pais);
    alert(body);
    return this.http.put(this.datosCategoria, body, options)
                    .map(this.extractDataSingle)
                    .catch(this.handleError);
  }

  borrarCategoria(id: number):Observable<Categoria>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(this.datosCategoria + id)
                    .map(this.extractDataSingle)
                    .catch(this.handleError);
  }
}
