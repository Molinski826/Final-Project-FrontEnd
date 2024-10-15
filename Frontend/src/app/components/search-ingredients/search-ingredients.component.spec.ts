import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchIngredientsComponent } from './search-ingredients.component';

describe('SearchIngredientsComponent', () => {
  let component: SearchIngredientsComponent;
  let fixture: ComponentFixture<SearchIngredientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchIngredientsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
