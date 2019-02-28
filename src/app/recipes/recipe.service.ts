import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    // Recipe array based on recipe model //
    //make it private so that you can't directly access this array from outside //
  private recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
    new Recipe('Another test Recipe', 'This is simply a test', 'https://images.media-allrecipes.com/images/56589.png')
  ];

  getRecipes() {
      return this.recipes.slice();
  }
}