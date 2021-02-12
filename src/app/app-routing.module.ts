import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {RegistrationComponent} from './registration/registration.component';
import {ForgotpasswordComponent} from './forgotpassword/forgotpassword.component';
import {HomepageComponent} from './homepage/homepage.component';
import {UpdatepageComponent} from './updatepage/updatepage.component';
import {EditpageComponent} from './editpage/editpage.component'
//import {EditpageFormComponent} from './editpage/editpage-form/editpage-form.component'



const routes: Routes = [
  {path:'' , redirectTo:'/homepage',pathMatch:'full'},
  {path:'login-page', component:LoginPageComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'forgotpassword', component:ForgotpasswordComponent},
  {path:'homepage', component:HomepageComponent},
  {path:'updatepage', component:UpdatepageComponent},
  //{path:'editpage',redirectTo:'/editpageform',pathMatch:'full'},
  {path:'editpage' ,component:EditpageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
