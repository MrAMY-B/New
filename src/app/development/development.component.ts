import { Component, OnInit } from '@angular/core';
import { ThemeServiceService } from '../theme-service.service';

@Component({
  selector: 'app-development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.css']
})
export class DevelopmentComponent implements OnInit {

  header:any='indigo-pink';
  body:any='i-p';

  nabapravat:string='assets/homeSlider/3.png';
  mysoulemate:string='assets/homeSlider/3.png';
  marketruller:string='assets/homeSlider/3.png';
  contentWriter:string='assets/homeSlider/3.png';

  constructor( private themeService:ThemeServiceService) { }

  ngOnInit(): void {
    
    this.themeService.header$.subscribe(
      (data:any) => this.header=data
    );
    
    this.themeService.body$.subscribe(
      (data:any)=> this.body=data
    );

  }
  showMR(num:number){
    this.marketruller='assets/homeSlider/'+num+'.png';
}

  showNaba(num:number){
      this.nabapravat='assets/homeSlider/'+num+'.png';
  }

  showMyso(num:number){
      this.mysoulemate='assets/homeSlider/'+num+'.png';
  }
  showCW(num:number){
    this.mysoulemate='assets/homeSlider/'+num+'.png';
}

}
