import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  telefono: string;
  peticion: string;
  estado: string;
  notas: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Luis Garcia', telefono: '2441214324', peticion: 'Modificacion de Acta', estado:'Sin revisar', notas:''},
  { name: 'Ana Rosa', telefono: '2441234376', peticion: 'Arreglo de papeles', estado:'En proceso', notas:'Se paso la informacion al abogado'},
  { name: 'Pedro Juarez', telefono: '2441234587', peticion: 'Ayuda con escrituras', estado:'Finalizada', notas:'Era un proceso que no se podia realizar'},
  { name: 'Juan Rosales', telefono: '2441234376', peticion: 'Arreglo de papeles', estado:'En proceso', notas:'Se paso la informacion al abogado'},
  { name: 'Maria Flores', telefono: '2441234587', peticion: 'Ayuda con escrituras', estado:'Finalizada', notas:'Era un proceso que no se podia realizar'},
];

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.css']
})
export class SeguimientoComponent {

  displayedColumns: string[] = ['nombre', 'telefono', 'peticion','estado', 'notas','accion'];
  dataSource = ELEMENT_DATA;

}
