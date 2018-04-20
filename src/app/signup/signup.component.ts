import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ServiceService } from '../service.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUp: FormGroup;
  constructor(
    public router: Router,
    public fb: FormBuilder,
    public service: ServiceService
  ) { }

  ngOnInit() {
    this.signUp = this.fb.group({
      name: '',
      email: '',
      password: ''
    });
  }
  submit() {
    console.log(this.signUp.value);
    this.service.store(this.signUp.value);
    this.router.navigate(['login']);
  }
}
