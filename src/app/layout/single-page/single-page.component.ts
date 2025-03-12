import { Component, effect, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common'
import { HeaderComponent } from '../header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { RsvpFormComponent } from "../../components/rsvp-form/rsvp-form.component";
import { CountdownComponent } from "../../components/countdown/countdown.component";
import { GoogleMapsComponent } from "../../components/google-maps/google-maps.component";
import { CaurroselComponent } from "../../components/caurrosel/caurrosel.component";
import { fromEvent } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-page',
  imports: [RouterLink, CommonModule, HeaderComponent, TranslateModule, RsvpFormComponent, CountdownComponent, GoogleMapsComponent, CaurroselComponent],
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


}


