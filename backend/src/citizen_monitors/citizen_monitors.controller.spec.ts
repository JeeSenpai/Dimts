import { Test, TestingModule } from '@nestjs/testing';
import { CitizenMonitorsController } from './citizen_monitors.controller';
import { CitizenMonitorsService } from './citizen_monitors.service';

describe('CitizenMonitorsController', () => {
  let controller: CitizenMonitorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CitizenMonitorsController],
      providers: [CitizenMonitorsService],
    }).compile();

    controller = module.get<CitizenMonitorsController>(CitizenMonitorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
