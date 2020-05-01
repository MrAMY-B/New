import { Component } from '@angular/core';
import { ThemeServiceService } from './theme-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private themeService:ThemeServiceService){ 
    this.themeService.header$.subscribe(
      (data:any) => this.header=data
    );
    
    this.themeService.body$.subscribe(
      (data:any)=> this.body=data
    );
  
   }

  title = 'AMOL';
  header:string='indigo-pink';
  body:string='i-p';

  
  changeTheme(){
    this.themeService.changeTheme();
   

  }

}
