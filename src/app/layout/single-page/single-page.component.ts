import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { RsvpFormComponent } from "../../components/rsvp-form/rsvp-form.component";
import { CountdownComponent } from "../../components/countdown/countdown.component";

@Component({
  selector: 'app-single-page',
  imports: [HeaderComponent, TranslateModule, RsvpFormComponent, CountdownComponent],
  templateUrl: './single-page.component.html',
  styleUrl: './single-page.component.scss'
})
export class SinglePageComponent {

}
