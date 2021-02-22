import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ResourceCollectionService } from './resource-collection.service';

describe('ResourceCollectionService', () => {
  let service: ResourceCollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(ResourceCollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
