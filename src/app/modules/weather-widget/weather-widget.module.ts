import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { WeatherWidgetContainerComponent } from './weather-widget-container/weather-widget-container.component';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherApiService } from './services/weather-api.service';
import { WeatherInfoComponent } from './components/weather-info/weather-info.component';

@NgModule({
  declarations: [
    WeatherWidgetContainerComponent,
    WeatherInfoComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    WeatherApiService
  ],
  exports: [
    WeatherWidgetContainerComponent,
    MatCardModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    WeatherInfoComponent
  ]
})
export class WeatherWidgetModule { }
