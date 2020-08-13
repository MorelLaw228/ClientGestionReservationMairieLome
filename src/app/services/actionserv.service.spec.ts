import { TestBed } from '@angular/core/testing';

import { ActionservService } from './actionserv.service';

describe('ActionservService', () => {
  let service: ActionservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
