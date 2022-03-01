import { Test, TestingModule } from '@nestjs/testing';
import { UrlService } from './url.service';

describe('UrlService', () => {
  let service: UrlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UrlService],
    }).compile();

    service = module.get<UrlService>(UrlService);
  });

  it('encode service should be defined', () => {
    expect(service.Encode).toBeDefined();
  });

  it('decode service should be defined', () => {
    expect(service.Decode).toBeDefined();
  });

  it('stat service should be defined', () => {
    expect(service.Statistics).toBeDefined();
  });

  it('visit service should be defined', () => {
    expect(service.Visit).toBeDefined();
  });
});
