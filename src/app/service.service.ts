import { Injectable } from '@angular/core';

@Injectable()
export class ServiceService {

  constructor() {
    // localStorage.setItem('userdata', JSON.stringify(this.users));
   }
  users = [];
  store(val) {
    console.log(this.get());
    const a = this.get();
    a.push(val);
    localStorage.setItem('userdata', JSON.stringify(a));
  }
  get(): any[] {
  //  console.log((localStorage.getItem('userdata')));
  if (!localStorage.getItem('userdata')) {
    return [];
  }
  return JSON.parse(localStorage.getItem('userdata'));
}
  validateData(val) {
    console.log(this.get());
    return this.get().filter(data => data.email === val.email && data.password === val.password).length > 0;
  }
}
