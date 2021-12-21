import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) { 
    // this.router.navigate(['/home'])
  }

  ngOnInit(): void {}

  selected(){
    
  }

  selectedHome(){
    return 'home'
  }

  selectedGrad(){
    return 'grad'
  }

  selectedUndergrad(){
    return 'undergrad'
  }

  selectedContact(){
    return 'contact'
  }
}
