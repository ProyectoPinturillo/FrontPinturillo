import { Component } from '@angular/core';

@Component({
  selector: 'app-crar-cuarto',
  templateUrl: './crar-cuarto.component.html',
  styleUrls: ['./crar-cuarto.component.css']
})
export class CrarCuartoComponent {
  themes = [
    { img: './assets/svg/fnaf.svg', name: 'fnaf'},
    { img: './assets/svg/fnaf.svg', name: 'fnaf'},
    { img: './assets/svg/fnaf.svg', name: 'fnaf'},
    { img: './assets/svg/fnaf.svg', name: 'fnaf'},
    { img: './assets/svg/fnaf.svg', name: 'fnaf'},
    { img: './assets/svg/fnaf.svg', name: 'fnaf'},
    { img: './assets/svg/fnaf.svg', name: 'fnaf'},
    { img: './assets/svg/fnaf.svg', name: 'fnaf'},
    { img: './assets/svg/fnaf.svg', name: 'fnaf'},
    { img: './assets/svg/fnaf.svg', name: 'fnaf'},
    { img: './assets/svg/fnaf.svg', name: 'fnaf'},
    { img: './assets/svg/fnaf.svg', name: 'fnaf'},
  ]

  playerOptions = [5, 6, 7, 8, 9, 10, 15, 20, 30, 40, 50]
  pointsOptions = [70, 120, 150, 180, 240, 360, 480]
  lengOptions = ['Spanish', 'English', 'French', 'German']

}
