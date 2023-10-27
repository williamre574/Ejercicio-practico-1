import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ListUserService {
  constructor(private http: HttpClient) {}

  getUser() {
    const url = environment.getUser;
    return this.http.get(url);
  }

  getDate() {
    const url = environment.getDate;
    return this.http.get(url);
  }
  getPost(){
    const url = environment.getPost;
    return this.http.get(url);
  }
  getCommet(){
    const url = environment.getComments;
    return this.http.get(url);
  }
}
