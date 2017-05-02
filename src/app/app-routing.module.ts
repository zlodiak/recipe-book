import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


const routes: Routes = [
  {
    path: '',
    children: [],
    redirectTo: '/recipes',
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    children: [],
    component: RecipesComponent
  }, 
  {
    path: 'shopping-list',
    children: [],
    component: ShoppingListComponent
  }     
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
