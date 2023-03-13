import { Test, TestingModule } from '@nestjs/testing';
import { RaffledCourtController } from './raffled-court.controller';
import { RaffledCourtService } from './raffled-court.service';

describe('RaffledCourtController', () => {
  let controller: RaffledCourtController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RaffledCourtController],
      providers: [RaffledCourtService],
    }).compile();

    controller = module.get<RaffledCourtController>(RaffledCourtController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
