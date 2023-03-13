import { Test, TestingModule } from '@nestjs/testing';
import { RaffledCourtService } from './raffled-court.service';

describe('RaffledCourtService', () => {
  let service: RaffledCourtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RaffledCourtService],
    }).compile();

    service = module.get<RaffledCourtService>(RaffledCourtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
