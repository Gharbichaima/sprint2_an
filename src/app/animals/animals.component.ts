import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animal } from '../model/animal.model';
import { AnimalService } from '../services/animal.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html'
})
export class AnimalsComponent implements OnInit {
 animals: Animal[];
  constructor(private animalService : AnimalService,
               public authService : AuthService,
               ) {
  
   //this.animals= animalService.listerAnimal();

   }

  ngOnInit(): void {
    this.animalService.listerAnimal().subscribe(anim => {
      console.log(anim);
      this.animals = anim;
      });
      
  }
 
  supprimerAnimal(a : Animal)
  {
    //console.log(anim);
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.animalService.supprimerAnimal(a.idAnimal).subscribe(() => {
        console.log("animal supprimé");
        this.supprimerAnimalDuTableau(a);
      });
      
  /* this.router.navigate(['animals']).then(() => {
    window.location.reload();
});*/

  }
  supprimerAnimalDuTableau(anim : Animal) {
    this.animals.forEach((cur, index) => {
    if(anim.idAnimal=== cur.idAnimal) {
    this.animals.splice(index, 1);
    }
    });
    }
}
