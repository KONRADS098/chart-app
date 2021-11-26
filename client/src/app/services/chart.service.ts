import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  private chartData: { label: string, data: { x: string, y: number }[] }[] = [
    {
      label: "TEAM 1",
      data: [
        {
          x: "2021-01-01",
          y: 0.7 * 20
        },
        {
          x: "2022-01-01",
          y: 1.1 * 20
        },
        {
          x: "2023-01-01",
          y: 1.8 * 20
        }
      ]
    },
    {
      label: "TEAM 2",
      data: [
        {
          "x": "2021-01-01",
          "y": 2.0 * 20
        },
        {
          "x": "2022-01-01",
          "y": 1.4 * 20
        },
        {
          "x": "2023-01-01",
          "y": 2.2 * 20
        }
      ]
    },
    {
      label: "TEAM 3",
      data: [
        {
          x: "2021-01-01",
          y: 2.0 * 20
        },
        {
          x: "2022-01-01",
          y: 1.8 * 20
        },
        {
          x: "2023-01-01",
          y: 4.2 * 20
        }
      ]
    },
    {
      label: "TEAM 4",
      data: [
        {
          x: "2021-01-01",
          y: 3.0 * 20
        },
        {
          x: "2022-01-01",
          y: 3.6 * 20
        },
        {
          x: "2023-01-01",
          y: 3.7 * 20
        }
      ]
    },
    {
      label: "TEAM 5",
      data: [
        {
          x: "2021-01-01",
          y: 1.8 * 20
        },
        {
          x: "2022-01-01",
          y: 2.0 * 20
        },
        {
          x: "2023-01-01",
          y: 2.8 * 20
        }
      ]
    },
    {
      label: "TEAM 6",
      data: [
        {
          x: "2021-01-01",
          y: 2.1 * 20
        },
        {
          x: "2022-01-01",
          y: 3.2 * 20
        },
        {
          x: "2023-01-01",
          y: 4.0 * 20
        }
      ]
    },
    {
      label: "TEAM 7",
      data: [
        {
          x: "2021-01-01",
          y: 0.0
        },
        {
          x: "2022-01-01",
          y: 1.2 * 20
        },
        {
          x: "2023-01-01",
          y: 3.1 * 20
        }
      ]
    }
  ]

  constructor() { }

  public getChartData(): { label: string; data: { x: string; y: number }[] }[] {
    return this.chartData;
  }

}
