import { TestBed } from '@angular/core/testing';

import { ComponentInteractionsService } from './component-interactions.service';

describe('ComponentInteractionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComponentInteractionsService = TestBed.get(ComponentInteractionsService);
    expect(service).toBeTruthy();
  });
});
