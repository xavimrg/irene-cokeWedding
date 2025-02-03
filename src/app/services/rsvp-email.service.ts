import { Injectable } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class RsvpEmailService {
private serviceId = '';
private templateId = '';

private userId = '';

  constructor() { 
  
  }
}
