import { Test, TestingModule } from '@nestjs/testing';
import { CitizenNotificationService } from './citizen_notification.service';

describe('CitizenNotificationService', () => {
  let service: CitizenNotificationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CitizenNotificationService],
    }).compile();

    service = module.get<CitizenNotificationService>(CitizenNotificationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
