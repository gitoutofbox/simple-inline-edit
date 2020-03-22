import { TestBed } from '@angular/core/testing';

import { SimpleInlineEditService } from './simple-inline-edit.service';

describe('SimpleInlineEditService', () => {
  let service: SimpleInlineEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleInlineEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
