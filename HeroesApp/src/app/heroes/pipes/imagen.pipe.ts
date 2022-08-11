import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../intefaces/heroes.interface';

@Pipe({
  name: 'imagen',
  // comportamiento por defecto
  //pure: true 
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: Heroe): string {
    console.log('pipe imagen se proceso');
    // si no tiene id es porque se esta creando y se devuelve la imagen con la que se indica que no hay imagen
    if(!heroe.id){
      return 'assets/no-image.jpg';
    }
    // si tiene url cargada devolverla
    else if(heroe.alt_img){
      return heroe.alt_img;
    }

    console.log(heroe)
    return `assets/heroes/${heroe.id}.jpg`;
  }

}
