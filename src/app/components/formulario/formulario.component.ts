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
    { enunciado: '1.-¿A escuchado hablar del General Arturo Solano ?', tipo: 'opciones', opciones: ['Si', 'No'] },
    { enunciado: '2.-¿Por qué medio se entero del General?', tipo: 'opciones', opciones: ['Redes sociales', 'Otra persona', 'Visita a domicilio', 'Publicidad u otros medios'] },
    { enunciado: '3.-¿Cúal seria su petición prioritaria?', tipo: 'opciones', opciones: ['Educacion', 'Salud', 'Economia', 'Seguridad'] },
    { enunciado: '4.-¿Sabia usted que el General tiene una especialidad en seguridad Publica?', tipo: 'opciones', opciones: ['Si', 'No'] },
    { enunciado: '5.-¿Sabias que el general es presidente de una asociación civil que ayuda a la población sin fines de lucro?', tipo: 'opciones', opciones: ['Si', 'No'] },
    { enunciado: '6.-¿En caso de tener una petición cual seria?', tipo: 'textarea' },
    { enunciado: '¿Cual es su nombre completo?', tipo: 'texto' },
    { enunciado: '¿Cual es su numero de telefono', tipo: 'numero' },
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
