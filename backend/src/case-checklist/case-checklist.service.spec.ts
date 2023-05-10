import { Test, TestingModule } from '@nestjs/testing';
import { CaseChecklistService } from './case-checklist.service';

describe('CaseChecklistService', () => {
  let service: CaseChecklistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CaseChecklistService],
    }).compile();

    service = module.get<CaseChecklistService>(CaseChecklistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
