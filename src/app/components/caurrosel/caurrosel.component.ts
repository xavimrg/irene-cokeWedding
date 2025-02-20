import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-caurrosel',
  imports: [],
  templateUrl: './caurrosel.component.html',
  styleUrl: './caurrosel.component.scss'
})
export class CaurroselComponent {
images = signal([
  'assets/img/castillo.jpeg',
  'assets/img/jungla.jpeg',
  'assets/img/mar.jpeg',
  'assets/img/montaña.jpeg',
  'assets/img/nieve.jpeg',
  'assets/img/playa.jpeg',
  'assets/img/piramides.jpeg',
  'assets/img/portugal.jpeg',
  'assets/img/gigi',
  'assets/img/gigi2',
])

currentIndex = signal(0)

constructor(){
  setInterval(()=> {
  this.nextImage();
   }, 3000);
  }
  nextImage(){
    this.currentIndex.set((this.currentIndex()+1 % this.images().length))
  } 
  prevImage(){
    this.currentIndex.set((this.currentIndex() -1 + this.images().length % this.images().length))
  }
}

