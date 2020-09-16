import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';

import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Lista } from '../../models/lista.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  listas: Lista[] = [];

  constructor( public deseosSerivce: DeseosService, private router: Router, private alertCtrl: AlertController) {

  }

  async agregarLista(){

    const alert = await this.alertCtrl.create({
      header: 'Nueva lista',
       inputs: [{
         name: 'titulo',
         type: 'text',
         placeholder: 'Nombre de la lista'
       }
    ],
      buttons: [
        {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Cancelar');
        }
      },
      {
        text: 'Crear',
        handler: (data) => {
          if (data.titulo.length === 0){
              return;
          }
        
          const listaId = this.deseosSerivce.crearLista(data.titulo);
          console.log(listaId);
          this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);

        },
      }
      ]
    });

    alert.present();
  }

  


}
