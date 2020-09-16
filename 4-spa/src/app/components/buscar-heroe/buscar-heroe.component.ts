import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-buscar-heroe',
  templateUrl: './buscar-heroe.component.html'
})
export class BuscarHeroeComponent implements OnInit {

  termino: string;
  heroes: any[] = [];
  constructor( private activatedRoute: ActivatedRoute, private _heroesService: HeroesService) {

    }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
     
    })
    
  }

}
