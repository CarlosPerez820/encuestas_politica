import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { LoginComponent } from './components/login/login.component';
import { FinalComponent } from './components/final/final.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'final', component: FinalComponent},
  {path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
