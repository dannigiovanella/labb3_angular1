import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convert',
  imports: [FormsModule],
  templateUrl: './convert.html',
  styleUrl: './convert.css',
})
export class Convert {
  // Längd
  // Lagrar längdvärden från inputfälten
  meter: number = 0;
  foot: number = 0;


  // Temperatur
  // Lagrar temperaturvärden från inputfälten
  celcius: number = 0;
  fahrenheit: number = 0;


  //Metoder

  //Konverterar längd

  //Meter till foot
  convertMeterToFoot(): void {
    this.foot = this.meter * 3.28084;
  }

  //Foot till meter
  convertFootToMeter(): void {
    this.meter = this.foot / 3.28084;
  }

  //Konverterar temperatur
   convertCelToFar(): void {
    this.fahrenheit = (this.celcius * 9 / 5) + 32;
  }

    convertFarToCel(): void {
    this.celcius = (this.fahrenheit - 32) * 5 / 9;
  }

}


