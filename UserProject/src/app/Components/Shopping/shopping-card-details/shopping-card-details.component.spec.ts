import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCardDetailsComponent } from './shopping-card-details.component';

describe('ShoppingCardDetailsComponent', () => {
  let component: ShoppingCardDetailsComponent;
  let fixture: ComponentFixture<ShoppingCardDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCardDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
