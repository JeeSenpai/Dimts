import { Test, TestingModule } from '@nestjs/testing';
import { CitizenNotificationController } from './citizen_notification.controller';
import { CitizenNotificationService } from './citizen_notification.service';

describe('CitizenNotificationController', () => {
  let controller: CitizenNotificationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CitizenNotificationController],
      providers: [CitizenNotificationService],
    }).compile();

    controller = module.get<CitizenNotificationController>(CitizenNotificationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
