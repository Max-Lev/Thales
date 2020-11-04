import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ICityDB, WeatherApiResponse } from 'src/app/models/city.model';
import { citiesDB } from 'src/db/city.list';
import { WeatherApiService } from '../services/weather-api.service';


@Component({
  selector: 'app-weather-widget-container',
  templateUrl: './weather-widget-container.component.html',
  styleUrls: ['./weather-widget-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherWidgetContainerComponent implements OnInit, AfterViewInit {

  citiesList: ICityDB[] = citiesDB;

  weatherForm: FormGroup;

  weatherInfo: WeatherApiResponse;

  constructor(private formBuilder: FormBuilder, private weatherApiService: WeatherApiService, private detector: ChangeDetectorRef) {
    this.formInit();
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }

  formInit() {
    this.weatherForm = this.formBuilder.group({
      citiesCntrl: new FormControl('')
    });
  }

  search() {
    const citySearchID = this.weatherForm.controls.citiesCntrl.value;

    this.weatherApiService.getWeatherByCityId(citySearchID).subscribe((response: WeatherApiResponse) => {

      this.weatherInfo = { ...response };

      this.detector.detectChanges();
    });

  }

}
