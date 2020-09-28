import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
 apiKey: string = "ae07fe16613fe9b6cba7c5d273cfd9ad";
URI:string ="";
  constructor( private httpClient: HttpClient) { 
    this.URI= `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&q=`


  }
  getWeather(cityName:string, countryName:string){
   return this.httpClient.get(`${this.URI}${cityName},${countryName}`);

  }
}
