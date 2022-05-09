import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoulouComponent } from './loulou.component';

describe('LoulouComponent', () => {
  let component: LoulouComponent;
  let fixture: ComponentFixture<LoulouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoulouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoulouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
