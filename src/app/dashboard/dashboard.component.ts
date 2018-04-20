import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userData = [];
  constructor(
    public service: ServiceService
  ) { }

  ngOnInit() {
    this.userData = this.service.get();
  }

}
