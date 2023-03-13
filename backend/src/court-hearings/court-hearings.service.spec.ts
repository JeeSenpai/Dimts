import { Test, TestingModule } from '@nestjs/testing';
import { CourtHearingsService } from './court-hearings.service';

describe('CourtHearingsService', () => {
  let service: CourtHearingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourtHearingsService],
    }).compile();

    service = module.get<CourtHearingsService>(CourtHearingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
