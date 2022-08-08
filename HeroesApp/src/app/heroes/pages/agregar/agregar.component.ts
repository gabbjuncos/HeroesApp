import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../intefaces/heroes.interface';
import { HeroesService } from '../heroe/services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ]

  heroe: Heroe = {
    superhero:'',
    alter_ego:'',
    characters:'',
    first_appearance:'',
    publisher: Publisher.DCComics,
    alt_img: '',
    
  }

  constructor( private heroeService: HeroesService) { }

  ngOnInit(): void {
  }

  guardar(){
    if(this.heroe.superhero.trim().length === 0 ){
      return;
    }

    this.heroeService.agregarHeroe(this.heroe)
      .subscribe( resp => {
        console.log('Respuesta', resp);
      })
    
  }

}
