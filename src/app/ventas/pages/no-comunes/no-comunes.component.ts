import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  //i18nSeelct
  nombre:string='hector';
  genero:string='masculino';

  argumentoMapa={
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }

  //i18nPlural
  clientes:string[]=['Maria','Pedro','Hernando','Eduardo','Manuel'];

  clientesMapa={
    '=0':'no tenemos ningun cliente esperado',
    '=1':'tenemos 1 cliente esperando',
    '=2':'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarGenero(){
    console.log('Cambiar de genero');
    this.nombre="Yessi";
    this.genero="femenino";
  }

  borrarCliente(){

    //this.clientes= ['Pedrp','Juan'];
    this.clientes.pop();

  }


  //KeyValue Pipe
  persona={
    nombre:'Juan',
    edad:'33',
    direccion:'Mexico'
  }

  //JsonPipe
  heroes=
  [
    {
      nombre:'Superman',
      vuela:true
    },
    {
    nombre:'Robin',
    vuela:false
  },
  {
    nombre:'Aqyuaman',
    vuela:false
  }

]

//Async Pipe

  miObservable= interval(5000);  ///0,1,2,3

  valorPromesa=new Promise((resolve,reject) =>{
    
      setTimeout(()=>{
        resolve('Tenemos data de promesa');
      }, 3500);

  });


  

}
