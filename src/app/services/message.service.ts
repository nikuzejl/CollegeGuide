import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable()
export class MessageService {
  postId:any;
  constructor(private http: HttpClient) { }

  sendMessage(subject: any, message: any) {   
    var data = ({
      subject : subject,
      message : message
    }); 

    this.http.post<any>('http://localhost:3000/sendmail', data).subscribe(data => {
          
    })
  }

  sendConfirmMessage(subject: any, message: any) {   
    var data = ({
      subject : subject,
      message : message
    }); 

    this.http.post<any>('http://localhost:3000/confirmEmail', data).subscribe(data => {
          
    })
  }
}