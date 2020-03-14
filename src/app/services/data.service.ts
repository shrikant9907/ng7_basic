import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getHeaderNav() {
    return [
      {
        'name': 'Home',
        'link': '/',
        'classes': 'active'
      },
      {
        'name': 'About Us',
        'link': '/about-us',
        'classes': ''
      }, 
      {
        'name': 'Blog',
        'link': '/blog',
        'classes': ''
      }, 
      {
        'name': 'Contact Us',
        'link': '/contact-us',
        'classes': ''
      }
    ];
    // return this.http.get('http://localhost:3000/headernav')
  }
}
