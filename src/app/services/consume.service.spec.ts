import { TestBed, inject } from '@angular/core/testing';

import { ConsumeService } from './consume.service';
import { HttpClientModule } from '@angular/common/http'

describe('ConsumeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ConsumeService
      ],
      imports: [
        HttpClientModule
      ]
    });
  });

  it('should be created', inject([ConsumeService], (service: ConsumeService) => {
    expect(service).toBeTruthy();
  }));
});
