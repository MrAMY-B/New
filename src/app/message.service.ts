import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from './message';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private url:'/assets/data/messages.json';
  private message:Message
  constructor(private http:HttpClient) { }
  res:any;

  getIP(){
        return this.http.get('https://api.ipify.org?format=json');
  }

  getMessages():Observable<Message[]>{
    return this.http.get<Message[]>(this.url);
  }
  saveMessage(mes:Message){
     this.res = this.http.post(this.url,mes).subscribe;
     console.log(this.res);
     console.log('Form Submitted Successfully');
  }
      
}
