import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <!-- <p [ngStyle]="{ 'font-size': tamano + 'px' }" > -->
    <p [style.fontSize.px]="tamano">
     Hola mundo... esta es una etiqueta
    </p>
  
    <button class="btn btn-primary" (click)="tamano = tamano +  5">
      <i class="fa fa-plus"></i>
    </button>
      &nbsp;
    <button class="btn btn-primary" (click)="tamano = tamano - 5">
      <i class="fa fa-minus"></i>
    </button>

  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {


  // tslint:disable-next-line: no-inferrable-types
  tamano: number = 20;
  
  constructor() { }

  ngOnInit(): void {
  }

}
