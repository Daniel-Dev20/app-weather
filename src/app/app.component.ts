import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title= "Ingresa tu ciudad y codigo ";
  weather;
  constructor( private weatherService: WeatherService){

  }

ngOnInit(){

}
getWeather(nombre:string, codigo:string){
  this.weatherService.getWeather(nombre, codigo)
  .subscribe(
    res =>{
      console.log(res);
      this.weather = res
    } ,
    err => console.log(err)

  )
}
submitLocation(nombre: HTMLInputElement, codigo:HTMLInputElement)
{
  this.getWeather(nombre.value, codigo.value);
  console.log(nombre.value, codigo.value);
  nombre.value ="";
  codigo.value = "";
  nombre.focus();
  return false;
}


}
