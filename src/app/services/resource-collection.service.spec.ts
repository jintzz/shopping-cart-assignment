import { TestBed } from '@angular/core/testing';

import { ResourceCollectionService } from './resource-collection.service';

describe('ResourceCollectionService', () => {
  let service: ResourceCollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResourceCollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
