import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppModule } from './app.module';
import * as request from 'supertest';

describe('AppController', () => {
  let app: TestingModule;
  let serve;
  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [AppModule],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    serve = app.createNestApplication();
    await serve.init();
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      return request(serve.getHttpServer())
        .get('/hi')
        .expect(200)
        .expect('youRealIp');
    });
  });
});
