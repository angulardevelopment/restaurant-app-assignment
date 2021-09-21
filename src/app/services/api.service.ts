import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http?: HttpClient) { }


    getService(url: string) {

      return this.http.get<any>(environment.baseUrl + url).pipe(map(res => {
        return res;
      })
      );
    }
}
