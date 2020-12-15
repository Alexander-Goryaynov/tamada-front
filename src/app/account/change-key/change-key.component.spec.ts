import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeKeyComponent } from './change-key.component';

describe('ChangeKeyComponent', () => {
  let component: ChangeKeyComponent;
  let fixture: ComponentFixture<ChangeKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeKeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
