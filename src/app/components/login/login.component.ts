import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router, private http: HttpClient){
    this.form=this.fb.group({
      usuario: ['',Validators.required],
      password: ['',Validators.required]
    })
  }


  ngOnInit(): void{
    this.obtenerUbicacion();
  }

  ingresar(){
    const usuario = this.form.value.usuario;
    const pass = this.form.value.password;

    console.log(usuario + "-"+ pass);

    if(usuario=="admin" && pass =="admin"){
      console.log("Ingreso exitoso");
      this.animacionLogeo();
    }
    else{
      this.errorLogin();
    }
  }

  errorLogin(){
    this._snackBar.open("Usuario y/o contraseña invalida",'',{
        duration:5000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
    })
    this.form.reset();
  }

  animacionLogeo(){
    this.loading = true;
    setTimeout(() => {
      
      //Ruta de Dashboard
      this.router.navigate(['formulario']);
    }, (2000));
  }

  obtenerUbicacion() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Se ejecuta cuando se obtiene la ubicación correctamente
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          console.log(`Latitud: ${latitude}, Longitud: ${longitude}`);
          this.obtenerDireccionDesdeCoordenadas(latitude, longitude);
        },
        (error) => {
          console.error(`Error al obtener la ubicación: ${error.message}`);
        }
      );
    } else {
      console.error('Geolocalización no es soportada por este navegador.');
    }
  }

  obtenerDireccionDesdeCoordenadas(latitude: number, longitude: number) {
    const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

    this.http.get(apiUrl).subscribe(
      (data: any) => {
        if (data.display_name) {
          const direccion = data.display_name;
          console.log(`Dirección: ${direccion}`);
        } else {
          console.error('No se pudo obtener la dirección.');
        }
      },
      (error) => {
        console.error('Error al obtener la dirección:', error);
      }
    );
  }

}
