import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  restaurantList = [];
  popupOpenedName = '';
  fiterPopup = false;
  constructor(public api: ApiService, private router: Router) { }

  ngOnInit(): void {
  }



  openFilter(popupName): void {

    this.popupOpenedName = popupName;
    this[popupName] = true;

  }

}
