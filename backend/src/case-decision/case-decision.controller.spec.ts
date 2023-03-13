import { Test, TestingModule } from '@nestjs/testing';
import { CaseDecisionController } from './case-decision.controller';
import { CaseDecisionService } from './case-decision.service';

describe('CaseDecisionController', () => {
  let controller: CaseDecisionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CaseDecisionController],
      providers: [CaseDecisionService],
    }).compile();

    controller = module.get<CaseDecisionController>(CaseDecisionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
