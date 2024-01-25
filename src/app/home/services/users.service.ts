import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponseInfoUser, ApiResponseRegisterUser, ApiResponseSearchUser, UserInfo } from '../interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // Variables
  urlApi = "http://127.0.0.1:5000";
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': '*/*',
    'Access-Control-Request-Header': 'Content-type',
    'Access-Control-Allow-Origin': '*'
  });

  constructor(
    private http: HttpClient
  ) { }

  //Método que consume el servicio para obtener los datos del usuario
  getInfoUser(): Observable<ApiResponseInfoUser> {
    return this.http.get<ApiResponseInfoUser>(this.urlApi + `/users`);
  }

  //Método que consume el servicio para buscar y listar un usuario por el número de cedula
  getUserByAccountNumber(accountNumber: string): Observable<ApiResponseSearchUser> {
    return this.http.get<ApiResponseSearchUser>(this.urlApi + `/users/${accountNumber}`);
  }

  //Método que consume el servicio para registrar un nuevo usuario
  registerNewUser(body: UserInfo): Observable<ApiResponseRegisterUser> {
    return this.http.post<ApiResponseRegisterUser>(this.urlApi + `/users`, body);
  }
}
