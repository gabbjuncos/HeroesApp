import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//componentes angular flex
import {FlexLayoutModule} from '@angular/flex-layout';

// importo module donde tengo todo lo relacionado a angular material
import { HeroesRoutingModule } from './heroes-routing.module';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MaterialModule } from '../material/material.module';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { FormsModule } from '@angular/forms';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';





@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HeroeComponent,
    HomeComponent,
    ListadoComponent,
    HeroeTarjetaComponent,
    ImagenPipe,
    ConfirmarComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatSidenavModule,
    HeroesRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class HeroesModule { }
