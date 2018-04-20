import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  constructor(
    public router: Router,
    public fb: FormBuilder,
    public service: ServiceService
  ) { }

  ngOnInit() {
    this.login = this.fb.group({
      email: '',
      password: ''
    });
  }
  loginData() {
    console.log(this.service.validateData(this.login.value));
      if (this.service.validateData(this.login.value)) {
        this.router.navigate(['dashboard']);
      }
  }

}
