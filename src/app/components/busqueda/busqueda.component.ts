import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroe} from '../../servicios/heroes.service';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  termino: string = '';
  resultados: Heroe[] = [];
 
  
  constructor( private _heroesService: HeroesService,
              private activatedRoute: ActivatedRoute

              ) {
               }

  ngOnInit() {
    this.obtenerResultados();
  }

  obtenerResultados(){
    this.activatedRoute.params.subscribe( params => {
      //console.log(params['termino']);
      this.termino = params['termino'];
      this.resultados = this._heroesService.buscarHeroes(this.termino);
      console.log("resultados: " + this.resultados.length);
    })
  }

  getIndice(nombre:string):number {
    //console.log("nombre" + nombre);
    let indice = this._heroesService.getIndex(nombre);
    return indice;
  }

}
