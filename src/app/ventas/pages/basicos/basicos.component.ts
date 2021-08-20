import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  nombreLower:string= 'hector';
  nombreUpper:string='HECTOR';
  nombreCompleto:string='Erick Luna';

  fecha:Date=new Date();


  constructor() { }

  ngOnInit(): void {
  }

}
