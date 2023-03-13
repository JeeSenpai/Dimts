import { Test, TestingModule } from '@nestjs/testing';
import { HearingTypesService } from './hearing-types.service';

describe('HearingTypesService', () => {
  let service: HearingTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HearingTypesService],
    }).compile();

    service = module.get<HearingTypesService>(HearingTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
