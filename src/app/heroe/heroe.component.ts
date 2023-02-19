import { Component, OnInit } from '@angular/core';
import {HeroeModel} from '../models/heroe.model'
import { NgForm } from '@angular/forms';
import { HeroesService } from '../heroes.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  heroe=new HeroeModel();
  btnText="Guardar";

  constructor(private heroS:HeroesService, private route:ActivatedRoute) { 
    
  }

  ngOnInit() {
    const id=this.route.snapshot.paramMap.get('id');
    if(id!=='nuevo'){
      this.heroS.getHeroe(id).subscribe((resp:HeroeModel)=>{
          this.heroe=resp;
          this.heroe.id=id;
          this.btnText="Modificar"
      });
    }
  }
  guardar(form:NgForm){
   if(form.invalid){
     console.log("Formulario no valido")
      return;
   }
   Swal.fire({
     title:'Espere',
     text:'Guardando información',
     
     allowOutsideClick:false
   });
   let peticion:Observable<any>;
   if(this.heroe.id){
 peticion= this.heroS.actualizarHeroe(this.heroe);
   }else{
peticion= this.heroS.crearHeroe(this.heroe);
   }
  peticion.subscribe(resp=>{
    Swal.fire({
      title:this.heroe.nombre,
      text:'Se actualizo correctamente',
      icon: 'success'
    })
  })
  }

}