import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { childProtectedGuard } from './child-protected.guard';

describe('childProtectedGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => childProtectedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
