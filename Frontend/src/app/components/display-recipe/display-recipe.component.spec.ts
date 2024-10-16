import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRecipeComponent } from './display-recipe.component';

describe('DisplayRecipeComponent', () => {
  let component: DisplayRecipeComponent;
  let fixture: ComponentFixture<DisplayRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayRecipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
