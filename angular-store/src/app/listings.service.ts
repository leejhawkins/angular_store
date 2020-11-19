import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { AngularFireAuth } from '@angular/fire/auth'
import { Department, Item, Transaction, User } from './types'


const httpOption = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json',
  })
}

const httpOptionsWithAuthToken = token => ({
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'AuthToken': token
  })
})

@Injectable({
  providedIn: 'root'
})
export class ListingsService {
  user: User;
  constructor(
    private http: HttpClient,
    private auth: AngularFireAuth,
  ) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>('/api/listings')
  }
  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>('/api/departments')
  }
  getUser(): Observable<User> {
    return new Observable<User>(observer => {
      this.auth.user.subscribe(user => {
        user && user.getIdToken().then(token =>{
          if (user && token) {
            this.http.get<User>(`/api/users/${user.uid}`, httpOptionsWithAuthToken(token))
              .subscribe(user => {
                this.user = user;

              })
          } else {
            observer.next()
          }
        })
      })
    })

  }
  getItemById(id: string): Observable<Item> {
    return this.http.get<Item>(`/api/listings/${id}`)
  }
  buyProduct(id: string, price: number, name: string): Observable<Item> {
    var currentUser = this.user;
    return new Observable<Item>(observer => {
      this.auth.user.subscribe(user=> {
        user && user.getIdToken().then(token => {
          this.http.post<Item>(
            `/api/listings/${id}/buy-product`,
            {name, price, currentUser},
            httpOptionsWithAuthToken(token),
          ).subscribe(item => {
            observer.next(item)
            this.getUser();
          })
        })
       
      })
    })
  }
  getTransactionsByUser(): Observable<Transaction[]> {
    return new Observable<Transaction[]>(observer => {
      this.auth.user.subscribe(user => {
        user && user.getIdToken().then(token => {
          if (user && token) {
            this.http.get<Transaction[]>(`/api/users/${user.uid}/transactions`, httpOptionsWithAuthToken(token))
              .subscribe(transactions => {
                observer.next(transactions)

              })
          } else {
            observer.next([])
          }
        })
      })
    })
  }
  
}
