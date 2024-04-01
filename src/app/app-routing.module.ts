import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PracticeComponent } from './practice/practice.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginPageComponent},
  {path:'practice', component:PracticeComponent},
  {path:'admin', component:AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = []
