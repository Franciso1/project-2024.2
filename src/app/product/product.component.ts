import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products : Product[] = [
    { "id": 1,
      "name" : "i5",
      "price" : 100000,
      "category" : "PC"
    },
    { "id": 2,
      "name" : "i6",
      "price" : 200000,
      "category" : "PC"
    },
    { "id": 3,
      "name" : "i7",
      "price" : 300000,
      "category" : "PC"
    }
  ];
}
