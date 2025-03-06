import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public loader: BehaviorSubject<boolean> = new BehaviorSubject(false)

  startLoading() {
    this.loader.next(true)
  }

  stopLoading() {
    this.loader.next(false)
  }

  getAllProducts() {
    return this.http.get("https://restaurant.stepprojects.ge/api/Products/GetAll")
  }

}
