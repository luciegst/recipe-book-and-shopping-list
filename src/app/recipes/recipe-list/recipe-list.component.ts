import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})


export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  
  constructor(private recipeService: RecipeService, 
    //Inject the router to be able to navigate to this route//            
              private router: Router,
              private route: ActivatedRoute) {

   }

  ngOnInit() {
    this.recipeService.recipesChanged
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    )
    this.recipes = this.recipeService.getRecipes();
  }

  // method to target and use the router to navigate to the correct path //
  //to use a relative route in the navigate method, inform the router about the current route (activatedroute)//
  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
