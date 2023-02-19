import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { HeroeModel } from '../models/heroe.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  cargando=false;
heroes: HeroeModel[]=[];
  constructor(private heroS:HeroesService) { }

  ngOnInit() {
    this.cargando=true;
    this.heroS.getHeroes().subscribe(resp=>{
      this.heroes=resp;
      this.cargando=false;
    })
  }

  borrarHeroe(heroe:HeroeModel,i:number){
    Swal.fire({
      title:'¿Esta seguro?',
      text: `Esta seguro que desea borrar a ${heroe.nombre}`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton:true
    }).then(resp=>{
      if(resp.value){
 this.heroes.splice(i,1);
    this.heroS.deleteHeroe(heroe.id).subscribe();
      }
    })
   
  }

}