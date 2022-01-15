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

  public plot(filter?: { }): Observable<Dataset[]> {
    const params: HttpParams = createHttpParams({ filter: filter });
    return this.http.get(
      `${environment.apiUrl}/data`,
      { params })
      .pipe(
        map(responseData => this.convertAnswersToChartData(responseData))
      )
  }

  private convertAnswersToChartData(responseData: { }): Dataset[] {
    //TODO: convert objects to DataSets and DataPoints in
    return [];
  }
}
