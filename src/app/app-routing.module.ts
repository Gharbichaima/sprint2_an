import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalsComponent } from './animals/animals.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';
import { UpdateAnimalComponent } from './update-animal/update-animal.component';
import { RechercheParRaceComponent } from './recherche-par-race/recherche-par-race.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AnimalGuard } from './animal.guard';

const routes: Routes = [
  {path: "animals", component : AnimalsComponent},
  {path: "updateAnimal/:id", component :UpdateAnimalComponent},
  {path: "rechercheParRace", component : RechercheParRaceComponent},
  { path: "", redirectTo: "animals", pathMatch: "full" },
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path : "add-animal", component : AddAnimalComponent, canActivate:[AnimalGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
