import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebStorageService {

  constructor() { }

  public get(key: string): string | null {
    // use window to help manage localstorage
    return window.localStorage.getItem(key);
   }

  public set(key: string, value: string) {
    window.localStorage.setItem(key, value);
   }


}
