import { Test, TestingModule } from '@nestjs/testing';
import { HearingTypesController } from './hearing-types.controller';
import { HearingTypesService } from './hearing-types.service';

describe('HearingTypesController', () => {
  let controller: HearingTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HearingTypesController],
      providers: [HearingTypesService],
    }).compile();

    controller = module.get<HearingTypesController>(HearingTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
