import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

//To inject a service into a service, add @Injectable//
@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

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

  constructor(private slService: ShoppingListService) {

  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice())
  }

  getRecipes() {
      return this.recipes.slice();
  }
  
  getRecipe(id: number) {
    return this.recipes[id];
  }

  // method to receive ingredients and make access to shopping list service //
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice())
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice())
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice())
  }

}