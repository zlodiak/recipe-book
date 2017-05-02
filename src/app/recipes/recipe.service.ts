import { Injectable } from '@angular/core';

import { Recipe } from './recipe-list/recipe';
import { Ingredient } from "../shared/ingredient";


@Injectable()
export class RecipeService {

	recipes: Recipe[] = [
		new Recipe('Schnitzel', 'Very tasty', 'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg', [
			new Ingredient('French fries', 2),
			new Ingredient('pork meat', 1)
		]),
		new Recipe('Summer salad', 'Okayish', 'http://cdn.iowagirleats.com/wp-content/uploads/2013/05/Triple-Berry-Summer-Salad-03_mini.jpg', [])
	];

  	constructor() { }

  	getRecipes() {
  		return this.recipes;
  	}

}
