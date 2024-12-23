import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpTestServiceService {

  constructor(private httpClient: HttpClient) { }

  login(body: any) {
    return this.httpClient.post<any>("http://localhost:3000/api/auth/login", body)
  }

  getUsers() {
    const token = localStorage.getItem("token")

    if (!token) {
      throw new Error('No authentication token found');
    }

    const headers = { Authorization: token };
    return this.httpClient.get<any>("http://localhost:3000/api/users", { headers })
  }


}
