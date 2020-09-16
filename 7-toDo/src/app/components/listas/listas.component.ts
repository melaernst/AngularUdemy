import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';
import { Router } from '@angular/router';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @ViewChild( IonList) lista: IonList;
  @Input() terminada = true;
  constructor(public deseosSerivce: DeseosService, private router: Router) {}

  ngOnInit() {}

  listaSeleccionada(lista: Lista){
    const listaId = lista.id;
    if (this.terminada){
    this.router.navigateByUrl(`/tabs/tab2/agregar/${listaId}`);
    }
    else {
     this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);
    }
  }

  borrarLista(lista: Lista){
      this.deseosSerivce.borrarLista(lista);
  }

  editarTitulo(lista: Lista){
    this.deseosSerivce.editarTitulo(lista);
    this.lista.closeSlidingItems();
}

  

}
