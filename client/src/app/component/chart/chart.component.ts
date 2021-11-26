import {Component, OnInit, ViewChild} from '@angular/core';
import {BaseChartDirective} from "ng2-charts";
import {ChartConfiguration, ChartType} from "chart.js";
import {ChartService} from "../../services/chart.service";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor(private chartService: ChartService) { }

  ngOnInit(): void {
    // on initial render get the data from the service in order to fill the chart
    this.updateChartWithData(this.chartService.getChartData())

  }

  // Setup and define chart configuration
  public chartData: ChartConfiguration<"line", { x: string, y: number }[]>['data'] = {
    // Use this empty structure as a placeholder for dynamic structuring.
    labels: [],
    datasets: []
  };

  // Setup and define chart plugins
  public chartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.25 // creates smoother lines
      }
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Year',
          color: 'black',
          font: {
            size: 20,
            weight: 'bold'
          }
        },
        type: 'time',
        time: {
          unit: 'year'
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Rating',
          color: 'black',
          font: {
            size: 20,
            weight: 'bold'
          }
        },
        max: 100,
        min: 0,
        beginAtZero: true
      }
    }
  };

  // Define chart type for the displayed chart
  public chartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  private updateChartWithData(data: { label: string; data: { x: string; y: number }[] }[]): void {
    this.chartData.datasets = data; // add the data to the Chart dataset
    this.chartData.labels = this.getDatesFromDataSet(data) // add the dates to the Chart labels
    this.chart?.update(); // update the chart in order to set the new data in chart
  }

  // Creates an array of dates from a given dataset that has a string x value, this has to be done in order to have a
  // non empty labels array in the chartDataSet, because Chart.js sets the dates from the x values automatically you have
  // to do this yourself
  private getDatesFromDataSet(dataSet: { data: { x: string }[] }[]): string[] {
    let dates: string[] = []

    // push the date from each data point into the dates array
    dataSet[0].data.map(data => dates.push(data.x))

    return dates;
  }


}
