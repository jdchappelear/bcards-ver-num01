import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinesscardsComponent } from './businesscards.component';

describe('BusinesscardsComponent', () => {
  let component: BusinesscardsComponent;
  let fixture: ComponentFixture<BusinesscardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinesscardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinesscardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
