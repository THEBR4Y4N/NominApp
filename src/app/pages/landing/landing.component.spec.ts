/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {landingComponent} from './Landing.component'

describe('landingComponent', () => {
  let component: landingComponent;
  let fixture: ComponentFixture<landingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ landingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(landingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
