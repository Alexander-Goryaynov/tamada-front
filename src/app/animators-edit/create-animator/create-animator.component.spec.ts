import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAnimatorComponent } from './create-animator.component';

describe('CreateAnimatorComponent', () => {
  let component: CreateAnimatorComponent;
  let fixture: ComponentFixture<CreateAnimatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAnimatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAnimatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
