import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent  {

  loading: boolean;
  artistas: any[] = [];
  constructor( private spotifi: SpotifyService) { 
      
  }

  buscar(termino: string){
    this.loading = true;
    this.spotifi.getArtistas (termino)
      .subscribe (( data: any) => {
         this.artistas = data;
         this.loading= false
      });
    
  }
}
