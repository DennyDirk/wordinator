import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {TrainingComponent} from "./training/training.component";
import {DictionaryComponent} from "./dictionary/dictionary.component";


const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'dictionary', component: DictionaryComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
