import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingmethodsComponent } from './shippingmethods.component';

describe('ShippingmethodsComponent', () => {
  let component: ShippingmethodsComponent;
  let fixture: ComponentFixture<ShippingmethodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingmethodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingmethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
