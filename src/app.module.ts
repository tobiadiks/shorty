import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbConfig } from './db.config';

@Module({
  imports: [TypeOrmModule.forRoot(DbConfig())],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
