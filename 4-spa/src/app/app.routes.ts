
import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { compileNgModuleFromRender2 } from '@angular/compiler/src/render3/r3_module_compiler';

import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscarHeroeComponent } from './components/buscar-heroe/buscar-heroe.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'heroes', component: HeroesComponent},
    { path: 'heroe/:id', component: HeroeComponent},
    { path: 'buscar/:termino', component: BuscarHeroeComponent},

    { path: '**', pathMatch: 'full', redirectTo: 'home'}
    ];





export const routes: Routes = []

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);


