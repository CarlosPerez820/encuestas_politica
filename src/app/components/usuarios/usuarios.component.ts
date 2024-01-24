import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Luis Garcia', weight: 'luis82', symbol: 'H'},
  {position: 2, name: 'Ana Rosa', weight: 'rosas85', symbol: 'He'},
  {position: 3, name: 'Pedro Juarez', weight: 'pedro29', symbol: 'Li'},
];

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

  displayedColumns: string[] = ['name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}
