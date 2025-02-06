import { Injectable } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class RsvpEmailService {
private serviceId = 'service_7zv5ell';
private templateId = 'template_1df31wu';

private userId = 'Szf0arZsNk9IPkXmZ';

  constructor() { 
    emailjs.init(this.userId)
  }

  sendEmail(formData:any){
    return emailjs.send(this.serviceId, this.templateId, formData)

  }
}
