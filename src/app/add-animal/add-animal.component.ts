import { Component, OnInit } from '@angular/core';
import { Animal } from '../model/animal.model';
import { AnimalService } from '../services/animal.service';
import { Race } from '../model/race.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html'
})
export class AddAnimalComponent implements OnInit {
  
  newAnimal=new Animal();
  message : string;
  races: Race[];
  newIdRa:number;
  newRace:Race;
  constructor(private animalService : AnimalService,
             private router :Router,
    ) { }
 
  addAnimal(){
      /* console.log(this.newAnimal);
      this.newRace= this.animalService.consulterRace(this.newIdRa);
      this.newAnimal.race=this.newRace;
      this.animalService.ajouterAnimal(this.newAnimal);
      this.message="Animal ajouter avec succés !" ; 
    */
  this.animalService.ajouterAnimal(this.newAnimal).subscribe(anim=>{
    console.log(anim);
    }) ;
  this.router.navigate(['animals']).then(()=>{
    window.location.reload();
  });
  }
   
  ngOnInit(): void {
    this.races= this.animalService.listeRace();
  }

  
    
}
