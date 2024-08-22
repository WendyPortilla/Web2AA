import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { Error404Component } from './pages/error404/error404.component';
import { ProductoComponent } from './pages/producto/producto.component';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'producto/:id', component: ProductoComponent },
    { path: 'acercade', component: AcercadeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },//se suponew que no deveria tener los asteriscos
    {path: '**', component:Error404Component}
];
