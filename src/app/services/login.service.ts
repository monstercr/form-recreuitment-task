import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Attributes, LoginRequestData } from '../types/LoginRequestData';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) {}

  public login<LoginRequestData>(attributes: Attributes): Observable<{}> {

    const { email, password } = attributes;

    return this.httpClient.post(`${environment.API_URL}/login`, {
      data: {
        type: 'login',
        attributes: { email, password }
      }
    })
  }
}
