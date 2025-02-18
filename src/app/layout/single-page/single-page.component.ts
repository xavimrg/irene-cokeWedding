import { Component, signal, Signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common'
import { HeaderComponent } from '../header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { RsvpFormComponent } from "../../components/rsvp-form/rsvp-form.component";
import { CountdownComponent } from "../../components/countdown/countdown.component";
import { GoogleMapsComponent } from "../../components/google-maps/google-maps.component";
import { CaurroselComponent } from "../../components/caurrosel/caurrosel.component";
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-single-page',
  imports: [CommonModule, HeaderComponent, TranslateModule, RsvpFormComponent, CountdownComponent, GoogleMapsComponent, CaurroselComponent],
  templateUrl: './single-page.component.html',
  styleUrl: './single-page.component.scss'
})
export class SinglePageComponent {

scrollProgress: WritableSignal<number> = signal(0);
circleSize: WritableSignal<number> = signal(100);

constructor(){
  fromEvent(window, 'scroll').subscribe(() => {
    const scrollY = window.scrollY;
    const maxScroll = window.innerHeight;
    const progress = Math.min(scrollY / maxScroll, 1);

    this.scrollProgress.set(progress);
    this.circleSize.set(200 + progress * 4)
  })
}

}


