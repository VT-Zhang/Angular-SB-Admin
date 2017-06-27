import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {
  private url = 'http://127.0.0.1:8000/api/zohocrm';
  constructor(private http: Http) {}
  public getZohoID() {
    return this.http
    .get(this.url)
    .map(res => res.json());
  }

  public getZohoAccount(id) {
    return this.http
    .get(this.url + '/' + id)
    .map(res => res.json());
  }
}

