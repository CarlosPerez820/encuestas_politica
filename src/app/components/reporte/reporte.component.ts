import { Component, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent {

  ngAfterViewInit() {
    this.createBarChart();
    this.createBarChart2();
    this.createDoughnutChart();
    this.createDoughnutChart2();
    this.createDoughnutChart3();
  }

  

  createBarChart() {
    const canvas = document.getElementById('barChart2') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;


    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['redes sociales', 'otra persona', 'visita a domicilio', 'publicidad'],
        datasets: [{
          label: 'Puntajes',
          data: [50, 20, 30,45],
          backgroundColor: ['#28B463', '#FCBF3C', '#3CC5FC', '#FC3CFC'],
        }]
      }
    });
  }

  createBarChart2() {
    const canvas = document.getElementById('barChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;


    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Educacion', 'Salud', 'Economia', 'Seguridad'],
        datasets: [{
          label: 'Puntajes',
          data: [30, 70, 26,45],
          backgroundColor: [ '#FCBF3C', '#28B463','#3CC5FC', '#FC3CFC'],
        }]
      }
    });
  }

  createDoughnutChart() {
    const canvas = document.getElementById('doughnutChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;


    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Si', 'No'],
        datasets: [{
          data: [75, 25],
          backgroundColor: ['#28B463', '#FC613C'],
        }]
      }
    });
  }

  createDoughnutChart2() {
    const canvas = document.getElementById('doughnutChart2') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;


    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Si', 'No'],
        datasets: [{
          data: [80, 20],
          backgroundColor: ['#FCBF3C', '#FC613C'],
        }]
      }
    });
  }

  createDoughnutChart3() {
    const canvas = document.getElementById('doughnutChart3') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;


    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Si', 'No'],
        datasets: [{
          data: [45, 55],
          backgroundColor: ['#28B463', '#FC613C'],
        }]
      }
    });
  }

}
