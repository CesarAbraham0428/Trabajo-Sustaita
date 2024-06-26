import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Hero } from "../interfaces/hero.interface";
import { environments } from "../../../environments/environment";


@Injectable({providedIn: 'root'})
export class HeroesService {

  private baseUr1:string = environments.baseUr1;
  constructor(private httClient: HttpClient) { }

  
  getHeroes() :Observable<Hero[]>{
    return this.httClient.get<Hero[]>
    (`${ this.baseUr1}/heroes`)
  }
  
}
