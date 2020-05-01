import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DevelopmentComponent } from './development/development.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ErrorPageComponent } from './error-page/error-page.component';


const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path:"about-us", component:AboutUsComponent},
  {path:"development", component:DevelopmentComponent},
  {path:"team", component:OurTeamComponent},
  {path:"contact-us", component:ContactUsComponent},
  {path:"**", component:ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingModuleList=[
        HomeComponent,
        AboutUsComponent,
        DevelopmentComponent,
        OurTeamComponent,
        ContactUsComponent,
        ErrorPageComponent
]
