import { Test, TestingModule } from '@nestjs/testing';
import { CaseStatusController } from './case-status.controller';
import { CaseStatusService } from './case-status.service';

describe('CaseStatusController', () => {
  let controller: CaseStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CaseStatusController],
      providers: [CaseStatusService],
    }).compile();

    controller = module.get<CaseStatusController>(CaseStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
