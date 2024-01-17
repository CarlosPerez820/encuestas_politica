import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Pregunta {
  enunciado: string;
  tipo: 'texto' | 'opciones' | 'numero' | 'textarea' | 'lista';
  opciones?: string[];
  respuesta?: any;
  respondida?: boolean;
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  
  ubicacion: string='';

  constructor(private http: HttpClient,private router: Router){

  }

  ngOnInit(): void{
    this.obtenerUbicacion();
  }

  preguntas: Pregunta[] = [
    { enunciado: 'Pregunta 1', tipo: 'texto' },
    { enunciado: 'Pregunta 2', tipo: 'opciones', opciones: ['Me gusta', 'No me gusta', 'No me interesa'] },
    { enunciado: 'Pregunta 3', tipo: 'opciones', opciones: ['Si', 'No'] },
    { enunciado: 'Pregunta 4', tipo: 'numero' },
    { enunciado: 'Pregunta 5', tipo: 'textarea' },
   // { enunciado: 'Pregunta 6', tipo: 'lista', opciones: ['Opción 1', 'Opción 2', 'Opción 3'], respuesta: null, respondida: false }
  ];

  totalPreguntas = this.preguntas.length;
  preguntasContestadas = 0;

  siguientePregunta() {
    this.preguntasContestadas++;
  }


  onRespuestaTexto(preguntaIndex: number) {
    if (!this.preguntas[preguntaIndex].respondida) {
      this.preguntasContestadas++;
      this.preguntas[preguntaIndex].respondida = true;
    }
  }

  onRespuestaOpciones(preguntaIndex: number) {
    // Incrementa el contador cuando se responde a la pregunta de opciones
    if (!this.preguntas[preguntaIndex].respondida) {
      this.preguntasContestadas++;
      this.preguntas[preguntaIndex].respondida = true;
    }
  }

  onRespuestaListaDesplegable(preguntaIndex: number) {
    console.log("Hola");
    // Incrementa el contador cuando se responde a la pregunta de lista desplegable
    if (!this.preguntas[preguntaIndex].respondida) {
      this.preguntasContestadas++;
      this.preguntas[preguntaIndex].respondida = true;
    }
  }

  enviarEncuesta() {
    this.router.navigate(['final']);
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
          this.ubicacion = direccion;
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
