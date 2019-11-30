import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCardDetailsComponent } from './my-card-details.component';

describe('MyCardDetailsComponent', () => {
  let component: MyCardDetailsComponent;
  let fixture: ComponentFixture<MyCardDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCardDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
