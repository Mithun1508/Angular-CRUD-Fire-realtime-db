import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { HeroeComponent } from './heroe/heroe.component';
import { HeroesComponent } from './heroes/heroes.component';
import {AppRoutingModule} from './app-routing.module';
import { HeroesService } from './heroes.service'

@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule,HttpClientModule ],
  declarations: [ AppComponent, HeroeComponent, HeroesComponent,],
  bootstrap:    [ AppComponent ],
  providers: [HeroesService]
})
export class AppModule { }
