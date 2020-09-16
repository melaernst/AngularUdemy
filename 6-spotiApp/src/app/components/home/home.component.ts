import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  
  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensaje: string;

  constructor( private http: HttpClient, private spotify : SpotifyService) { 

    this.loading = true;
    this.error = false;
    this.mensaje = '';

  }

  ngOnInit(): void {
    this.spotify.getNewReleases()
        .subscribe( (data: any) => {
          this.nuevasCanciones = data;
          this.loading = false;
        }, (errorServicio) => {
            this.loading = false;
            this.error = true;
            this.mensaje = errorServicio.error.error.message
        })
  }

}
