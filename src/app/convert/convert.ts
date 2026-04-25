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
  convertLength(): void {

    //Kontroll för resultat beroende på om användare konverterar från meter eller foot

    if (this.meter > 0) {
      this.foot = this.meter * 3.28084;
    }

    //Foot till meter
    else if (this.foot > 0) {
      this.meter = this.foot / 3.28084;
    }
  }

  //Konverterar temperatur
  convertTemp(): void {

    //Kontroll för resultat beroende på om användare konverterar från celcius eller farenheit
    if (this.celcius > 0) {
      this.fahrenheit = (this.celcius * 9 / 5) + 32;
    }

    else if (this.fahrenheit > 0) {
      this.celcius = (this.fahrenheit - 32) * 5 / 9;
    }
  }

}


