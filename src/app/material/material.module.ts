import { NgModule } from '@angular/core'; 
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import {MatRippleModule} from '@angular/material/core';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';  


const Material=[
      MatButtonModule,
      MatIconModule,
      MatButtonToggleModule,
      MatToolbarModule,
      MatSidenavModule,
      MatListModule,
      MatDividerModule,
      MatRippleModule,
      MatSliderModule,
      MatCardModule,
      MatTooltipModule,
      MatInputModule,
      MatFormFieldModule
]

@NgModule({
  imports: [ Material ],
  exports: [ Material  ]
})
export class MaterialModule { }
