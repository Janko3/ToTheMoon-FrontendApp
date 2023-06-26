import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  getItem(key: string): any {
    const item = localStorage.getItem(key);
    return item;
  }

  setItem(key: string, value: any): void {
    const item = JSON.stringify(value);
    localStorage.setItem(key, item);
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
