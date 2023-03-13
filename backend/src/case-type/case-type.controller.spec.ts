import { Test, TestingModule } from '@nestjs/testing';
import { CaseTypeController } from './case-type.controller';
import { CaseTypeService } from './case-type.service';

describe('CaseTypeController', () => {
  let controller: CaseTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CaseTypeController],
      providers: [CaseTypeService],
    }).compile();

    controller = module.get<CaseTypeController>(CaseTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
