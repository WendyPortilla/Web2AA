import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink,RouterLinkActive} from '@angular/router';
import {  Producto } from '../../utils/producto';
import*as productoData from '../../../../public/json/productoData.json';



@Component({
  selector: 'app-procuto',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  id: number = 0;
  productos?: Producto;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
this.route.paramMap.subscribe(
      (params) => {
        this.id=Number(params.get('id'));
        console.log(this.id);
      }
    );
   this.productos =((productoData as any).default as Producto[])
   .find((producto) => producto.id === this.id);
    
}
}
