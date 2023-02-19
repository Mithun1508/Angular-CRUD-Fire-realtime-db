import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroeComponent } from './heroe/heroe.component';



const routes: Routes = [
  {path:'heroes', component:HeroesComponent},
  
  {path:'heroe/:id', component:HeroeComponent},
  {path:'**', pathMatch:'full', redirectTo:'heroes'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }