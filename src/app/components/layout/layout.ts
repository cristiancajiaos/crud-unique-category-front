import {Component, OnInit} from '@angular/core';
import {Category} from '../../classes/category';
import {CategoryService} from '../../services/category-service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout implements OnInit {

  public loadingCategories: boolean = false;
  public categories: Category[] = [];

  constructor(
    private categoryService: CategoryService,
    private matSnackbar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    // this.matSnackbar.open("getCategories()");
    this.getCategories();
  }

  public getCategories(): void {
    this.loadingCategories = true;
    this.categoryService.getCategories().then((categories) => {
      this.categories = categories;
      this.loadingCategories = false;
    }).catch((reject) => {
      this.matSnackbar.open("Error getting categories");
    });
  }

}
