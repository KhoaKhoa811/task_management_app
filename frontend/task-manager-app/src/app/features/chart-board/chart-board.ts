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
}
