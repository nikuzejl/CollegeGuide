import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { GeneralComponent } from "./general/general.component";
import { UndergradComponent } from './undergrad/undergrad.component';
import { GradComponent } from './grad/grad.component';
import { OtherOpportunitiesComponent } from './other-opportunities/other-opportunities.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavbarComponent, UndergradComponent, GradComponent, OtherOpportunitiesComponent, ContactComponent, FooterComponent, GeneralComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'uni-guide';
}
