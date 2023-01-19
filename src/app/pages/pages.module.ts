import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BreakingComponent } from './breaking/breaking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    BreakingComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HomeComponent,
    LoginComponent,
    FormularioComponent
  ]
})
export class PagesModule { }
