import { TestBed } from '@angular/core/testing';

import { SubclassDiaryService } from './subclass-diary.service';

describe('SubclassDiaryService', () => {
  let service: SubclassDiaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubclassDiaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
