import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import {switchMap} from 'rxjs/operators'

import { Heroe, Publisher } from '../../intefaces/heroes.interface';
import { HeroesService } from '../heroe/services/heroes.service';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';




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

  constructor( private heroeService: HeroesService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private _snackBar: MatSnackBar,
              private _dialog:MatDialog) { }

  ngOnInit(): void {

    //me fijo si en la url que obtiene esta la palabra editar
    // si no se encuenta la palabra editar devolveria undefinied asi que que salga y no devuelva nada
    if(!this.router.url.includes('editar')){
      return
    }

    // obtengo id de la url
    // cuando se ingrese por agregar el id es undefinid y cuando es por editar toma el id del personaje
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.heroeService.getHeroePorId(id) )
        )
      .subscribe( heroe => this.heroe = heroe );
  }

  guardar(){
    if(this.heroe.superhero.trim().length === 0 ){
      return;
    }

    if (this.heroe.id){
      //actualizar
      this.heroeService.actualizarHeroe(this.heroe)
        .subscribe(heroe => {
          console.log('Actualizando', heroe );
          this.mostrarSnakBar('Registro actualizado');
        }
          )
      console.log(this.heroe.id)
    }else{
      // crear
      this.heroeService.agregarHeroe(this.heroe)
        .subscribe( heroe => {
          this.router.navigate(['/heroes/editar', heroe.id]);
          this.mostrarSnakBar('Se ha registrado con exito');
          console.log('Creando', heroe);
      })
    }
  }

  borrarHeroe(){
    const dialog = this._dialog.open(ConfirmarComponent, {
      width: '250px',
      data: this.heroe
    });

    dialog.afterClosed().subscribe(
      (result) => {
        if(result){
          this.heroeService.borrarHeroe(this.heroe.id!)
            .subscribe( resp => {
              this.router.navigate(['/heroes']);
            });
        }
      }
    )
  }

  mostrarSnakBar(mensaje: string){

    this._snackBar.open(mensaje, 'ok!', {
      duration:2500
    })
  }
}
