import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    // Recipe array based on recipe model //
    //make it private so that you can't directly access this array from outside //
  private recipes: Recipe[] = [
    new Recipe(
        'Shrimp salad', 
        'Avocado and shrimp are the best mix ever !', 
        'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
        [
            new Ingredient('Shrimp', 10),
            new Ingredient('Zuchini', 2),
            new Ingredient('Avocado', 1),
        ]),
    new Recipe(
        'Pasta salad', 
        'A classic one, but a really good vegetarian idea', 
        'https://images.media-allrecipes.com/images/56589.png',
        [
            new Ingredient('Pasta', 50),
            new Ingredient('preserved tomatoes', 10),
            new Ingredient('green asparagus', 15),
        ])
  ];

  getRecipes() {
      return this.recipes.slice();
  }
}