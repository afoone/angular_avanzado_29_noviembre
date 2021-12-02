import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public get user(): User | undefined {
    const rUser = localStorage.getItem('user');
    if (!rUser) return undefined;
    return JSON.parse(rUser);
  }

  constructor() {}

  login(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  logout() {
    localStorage.removeItem('user');
  }
}
