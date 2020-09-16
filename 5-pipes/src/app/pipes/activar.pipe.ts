import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activar'
})
export class ActivarPipe implements PipeTransform {

  transform(value: string, activar: boolean = false): string {
    // console.log(activar);
    // let resultado : string = '';
    // if (activar) {
    //   let cantidad : number = value.length;

    //   for (let index = 0; index < cantidad; index++) {
    //     resultado += '*';
        
    //   }
      
    // }
    // else {
    //   resultado = value;
    // }
    
    return (activar) ? '*'.repeat(value.length): value;
  }

}
