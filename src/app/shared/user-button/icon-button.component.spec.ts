import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconButtonComponent } from './icon-button.component';
import { ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

describe('IconButtonComponent', () => {
  let component: IconButtonComponent;
  let fixture: ComponentFixture<IconButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});