import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [MessageService]
})
export class FooterComponent {
  contact_title= "Contact us";
  subject= new FormControl();
  message= new FormControl();
  sent_message:boolean = false;

  constructor(private messageService: MessageService){}

  sendMessage(){
    this.messageService.sendMessage(this.subject.value,this.message.value);
    this.sent_message = true;
  }

  isValidInput(){   
    return !(this.subject.invalid || this.message.invalid)
  }
}
