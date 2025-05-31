import { Routes } from '@angular/router';
import { GeneralComponent } from './general/general.component';
import { UndergradComponent } from './undergrad/undergrad.component';
import { GradComponent } from './grad/grad.component';
import { OtherOpportunitiesComponent } from './other-opportunities/other-opportunities.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: GeneralComponent },
  { path: 'undergrad', component: UndergradComponent },
  { path: 'grad', component: GradComponent },
  { path: 'other-opportunities', component: OtherOpportunitiesComponent },
  { path: 'contact', component: ContactComponent },
];

