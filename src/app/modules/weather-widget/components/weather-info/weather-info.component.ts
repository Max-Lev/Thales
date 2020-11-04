import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { WeatherApiResponse } from 'src/app/models/city.model';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss']
})
export class WeatherInfoComponent implements OnInit, OnChanges {

  @Input() weatherInfo: WeatherApiResponse;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(): void {

  }

}
