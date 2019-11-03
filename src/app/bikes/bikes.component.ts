import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {

  bikeData: any= '';

  bikes=[
    {
      brand: 'KTM',
      img : 'https://cdn.pixabay.com/photo/2019/04/19/10/29/motorcycle-4139052__340.jpg',
      description : 'KTM RC 200 is the most affordable track based 200cc motorcycle in India, KTM RC 200 comes with all of the premium equipment like USD forks, projectors headlights, aerodynamic design and all-new Black-White-Orange theme. It lacks ABS while shares the Orange frame with its elder sibling, RC390. KTM RC200 competes against Bajaj Pulsar RS200 and Honda CBR250R in India.'
    },
    {
      brand: 'TVS  Apache 180',
      img : 'https://cdn.pixabay.com/photo/2017/12/29/05/58/sport-3046819__340.jpg',
      description :'Apache RTR 180 Specs and Features 91,291 (Ex-Showroom, Delhi). The 177.4cc, single-cylinder, 4-stroke motor generates a maximum output of 17.5PS of power and 15.5Nm of torque. The power is transferred to the rear wheel via a five-speed gearbox. The RTR 180 has a fuel capacity of 16 litres and weighs in at 139kg.'
    },
    {
      brand: 'RX 100',
      img : 'https://cdn.pixabay.com/photo/2016/11/18/21/30/bike-1836962__340.jpg',
      description :'Apache RTR 180 Specs and Features 91,291 (Ex-Showroom, Delhi). The 177.4cc, single-cylinder, 4-stroke motor generates a maximum output of 17.5PS of power and 15.5Nm of torque. The power is transferred to the rear wheel via a five-speed gearbox. The RTR 180 has a fuel capacity of 16 litres and weighs in at 139kg.'
    },
    {
      brand: 'Royal Enfild',
      img : 'https://cdn.pixabay.com/photo/2015/08/27/09/06/bike-909690__340.jpg',
      description :'Apache RTR 180 Specs and Features 91,291 (Ex-Showroom, Delhi). The 177.4cc, single-cylinder, 4-stroke motor generates a maximum output of 17.5PS of power and 15.5Nm of torque. The power is transferred to the rear wheel via a five-speed gearbox. The RTR 180 has a fuel capacity of 16 litres and weighs in at 139kg.'
    },
    {
      brand: 'FZ',
      img : 'https://cdn.pixabay.com/photo/2018/12/18/18/28/bike-3882847__340.jpg',
      description :'There would not have been a 160cc sporty commuter class in India had it not been for the Yamaha FZ16. It was the affordable aspirational motorcycle that the 125cc users could upgrade to that offered a different flavour to the Pulsars and the Apaches of the time – and especially the Honda Unicorn, which was fairly conservative. Its muscular styling, punchy motor, sophisticated suspension setup and the chunkiest rear tyre that you could find on a 150/160cc motorcycle also helped it capture the attention of budding enthusiasts. '
    },
    {
      brand: 'Vespa ',
      img : 'https://cdn.pixabay.com/photo/2019/07/17/14/34/photomontage-4344085__340.png',
      description :'Vespa Scooters prices start at Rs 73,573. Vespa has a total of 11 scooters of which 2 models are upcoming which include Liberty 3V and GTS Super 125.The Vespa Elegante 150 is the most expensive Vespa Scooter with a price tag of Rs 1.12 Lakh.The most popular names in the lineup include SXL 150, VXL 125, Notte 125, Elegante 150 and VXL 150 The complete range is distributed through 126 Vespa Scooter Dealers in 82 cities in India. For the latest updates on Vespa scooter prices, reviews, video reviews and detailed comparisons, keep visiting BikeDekho.com'
    }
  ];

  constructor() { }

  sendBike(bike){
    this.bikeData = bike;
  }

  ngOnInit() {
  }

}

