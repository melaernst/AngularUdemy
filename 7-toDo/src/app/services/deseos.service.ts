import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];


 constructor( private alertCtrl: AlertController) {
   this.cargarStorage();
 }


   crearLista(titulo: string){
  
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();

    return nuevaLista.id;
   }

   obtenerLista(id: string | number){
      id = Number(id);
      return this.listas.find( listaData => listaData.id === id);
   }

   guardarStorage(){
      
    localStorage.setItem('data', JSON.stringify(this.listas));

   }

   cargarStorage(){

    if( localStorage.getItem('data') ){
    this.listas = JSON.parse( localStorage.getItem('data') );
    }
    else{
      this.listas = [];
    }
   }

   borrarLista(lista: Lista){
       this.listas = this.listas.filter( listaData => listaData.id !== lista.id);
       this.guardarStorage();
   }

   async editarTitulo(lista: Lista){

    const alert = await this.alertCtrl.create({
      header: 'Editar titulo',
       inputs: [{
         value: lista.titulo,
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
        text: 'Editar',
        handler: (data) => {
          if (data.titulo.length === 0){
              return;
          }
    
          // tslint:disable-next-line: no-unused-expression
          lista.titulo = data.titulo;
          this.guardarStorage();


        },
      }
      ]
    });

    alert.present();

   }


}
