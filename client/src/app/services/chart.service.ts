import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Dataset} from "../models/dataset";
import {createHttpParams} from "../utils/http-params";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  constructor(private http: HttpClient) {}

  public plot(info?: { filter?: string }): Observable<Dataset[]> {

    const params: HttpParams = createHttpParams({ filter: info.filter });

    return this.http.get(
      `${environment.apiUrl}/data`,
      { params })
      .pipe(
        map(responseData => this.convertAnswersToChartData(responseData))
      )
  }

  private convertAnswersToChartData(responseData: {}): Dataset[] {
    console.log(responseData)
    //TODO: convert objects to DataSets and DataPoints in
    return [];
  }
}
