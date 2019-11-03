import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  carData: any= '';

  cars=[
    {
      brand: 'Ferrari',
      img : 'https://cdn.pixabay.com/photo/2014/09/07/22/34/car-race-438467__340.jpg',
      description : 'Ferrari in 1939 out of Alfa Romeos race division as Auto Avio Costruzioni, the company built its first car in 1940. However, the companys inception as an auto manufacturer is usually recognized in 1947, when the first Ferrari-badged car was completed. In 2014 Ferrari was rated the worlds most powerful brand by Brand Finance.[3] In June 2018, the 1964 250 GTO became the most expensive car in history, setting an all-time record selling price of $70 million.'
    },
    {
      brand: 'Sports Car',
      img : 'https://cdn.pixabay.com/photo/2017/03/05/15/29/aston-2118857__340.jpg',
      description :'Apache RTR 180 Specs and Features 91,291 (Ex-Showroom, Delhi). The 177.4cc, single-cylinder, 4-stroke motor generates a maximum output of 17.5PS of power and 15.5Nm of torque. The power is transferred to the rear wheel via a five-speed gearbox. The RTR 180 has a fuel capacity of 16 litres and weighs in at 139kg.'
    },
   
    {
      brand: 'Lamborghini',
      img : 'https://cdn.pixabay.com/photo/2017/03/12/19/12/lamborghini-2137815__340.jpg',
      description :'Lamborghini, which today is known for its lightning fast, super sexy cars, was once a maker of tractors! The man credited for this transformation was none other than Ferruccio Lamborghini, the father of the brand, who 50 years ago took it upon himself to build machines that could challenge the likes	of Ferrari. The vehicles offered by Lamborghini are for those who enjoy the finer tastes in life. For enthusiasts and Lamborghini aficionados, photos and technical specifications further fuel the desire to understand and gain more knowledge on their favorite vehicle. Lamborghini cars price starts at Rs. 2.99 crore for the cheapest car Huracan and goes up to Rs. 3.97 crore for the top model Lamborghini Huracan. Lamborghini offers 3 new car models in India.  '
    },
    {
      brand: 'Jeep Wrangler ',
      img : 'https://cdn.pixabay.com/photo/2017/06/22/18/52/rubicon-2432058__340.jpg',
      description :'The fourth-gen Wrangler (JL Series) has been launched in India in a single Unlimited variant. Details here. New Engine & Transmission: The new Jeep Wrangler comes with significant upgrades to its equipment list as well as powertrain options. The India-spec Wrangler now comes with a new 2.0-litre 4-cylinder turbo-petrol engine mated to a new 8-speed automatic transmission. This unit produces 268PS and 400Nm. Power is sent to all four wheels using Jeeps 4x4 drivetrain. The Wrangler also gets Jeeps SelecTrac 4x4 off-road system and a low-range gearbox too.'
    }
  ];
  
  
  constructor() { }
  
  sendCar(car){
    this.carData = car;
  }

  ngOnInit() {
  }

}
