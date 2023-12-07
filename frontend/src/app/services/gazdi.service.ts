import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gazdi } from '../models/gazdi.model';

const baseUrl = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root',
})
export class GazdiService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Gazdi[]> {
    return this.http.get<Gazdi[]>(baseUrl+"/gazda");
  }

  get(id: any): Observable<Gazdi> {
    return this.http.get<Gazdi>(`${baseUrl}/gazda/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl+"/gazda/create", data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/gazda/${id}/update`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/gazda/${id}/delete`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl + "/gazda/deleteAll");
  }
}
