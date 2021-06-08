import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoreComponent } from './more/more.component';

const routes: Routes = [
  { 
    path: 'home',
   component: HomeComponent
  },

  {
     path: '',
     redirectTo: '/login',
     pathMatch: 'full' },
  {
    path: 'login',
   component : LoginComponent
  },
  {
    path: 'add',
   component : AddComponent
  },
  {
    path: 'more',
   component : MoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
