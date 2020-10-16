import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Department, Item, } from './types'

const httpOption = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  constructor(
    private http: HttpClient,
  ) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>('/api/listings')
  }
  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>('/api/departments')

  }
  getItemById(id: string): Observable<Item> {
    return this.http.get<Item>(`/api/listings/${id}`)
  }
  buyProduct(id: string): Observable<Item> {
    return this.http.post<Item>(
    `/api/listings/${id}/buy-product`,
    {},
    httpOption,
    )
  }
  
}
