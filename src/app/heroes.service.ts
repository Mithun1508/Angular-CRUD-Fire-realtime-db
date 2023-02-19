import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {HeroeModel} from './models/heroe.model'
import { map } from 'rxjs/operators'
@Injectable()
export class HeroesService {
  private url="https://listacurso-90985.firebaseio.com"
  constructor(private _http:HttpClient) {



   }
   crearHeroe(heroe:HeroeModel){
     return this._http.post(`${this.url}/heroes.json`,heroe).pipe(
       map((resp:HeroeModel)=>{
         heroe.id=resp.name;
         return heroe;
       })
     )

   }


   actualizarHeroe(heroe:HeroeModel){
     const heroeTemp={
       ...heroe //tomarse las propiedades de ese objeto
     };
     delete heroeTemp.id;
     return this._http.put(`${this.url}/heroes/${heroe.id}.json`,heroeTemp);
   }
   getHeroes(){
     return this._http.get(`${this.url}/heroes.json`).pipe(map(resp=>{
        return this.crearArreglo(resp)
     }))
   }
   private crearArreglo(heroesObj:object){
     const heroes: HeroeModel[]=[];
     console.log(heroesObj)
     if(heroesObj===null){
       return [];
     }
      Object.keys(heroesObj).forEach(key=>{
        const heroe:HeroeModel=heroesObj[key];
        heroe.id=key;
        heroes.push(heroe)
      });
      return heroes;
   }
   getHeroe(id:string){
     return this._http.get(`${this.url}/heroes/${id}.json`)
   }
   deleteHeroe(id:string)
   {
return this._http.delete(`${this.url}/heroes/${id}.json`)
   }

}