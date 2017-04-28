import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from './recipe';
import { RecipeItemComponent } from './recipe-item.component';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [];
	@Output() recipeSelected = new EventEmitter<Recipe>();
	recipe = new Recipe('Dummy', 'Dummy', 'http://i.ebayimg.com/images/i/152060501642-0-1/s-l1000.jpg');

	constructor() { }

	ngOnInit() {
	}

	onSelected(recipe: Recipe) {
		this.recipeSelected.emit(recipe);
	}

}
