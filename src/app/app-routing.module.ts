import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GradComponent } from './grad/grad.component';
import { HomeComponent } from './home/home.component';
import { UndergradComponent } from './undergrad/undergrad.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'grad', component: GradComponent },
  { path: 'undergrad', component: UndergradComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
