import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlterSourcePipe } from '../../pipes/alter-source.pipe';

import { CategoryItemComponent } from './category-item.component';

describe('CategoryItemComponent', () => {
  let component: CategoryItemComponent;
  let fixture: ComponentFixture<CategoryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryItemComponent, AlterSourcePipe]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryItemComponent);
    component = fixture.componentInstance;
    component.item = {
      name: "test",
      description: 'test',
      imageUrl: 'xxx'
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
