import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatorsViewComponent } from './animators-view.component';

describe('AnimatorsViewComponent', () => {
  let component: AnimatorsViewComponent;
  let fixture: ComponentFixture<AnimatorsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatorsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatorsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
