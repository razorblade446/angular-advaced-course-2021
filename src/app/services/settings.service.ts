import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private defaultThemeUrl = './assets/css/colors/default.css';
  private themeScript = document.querySelector('#theme');

  constructor() {
    const storedThemeUrl =
      localStorage.getItem('theme') || this.defaultThemeUrl;
    this.themeScript?.setAttribute('href', storedThemeUrl);
  }

  changeTheme(theme: string) {
    const themeUrl = `./assets/css/colors/${theme}.css`;
    this.themeScript?.setAttribute('href', themeUrl);

    localStorage.setItem('theme', themeUrl);
    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    const currentThemeUrl = this.themeScript?.getAttribute('href');
    const themeLinks = document.querySelectorAll('.selector');
    themeLinks?.forEach((link: Element) => {
      link.classList.remove('working');
      const btnTheme = link.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;

      if (currentThemeUrl === btnThemeUrl) {
        link.classList.add('working');
      }
    });
  }
}
