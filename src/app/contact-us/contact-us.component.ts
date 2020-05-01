import { Component, OnInit } from '@angular/core';
import { ThemeServiceService } from '../theme-service.service';
import {FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Message } from '../message';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  //------------ Theme -----------------
  userIp:any='0.0.0.0';
  header:any='indigo-pink';
  body:any='i-p';
  //-----------------------------------
  msg:Message=new Message();

  ip:string='';

  allMsg:any=[];   //----------------- Mesages List From server
  FormACK:string;
  //-----------------
  private url:'/assets/data/messages.json';

  constructor( private themeService:ThemeServiceService,private messageService:MessageService,private http:HttpClient) { 
          this.http.get('/assets/data/messages.json').toPromise()
          .then( data=>this.allMsg=data );
  }

  ngOnInit(): void {
  
     this.messageService.getIP().subscribe( (data:any)=>this.userIp=data['ip'] );

    this.themeService.header$.subscribe(
      (data:any) => this.header=data
    );
    
    this.themeService.body$.subscribe(
      (data:any)=> this.body=data
    );

  }

   
   sendMessage(){
     this.msg.id=this.allMsg.length+1;
     this.msg.ip=this.userIp;
     //this.messageService.saveMessage(this.msg);
    this.http.post(this.url,this.msg).toPromise().then(
      data => { console.log(data);  }
    );


     console.log('form submitted');

   }

}
