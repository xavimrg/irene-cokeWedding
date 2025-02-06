import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageServiceService } from '../../services/language-service.service';

@Component({
  selector: 'app-header',
  imports: [TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  private languageService = inject(LanguageServiceService)


changeLanguage(lang: string):void{
  this.languageService.changeLanguage(lang)
}

}
