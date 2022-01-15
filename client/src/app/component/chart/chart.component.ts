import {Component, OnInit, ViewChild} from '@angular/core';
import {BaseChartDirective} from "ng2-charts";
import {ChartConfiguration, ChartType} from "chart.js";
import {ChartService} from "../../services/chart.service";
import {Dataset} from "../../models/dataset";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

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

  constructor(private chartService: ChartService) { }

  ngOnInit(): void {
    // on initial render plot the chart by retrieving data from the service and then plotting it to the chart
    this.chartService.plot({})  // pass in an empty object, because we don't want any filter on the initial render
      .subscribe(
        responseData => this.updateChartWithData(responseData),
        error => console.log(error) // TODO: add error handling
      )
  }

  private updateChartWithData(data: Dataset[]): void {
    // TODO: get the date ranges by going through the retrieved data
    // TODO: update the chart.datasets
    // TODO: update the chart.labels with the date range
    // TODO: create an average dataset using the date range
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
