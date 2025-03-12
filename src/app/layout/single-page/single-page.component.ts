import { Component, effect, HostListener, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common'
import { HeaderComponent } from '../header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { RsvpFormComponent } from "../../components/rsvp-form/rsvp-form.component";
import { CountdownComponent } from "../../components/countdown/countdown.component";
import { GoogleMapsComponent } from "../../components/google-maps/google-maps.component";
import {  CarouselComponent } from "../../components/carousel/carousel.component";
import { fromEvent } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-page',
  imports: [RouterLink, CommonModule, HeaderComponent, TranslateModule, RsvpFormComponent, CountdownComponent, GoogleMapsComponent, CarouselComponent],
  templateUrl: './single-page.component.html',
  styleUrl: './single-page.component.scss'
})
export class SinglePageComponent {
contentLoaded: WritableSignal<boolean> = signal(false)


constructor(){
  setTimeout(() => {
    this.contentLoaded.set(true);
  },1500);

  

}


showHeader: boolean = true;
lastScrollTop: number = 0;

@HostListener('window:scroll', ['$event'])
onScroll(event: Event) {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > this.lastScrollTop) {
    // Scroll hacia abajo, ocultar el header
    this.showHeader = false;
  } else {
    // Scroll hacia arriba, mostrar el header
    this.showHeader = true;
  }
  this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Evitar que el valor sea negativo
}
}

