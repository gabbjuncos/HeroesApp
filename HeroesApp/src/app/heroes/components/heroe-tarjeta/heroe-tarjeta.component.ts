import { Component, Input} from '@angular/core';
import { Heroe } from '../../intefaces/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent{

  
  @Input() heroe!:Heroe;

 
}