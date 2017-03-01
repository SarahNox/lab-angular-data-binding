import { Component, OnInit } from '@angular/core';
import foodList from '../foods';


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods: Object[];
  newFood: Object = {};
  name: string;
  calories: string;
  image: string;
  food: Object[];
  totalCalories: number = 0;
  todayFood: Array <string> = [];


  constructor() { }

  ngOnInit() {
    this.foods = foodList;
  }

  addFood(){
    this.foods.push(this.newFood);
    console.log("Add food has been called");
  }

  addTodayFood(name: string, calories: number){
      this.todayFood.push(name);
      this.totalCalories += calories;
    }
}
