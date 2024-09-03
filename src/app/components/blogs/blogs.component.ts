import { Component, OnInit } from '@angular/core';
import { blogList } from 'app/shared/blogs';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  /** List of all articles */
  articles = blogList;

  /** List of articles filtered by category */
  filteredArticles: any[] = [];

  /** Selected category for filtering articles */
  selectedCategory: string = 'all';

  constructor() {
    this.filterArticles(); // Initialize filtered articles when the component is created
  }

  /**
   * Lifecycle hook that is called after data-bound properties of a directive are initialized.
   * Initialize component state or fetch data.
   */
  ngOnInit(): void {}

  /**
   * Filters articles based on the selected category.
   * If 'all' is selected, it shows all articles.
   * Otherwise, it filters articles to show only those matching the selected category.
   */
  filterArticles(): void {
    if (this.selectedCategory === 'all') {
      this.filteredArticles = this.articles;
    } else {
      this.filteredArticles = this.articles.filter(article => article.category === this.selectedCategory);
    }
  }

  /**
   * Event handler for category change.
   * Calls `filterArticles` to update the list of displayed articles.
   */
  onCategoryChange(): void {
    this.filterArticles();
  }
}
