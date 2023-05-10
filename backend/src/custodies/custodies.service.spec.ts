import { Test, TestingModule } from '@nestjs/testing';
import { CustodiesService } from './custodies.service';

describe('CustodiesService', () => {
  let service: CustodiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustodiesService],
    }).compile();

    service = module.get<CustodiesService>(CustodiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
