import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermisosDingresoGuard } from './guards/permisos-dingreso.guard';
import { BreakingComponent } from './pages/breaking/breaking.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [

  { path:'home', component:HomeComponent, canActivate:[PermisosDingresoGuard] },  
  { path:'formulario', component:FormularioComponent, canActivate:[PermisosDingresoGuard] },
  { path:'login' , component:LoginComponent},
  { path:'', redirectTo:'login', pathMatch:'full' },
  { path:'**', component:BreakingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
