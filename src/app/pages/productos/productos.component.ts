import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Producto } from '../../utils/producto';
import*as productoData from '../../../../public/json/productoData.json';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  productos: Producto[] = (productoData as any).default;
  constructor(private router: Router) {}
  ngOnInit(): void {
  }
  onClickButton(): void {
    console.log(this.productos);
}
onClickProducto(producto: Producto): void {
  this.router.navigate(['/producto', producto.id]);
}
}
