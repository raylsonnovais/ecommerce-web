import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const REQUEST_MAPPING = 'products'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient){  }

  public consultaPaginada(page: any, limit:any): Observable<any> {
    const url = environment.URL_BACKEND + REQUEST_MAPPING + '/paginator' +`?page=${page}&limit=${limit}`;
    return this.http.get(encodeURI(url));
  }

  public consultaPaginadaPorNome(nome:any,page: any, limit:any): Observable<any> {
    const url = environment.URL_BACKEND + REQUEST_MAPPING + '/paginatorByName' +`?name=${nome}&page=${page}&limit=${limit}`;
    return this.http.get(encodeURI(url));
  }
}
