import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  listas: Lista[] = [];

  constructor( public deseosSerivce: DeseosService ) {

    const lista1 = new Lista('Recolectar piedras del infinito');
    const lista2 = new Lista ('Heroes a desaparecer');

    this.listas.push(lista1, lista2);

  }

  
    
}
