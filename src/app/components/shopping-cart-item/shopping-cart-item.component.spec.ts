import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ShoppingCartItemComponent } from './shopping-cart-item.component';

describe('ShoppingCartComponent', () => {
  let component: ShoppingCartItemComponent;
  let fixture: ComponentFixture<ShoppingCartItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ShoppingCartItemComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should update count', () => {
    spyOn(component.cartService, 'itemUpdate');
    component.counter('add');
    expect(component.cartService.itemUpdate).toHaveBeenCalled();
    component.counter('remove');
    expect(component.cartService.itemUpdate).toHaveBeenCalled();
  });
});
