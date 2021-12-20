import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  // contact_title= "Contact us";
  // subject= new FormControl();
  // message= new FormControl();
  // sent_message:boolean = false;

  clickedContact = false;

  constructor(){}

  toggleClick(){
    this.clickedContact = this.clickedContact ? false : true;
  }
  // isValidInput(){   
  //   return !(this.subject.invalid || this.message.invalid)
  // }
}
