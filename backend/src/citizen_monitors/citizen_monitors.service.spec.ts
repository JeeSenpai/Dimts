import { Test, TestingModule } from '@nestjs/testing';
import { CitizenMonitorsService } from './citizen_monitors.service';

describe('CitizenMonitorsService', () => {
  let service: CitizenMonitorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CitizenMonitorsService],
    }).compile();

    service = module.get<CitizenMonitorsService>(CitizenMonitorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
