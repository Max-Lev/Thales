import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { WeatherApiResponse } from 'src/app/models/city.model';

import { environment } from 'src/environments/environment';

@Injectable()
export class WeatherApiService {

  constructor(private http: HttpClient) { }

  getWeatherByCityId(citySearchID: number): Observable<WeatherApiResponse> {

    const response$: Subject<WeatherApiResponse> = new Subject();

    this.http.get<WeatherApiResponse>(`${environment.weatherUrl}${citySearchID}&appid=1890fcd579ac51bb12f42af3ceed6428`)
      .subscribe((response: WeatherApiResponse) => {

        // DO SOMTHING WITH RESPONSE
        response$.next(response);

      }, (err) => throwError(new Error(err)));
    return response$;
  }

}
