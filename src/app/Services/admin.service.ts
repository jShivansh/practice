import { Injectable } from '@angular/core';
import { User } from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  users: User[] = [
    new User('Shivansh', 'male', 'yearly', 'active'),
    new User('Aman', 'male', 'quaterly', 'inactive'),
    new User('Ankita', 'female', 'monthly', 'active'),
  ];

  constructor() { }

  getAllUser(){
    return this.users;
  }

  createUser(name: string, gender: string, subType: string, userStatus: string){
    let user = new User(name, gender, subType, userStatus);
    this.users.push(user);
  }

}
