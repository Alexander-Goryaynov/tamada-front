import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeAnimatorComponent } from './change-animator.component';

describe('ChangeAnimatorComponent', () => {
  let component: ChangeAnimatorComponent;
  let fixture: ComponentFixture<ChangeAnimatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeAnimatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeAnimatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
