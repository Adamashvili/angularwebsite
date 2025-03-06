import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Products } from '../products';

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

  public allFoods:Products[] = []

  showAll() {
    this.service.getAllProducts().subscribe( {
      next: (data:Products[]) => this.allFoods = data,
      error: () => {}
    } )
  }
}
