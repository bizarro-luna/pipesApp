import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent  {

  

  prueba:string='hola';
  ordenarPor:string='nombre';
  enMayusculas:boolean=false;

  heroes:Heroe[]=[
    {
      nombre:'Superman',
      vuela:true,
      color:Color.azul
    },
    {
      nombre:'Batman',
      vuela:false,
      color:Color.negro
    },
    {
      nombre:'Robin',
      vuela:false,
      color:Color.verde
    },
    {
      nombre:'DeadDervil',
      vuela:false,
      color:Color.rojo
    },
    {
      nombre:'Linterna Verde',
      vuela:true,
      color:Color.verde
    }
  ];


  cambiarMayusculas():void{

    this.enMayusculas=!this.enMayusculas;
  }

  
  cambiarOrden(valor:string){
    this.ordenarPor=valor;
    
  }

}
