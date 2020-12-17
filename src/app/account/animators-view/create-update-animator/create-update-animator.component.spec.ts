import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateAnimatorComponent } from './create-update-animator.component';

describe('CreateUpdateAnimatorComponent', () => {
  let component: CreateUpdateAnimatorComponent;
  let fixture: ComponentFixture<CreateUpdateAnimatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateAnimatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdateAnimatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
