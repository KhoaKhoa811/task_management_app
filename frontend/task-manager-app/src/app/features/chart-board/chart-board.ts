import { Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-chart-board',
  imports: [BaseChartDirective],
  templateUrl: './chart-board.html',
  styleUrl: './chart-board.scss',
})
export class ChartBoard {
  public pieChartType: ChartType = 'doughnut';

  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, position: 'bottom' }
    },
  };

  public pieChartData: ChartData<'doughnut'> = {
    labels: ['Backlog', 'Todo', 'In Progress', 'Done', 'Cancelled'],
      datasets: [{
        data: [10, 20, 15, 25, 5],
        
        backgroundColor: [
          '#94a3b8', 
          '#60a5fa', 
          '#fbbf24', 
          '#4ade80', 
          '#f87171'  
        ],

        hoverBackgroundColor: [
          '#64748b', 
          '#2563eb', 
          '#f59e0b', 
          '#16a34a', 
          '#dc2626'
        ],

        borderColor: '#ffffff',
        borderWidth: 2,
        
        hoverBorderColor: '#ffffff',
        hoverBorderWidth: 3
    }]
  };

  public lineChartType: ChartType = 'line';

  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: { display: true }
      },
      x: {
        grid: { display: false }
      }
    },
    plugins: {
      legend: { display: true, position: 'bottom' }
    }
  };

  public lineChartData: ChartData<'line'> = {
    labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6'],
    datasets: [
      {
        data: [2, 4, 3, 5, 7, 3],
        label: 'Overdue Tasks',
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)', 
        fill: 'origin', 
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: '#3b82f6'
      }
    ]
  };
}
