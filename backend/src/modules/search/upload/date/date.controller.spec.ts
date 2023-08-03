import { Test, TestingModule } from '@nestjs/testing';
import { DateController } from './date.controller';

describe('DateController', () => {
  let controller: DateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DateController],
    }).compile();

    controller = module.get<DateController>(DateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});