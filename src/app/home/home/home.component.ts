import { DataService } from './../../services/data.service';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false
})
export class HomeComponent implements OnInit {
  restaurantList = [];
  popupOpenedName = '';
  fiterPopup = false;
  addBlurOnElement = false;
  subscriptions;
  constructor(public api: ApiService, private router: Router, public data: DataService) {
    this.subscriptions = this.data.addBlur.subscribe((val) => {


      this.addBlurOnElement = val;

    });
  }

  ngOnInit(): void {

  }



  openFilter(popupName): void {

    this.popupOpenedName = popupName;
    this[popupName] = true;
    this.addBlurOnElement = true;

    this.data.addBlur.next(true);
  }

  ngOnDestroy() { this.subscriptions.unsubscribe(); }

}
