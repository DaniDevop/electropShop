import { Component } from '@angular/core';
import { CourouselComponent } from '../../pages/courousel/courousel.component';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [CourouselComponent],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent {

}
