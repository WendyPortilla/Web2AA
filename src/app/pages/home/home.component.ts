import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../utils/producto';
import*as productoData from '../../../../public/json/productoData.json';
//import { randomInt } from 'crypto';
function randomInt(max: number) {
  return Math.floor(Math.random() * max);
  
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export  class HomeComponent {
productos: Producto[] = (productoData as any).default;
//indicePokemonSemana: number = randomInt(0, 3); //este funciona con crypto que si funciona
indiceProductoSemana: number = randomInt(3);
  
constructor() {}
ngOnInit(): void {
  console.log(productoData);
}

}
