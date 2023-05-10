import { Test, TestingModule } from '@nestjs/testing';
import { CustodiesController } from './custodies.controller';
import { CustodiesService } from './custodies.service';

describe('CustodiesController', () => {
  let controller: CustodiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustodiesController],
      providers: [CustodiesService],
    }).compile();

    controller = module.get<CustodiesController>(CustodiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
