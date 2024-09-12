// src/app/user.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users = [
    { username: 'john_doe', password: 'pass1234' },
    { username: 'jane_smith', password: 'password567' },
    { username: 'alice_w', password: 'alice7890' },
  ];

  validateUser(username: string, password: string): boolean {
    return this.users.some(user => user.username === username && user.password === password);
  }
}
