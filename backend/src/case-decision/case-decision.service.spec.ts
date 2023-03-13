import { Test, TestingModule } from '@nestjs/testing';
import { CaseDecisionService } from './case-decision.service';

describe('CaseDecisionService', () => {
  let service: CaseDecisionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CaseDecisionService],
    }).compile();

    service = module.get<CaseDecisionService>(CaseDecisionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
