import { Test, TestingModule } from '@nestjs/testing';
import { CaseTypeService } from './case-type.service';

describe('CaseTypeService', () => {
  let service: CaseTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CaseTypeService],
    }).compile();

    service = module.get<CaseTypeService>(CaseTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
