import { Component, OnInit, Input } from '@angular/core';
import { ThemeServiceService } from '../theme-service.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

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
