import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalizedRecipesComponent } from './personalized-recipes.component';

describe('PersonalizedRecipesComponent', () => {
  let component: PersonalizedRecipesComponent;
  let fixture: ComponentFixture<PersonalizedRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalizedRecipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalizedRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
