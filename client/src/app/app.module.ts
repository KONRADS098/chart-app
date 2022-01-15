import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ChartComponent } from './component/chart/chart.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { NgChartsModule } from "ng2-charts";

import 'chartjs-adapter-moment';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChartComponent,
    NavbarComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      NgChartsModule,
      HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
