import { Test, TestingModule } from '@nestjs/testing';
import { CourtHearingsController } from './court-hearings.controller';
import { CourtHearingsService } from './court-hearings.service';

describe('CourtHearingsController', () => {
  let controller: CourtHearingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourtHearingsController],
      providers: [CourtHearingsService],
    }).compile();

    controller = module.get<CourtHearingsController>(CourtHearingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
