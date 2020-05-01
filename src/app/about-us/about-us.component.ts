import { Component, OnInit } from '@angular/core';
import { ThemeServiceService } from '../theme-service.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  header:any='indigo-pink';
  body:any='i-p';

  constructor( private themeService:ThemeServiceService) { }

  ngOnInit(): void {
    
    this.themeService.header$.subscribe(
      (data:any) => this.header=data
    );
    
    this.themeService.body$.subscribe(
      (data:any)=> this.body=data
    );

  }
}
