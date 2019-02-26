import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})


export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  // Recipe array based on recipe model //
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
    new Recipe('Another test Recipe', 'This is simply a test', 'https://images.media-allrecipes.com/images/56589.png')
  ];

  constructor() { }

  ngOnInit() {
  }

  //method to pass informations to recipe detail component//
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }

}
