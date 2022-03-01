import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/encode (POST)', () => {
    return request(app.getHttpServer())
      .post('/encode?link=https://google.com')
      .expect(200)
      
  });

  it('/decode (GET)', () => {
    return request(app.getHttpServer())
      .get('/decode')
      .expect(404)
  });

  it('/visit (GET)', () => {
    return request(app.getHttpServer())
      .get('/decode')
      .expect(302)
  });

  it('/stats (GET)', () => {
    return request(app.getHttpServer())
      .get('/decode')
      .expect(404)
  });
});
