import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatorsEditComponent } from './animators-edit.component';

describe('AnimatorsEditComponent', () => {
  let component: AnimatorsEditComponent;
  let fixture: ComponentFixture<AnimatorsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatorsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatorsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
