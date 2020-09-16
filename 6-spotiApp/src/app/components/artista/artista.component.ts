import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent {

  loading : boolean;
  artista: any;
  topTracks: any;
  constructor( private router: ActivatedRoute,
              private spotify: SpotifyService ){ 
      
    this.loading = true;
    this.router.params.subscribe( params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    })
    
  }

  getArtista( id : string){
  this.spotify.getArtista(id)
        .subscribe( (artista: any) => {
         
          this.artista = artista;
          this.loading = false;
          console.log(this.artista);
  })}


  getTopTracks (id: string) {
    this.spotify.getTopTracks(id)
        .subscribe( (topTracks: any) => {
        this.topTracks = topTracks;
        console.log(topTracks);
    })}
}
