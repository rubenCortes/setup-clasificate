import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Http, Response } from "@angular/http";
import { Headers, RequestOptions } from '@angular/http';

import { SubCategoria } from "../utilidades";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DatosSubCategoriaService {

  private urlSubCategoria: string = 'http://192.168.10.80:8080/AppAdmin/recursos/categoria/';
  private urlSubCategoriaCategoria: string = 'http://192.168.10.80:8080/AppAdmin/recursos/categoria/subcategoria/';

  constructor( private http: Http ) { }

  private extractData(res: Response): SubCategoria[] {
    let body = res.json();
    let datos: SubCategoria[] = body;
    return datos;
  }

  getSubCategorias(): Observable<SubCategoria[]> {
    return this.http.get(this.urlSubCategoria)
                  .map(this.extractData)
                  .catch(this.handleError);
  }

  getSubCategoriasCategoria(id: number): Observable<SubCategoria[]> {
    return this.http.get(this.urlSubCategoriaCategoria + id)
                    .map(this.extractData)
                    .catch(this.handleError);

  }

  private extractDataSingle(res: Response): SubCategoria {
    let body = res.json();
    let dato: SubCategoria = body;
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

  agregarSubCategoria(estado: SubCategoria): Observable<SubCategoria>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(estado);
    return this.http.post(this.urlSubCategoria, body, options)
                    .map(this.extractDataSingle)
                    .catch(this.handleError);
  }


  editarSubCategoria(estado: SubCategoria): Observable<SubCategoria>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(estado);
    return this.http.put(this.urlSubCategoria, body, options)
                    .map(this.extractDataSingle)
                    .catch(this.handleError);
  }

    borrarSubCategoria(id: number):Observable<SubCategoria>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(this.urlSubCategoria + id)
                    .map(this.extractDataSingle)
                    .catch(this.handleError);
  }
}
