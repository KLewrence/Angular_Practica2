import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HeroesService} from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe:any = {};

  constructor(private activatedRoute:ActivatedRoute,
              private _heroesService: HeroesService,
              private _router: Router
   ){
    this.activatedRoute.params.subscribe( params => {
      //console.log(params['id']);
      this.heroe = this._heroesService.getHeroe(params['id']);
      console.log(this.heroe);
    })
   }

  ngOnInit() {
  }

  backHome(){
    this._router.navigate(['heroes']);
  }

}
