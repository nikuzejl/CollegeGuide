import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GradComponent } from './components/grad/grad.component';
import { HomeComponent } from './components/home/home.component';
import { UndergradComponent } from './components/undergrad/undergrad.component';

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
