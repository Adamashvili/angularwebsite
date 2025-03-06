import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private service: ApiService) {
    this.showAll()
  }

  public allFoods:any[] = []

  showAll() {
    this.service.getAllProducts().subscribe( {
      next: (data:any) => this.allFoods = data,
      error: () => {}
    } )
  }
}
