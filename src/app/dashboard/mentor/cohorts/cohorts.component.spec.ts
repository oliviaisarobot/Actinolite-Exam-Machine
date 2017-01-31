/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CohortsComponent } from './cohorts.component';

describe('CohortsComponent', () => {
  let component: CohortsComponent;
  let fixture: ComponentFixture<CohortsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CohortsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CohortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
