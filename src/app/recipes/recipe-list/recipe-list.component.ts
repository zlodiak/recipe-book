import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from "../../shared/ingredient";

import { Recipe } from './recipe';
import { RecipeItemComponent } from './recipe-item.component';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [
		new Recipe('Schnitzel', 'Very tasty', 'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg'),
		new Recipe('Summer salad', 'Okayish', 'http://cdn.iowagirleats.com/wp-content/uploads/2013/05/Triple-Berry-Summer-Salad-03_mini.jpg')
	];
	@Output() recipeSelected = new EventEmitter<Recipe>();

	constructor() { }

	ngOnInit() {
	}

	onSelected(recipe: Recipe) {
		this.recipeSelected.emit(recipe);
	}

}
