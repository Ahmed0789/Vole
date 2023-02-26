import { LandingPageComponent } from './voleApp/components/landing-page/landing-page.component';
import { HelpPageComponent } from './voleApp/components/dashboard/help-page/help-page.component';
import { HeaderComponent } from './voleApp/components/header/header.component';
import { DashboardComponent } from './voleApp/components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path:'dash', component: HeaderComponent,
  children : [
    {path: '', component: DashboardComponent},
    {path:'help', component: HelpPageComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot( routes, {scrollPositionRestoration: "enabled",  onSameUrlNavigation: 'reload'} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
