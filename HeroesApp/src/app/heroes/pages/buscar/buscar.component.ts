import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../intefaces/heroes.interface';
import { HeroesService } from '../heroe/services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  heroes: Heroe[] = [];
  heroeSeleccionado :Heroe | undefined;
  constructor(private heroesService:HeroesService) { }

  ngOnInit(): void {
  }

  buscando(){
    this.heroesService.getSugerencias(this.termino.trim())
      .subscribe( heroes => this.heroes = heroes);

  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent ){
    //console.log(event)
    if (!event.option.value){
      //console.log("no hay ningun valor")
      this.heroeSeleccionado = undefined;
      return
    }
    console.log(event.option.value)
    const heroe: Heroe = event.option.value;
    //console.log(heroe);
    this.termino = heroe.superhero;

    this.heroesService.getHeroePorId(heroe.id!)
      .subscribe( heroe => this.heroeSeleccionado = heroe);

  }

}
