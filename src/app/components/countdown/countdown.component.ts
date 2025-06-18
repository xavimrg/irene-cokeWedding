import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {
  weddingDate: Date = new Date('2025-06-28T18:00:00');
  remainingTime = {
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };
  private interval: any;

  ngOnInit(): void {
    this.updateRemainingTime();
    this.interval = setInterval(() => this.updateRemainingTime(), 1000);
  }

  ngOnDestroy(): void {
    if (this.interval) clearInterval(this.interval);
  }

  updateRemainingTime(): void {
    const now = new Date();

    if (now >= this.weddingDate) {
      // Si ya pasó la fecha, ponemos todo a 0
      this.remainingTime = { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
      if (this.interval) clearInterval(this.interval);
      return;
    }

    // Calcular meses de forma aproximada
    let months = (this.weddingDate.getFullYear() - now.getFullYear()) * 12;
    months += this.weddingDate.getMonth() - now.getMonth();

    // Ajustar si el día actual es mayor que el día de la boda
    if (this.weddingDate.getDate() < now.getDate()) {
      months--;
    }

    if (months < 0) months = 0;

    // Obtener fecha ajustada sumando los meses completos
    const tempDate = new Date(now);
    tempDate.setMonth(tempDate.getMonth() + months);

    // Diferencia en milisegundos entre la fecha de la boda y la fecha temporal
    let diff = this.weddingDate.getTime() - tempDate.getTime();

    // Calcular días restantes después de meses //
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);

    // Calcular horas restantes
    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);

    // Calcular minutos restantes
    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * (1000 * 60);

    // Calcular segundos restantes // kjsjflkn // 
    const seconds = Math.floor(diff / 1000);

    this.remainingTime = {
      months,
      days,
      hours,
      minutes,
      seconds
    };
  }
}
