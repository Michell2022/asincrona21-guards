import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreakingComponent } from './pages/breaking/breaking.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [

  { path:'home', component:HomeComponent },
  { path:'login' , component:LoginComponent},
  { path:'', redirectTo:'login', pathMatch:'full' },
  { path:'**', component:BreakingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
