import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HeroesService, Heroe} from '../../../servicios/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  termino:string = '';

  constructor(private _router: Router,
              private _heroesService: HeroesService
  ) { }

  ngOnInit() {
  }

  buscarHeroe(termino:string){
    //console.log(termino);
    this.termino = termino;
    //console.log(this.termino)
    this._router.navigate(['/busqueda', termino]);
  }

}
