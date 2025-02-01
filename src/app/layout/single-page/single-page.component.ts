import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-single-page',
  imports: [HeaderComponent, TranslateModule],
  templateUrl: './single-page.component.html',
  styleUrl: './single-page.component.scss'
})
export class SinglePageComponent {

}
