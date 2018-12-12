import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import {Recipe} from '../recipe.model';
import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] =  [
    new Recipe('A Test Recipe', 'This is the description',
    'https://media3.s-nbcnews.com/j/MSNBC/Components/Video/201808/tdy_food_klg_chicken_180828_1920x1080.today-inline-vid-featured-desktop.jpg'),
    new Recipe('MEchado', 'Pork Mechado Recipe',
    'https://panlasangpinoy.com/wp-content/uploads/2016/11/Pork-Mechado-Recipe-Panlasang-Pinoy.jpg?x28997'),
    new Recipe('Beef Caldereta', 'Pinoy Beef Caldereta',
    'https://media-cdn.tripadvisor.com/media/photo-s/04/9d/b6/0f/casa-manila.jpg'),
    new Recipe('Kare-Kare', 'Pinoy favorite Kare-kare',
    'http://www.magluto.com/wp-content/gallery/pinoy-food-photo/pinoy-recipe-kare-kare14.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
