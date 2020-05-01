import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeServiceService {

  private headerColor=new Subject<string>();
  header$=this.headerColor.asObservable();
  
  private bodyColor=new Subject<string>();
  body$=this.bodyColor.asObservable();


  constructor() {
    this.headerColor.next('indigo-pink');
    this.bodyColor.next('i-p');
   }

  private msg=new Subject<string>();
  msges$=this.msg.asObservable();



  headerBG:string[]=['indigo-pink','deep-purple','pink-blue-gray','purple-green','dark-cyan'];
  bodyBG:string[]=['i-p','d-p','p-b-g','p-g','d-c'];
  num:number=0;
 

  changeTheme(){
      if(this.num==4){
        this.num=0;
        this.headerColor.next(this.headerBG[this.num]);
        this.bodyColor.next(this.bodyBG[this.num]);
      }else{
        this.num++;
        this.headerColor.next(this.headerBG[this.num]);
        this.bodyColor.next(this.bodyBG[this.num]);
      }

  }

}
