import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  selectedCuisineItem = new BehaviorSubject<string>('');
  addBlur = new BehaviorSubject<boolean>(false);


  constructor() { }


  getAllMenus(restaurantList, key) {
    let selectedRestaurantMenuDetails = [];
    for (let j = 0; j < restaurantList.length; j++) {
      selectedRestaurantMenuDetails = selectedRestaurantMenuDetails.concat(JSON.parse("[" + restaurantList[j][key] + "]"));
    }
    selectedRestaurantMenuDetails = this.subArrayToArray(selectedRestaurantMenuDetails);
    return selectedRestaurantMenuDetails;
  }

  getNamesWithCount(restaurantList, key) {
    const menus = this.getAllMenus(restaurantList, key);
    var map = menus.reduce(function (prev, cur) {
      prev[cur] = (prev[cur] || 0) + 1;
      return prev;
    }, {});
    return map;
  }

  subArrayToArray(arr) {
    let data = arr.reduce(function (a, b) {
      return a.concat(b);
    }, []);
    return data;
  }

}
