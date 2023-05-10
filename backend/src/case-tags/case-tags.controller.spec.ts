import { Test, TestingModule } from '@nestjs/testing';
import { CaseTagsController } from './case-tags.controller';
import { CaseTagsService } from './case-tags.service';

describe('CaseTagsController', () => {
  let controller: CaseTagsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CaseTagsController],
      providers: [CaseTagsService],
    }).compile();

    controller = module.get<CaseTagsController>(CaseTagsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
