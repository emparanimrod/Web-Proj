import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDefComponent } from './products-def.component';

describe('ProductsDefComponent', () => {
  let component: ProductsDefComponent;
  let fixture: ComponentFixture<ProductsDefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsDefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
