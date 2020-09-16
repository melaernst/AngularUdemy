import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { formatCurrency } from '@angular/common';
import { PaisService } from '../../services/pais.service';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: '',
    apellido: '',
    correo: '',
    pais: '',
    genero: ''
  }

  paises: any[] = [];
  constructor( private paiseService: PaisService) { }

  ngOnInit(): void {
    this.paiseService.getPaises()
        .subscribe( paises => {
         this.paises = paises;
         this.paises.unshift ({
           nombre: '[Seleccione un país]',
           codigo: ''
         })
        })
  }


  guardar(form: NgForm){

    if (form.invalid){

      Object.values( form.controls ).forEach( control => {
        control.markAsTouched();
      })

    }
      console.log(form.value)
  }
}
