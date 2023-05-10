import { Test, TestingModule } from '@nestjs/testing';
import { CaseTagsService } from './case-tags.service';

describe('CaseTagsService', () => {
  let service: CaseTagsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CaseTagsService],
    }).compile();

    service = module.get<CaseTagsService>(CaseTagsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
