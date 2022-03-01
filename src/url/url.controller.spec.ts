import { Test, TestingModule } from '@nestjs/testing';
import { UrlController } from './url.controller';

describe('UrlController', () => {
  let controller: UrlController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UrlController],
    }).compile();

    controller = module.get<UrlController>(UrlController);
  });

  it('decode url should be defined', () => {
    expect(controller.Decode).toBeDefined();
  });

  it('encode url should be defined', () => {
    expect(controller.Encode).toBeDefined();
  });

  it('stat url should be defined', () => {
    expect(controller.Statistics).toBeDefined();
  });

  it('visit url should be defined', () => {
    expect(controller.Visit).toBeDefined();
  });
});
