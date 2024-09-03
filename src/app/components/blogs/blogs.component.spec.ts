import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsComponent } from './blogs.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { DataSharingService } from '@app/shared/data-sharing.service';

describe('BlogsComponent', () => {
  let component: BlogsComponent;
  let fixture: ComponentFixture<BlogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, HttpClientModule, MatToolbarModule, MatIconModule, MatSlideToggleModule,
        MatCardModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatToolbarModule,
        MatProgressBarModule,
        MatSidenavModule,
        MatExpansionModule,
        MatListModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTreeModule,
        MatTableModule,
        MatAutocompleteModule,
        MatSelectModule, MatSidenavModule, BrowserAnimationsModule
      ],
      providers:[DataSharingService],
      declarations: [BlogsComponent]
    });
    fixture = TestBed.createComponent(BlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a default selectedCategory of "all"', () => {
    expect(component.selectedCategory).toBe('all');
  });

  it('should filter articles by the selected category', () => {
    component.articles = [
      { category: 'tech', title: 'Tech Article' },
      { category: 'health', title: 'Health Article' },
      { category: 'tech', title: 'Another Tech Article' }
    ];

    component.selectedCategory = 'tech';
    component.filterArticles();
    expect(component.filteredArticles.length).toBe(2);
    expect(component.filteredArticles).toEqual([
      { category: 'tech', title: 'Tech Article' },
      { category: 'tech', title: 'Another Tech Article' }
    ]);

    component.selectedCategory = 'health';
    component.filterArticles();
    expect(component.filteredArticles.length).toBe(1);
    expect(component.filteredArticles).toEqual([
      { category: 'health', title: 'Health Article' }
    ]);
  });

  it('should show all articles when selectedCategory is "all"', () => {
    component.articles = [
      { category: 'tech', title: 'Tech Article' },
      { category: 'health', title: 'Health Article' }
    ];

    component.selectedCategory = 'all';
    component.filterArticles();
    expect(component.filteredArticles.length).toBe(2);
    expect(component.filteredArticles).toEqual(component.articles);
  });

  it('should filter articles when onCategoryChange is called', () => {
    spyOn(component, 'filterArticles').and.callThrough();
    component.selectedCategory = 'tech';
    component.onCategoryChange();
    expect(component.filterArticles).toHaveBeenCalled();
  });
});

