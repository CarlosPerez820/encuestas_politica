import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { LoginComponent } from './components/login/login.component';
import { FinalComponent } from './components/final/final.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DatosComponent } from './components/datos/datos.component';
import { ReporteComponent } from './components/reporte/reporte.component';
import { SeguimientoComponent } from './components/seguimiento/seguimiento.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'final', component: FinalComponent},
  {path: 'datos', component: DatosComponent},
  {path: 'reporte', component: ReporteComponent},
  {path: 'seguimiento', component: SeguimientoComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
