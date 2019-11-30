import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllProductFromApiComponent } from './show-all-product-from-api.component';

describe('ShowAllProductFromApiComponent', () => {
  let component: ShowAllProductFromApiComponent;
  let fixture: ComponentFixture<ShowAllProductFromApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAllProductFromApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllProductFromApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
