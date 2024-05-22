import { Component } from '@angular/core';

import {Tag } from '../../../shared/models/interfaces/Food';
import { FoodService } from '../../../services/food.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css',
})
export class TagsComponent {
  tags: Tag[];
  constructor(foodService: FoodService) {
    this.tags = foodService.getAllTags();
  }
}
