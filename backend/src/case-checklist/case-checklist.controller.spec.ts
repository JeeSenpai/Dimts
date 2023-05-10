import { Test, TestingModule } from '@nestjs/testing';
import { CaseChecklistController } from './case-checklist.controller';
import { CaseChecklistService } from './case-checklist.service';

describe('CaseChecklistController', () => {
  let controller: CaseChecklistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CaseChecklistController],
      providers: [CaseChecklistService],
    }).compile();

    controller = module.get<CaseChecklistController>(CaseChecklistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
