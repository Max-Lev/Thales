export interface ICityDB {
    id: number;
    name: string;
    country: string;
    coord: {
        lon: number | string;
        lat: number | string;
    };
}


export interface WeatherApiResponse {
    base: string;
    clouds: {
        all: number | string
    };
    all: string;
    cod: string;
    coord: { lon: string, lat: string };
    lat: string;
    lon: string;
    dt: string;
    id: string;
    main: {
        feels_like: string,
        grnd_level: string,
        humidity: string,
        pressure: string,
        sea_level: string,
        temp: string,
        temp_max: string,
        temp_min: string,
    };
    feels_like: string;
    grnd_level: string;
    humidity: string;
    pressure: string;
    sea_level: string;
    temp: string;
    temp_max: string;
    temp_min: string;
    name: string;
    sys: {
        country: string,
        sunrise: number,
        sunset: number
    };
    timezone: number;
    visibility: number;
    weather: [{ description: string, icon: string, id: number, main: string }];
    wind: { speed: string, deg: number };

}
