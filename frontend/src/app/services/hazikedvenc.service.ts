import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Hazikedvenc} from "../models/hazikedvenc.model";

const baseUrl = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root',
})
export class HazikedvencService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Hazikedvenc[]> {
    return this.http.get<Hazikedvenc[]>(baseUrl+"/hazikedvenc");
  }

  get(id: any): Observable<Hazikedvenc> {
    return this.http.get<Hazikedvenc>(`${baseUrl}/hazikedvenc/${id}`);
  }

  create(gazdaID: any, data: any): Observable<any> {
    return this.http.post(`${baseUrl}/hazikedvenc/create/${gazdaID}`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/hazikedvenc/${id}/update`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/hazikedvenc/${id}/delete`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl + "/hazikedvenc/deleteAll");
  }

}
