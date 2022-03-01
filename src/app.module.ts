import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbConfig } from './db.config';
import { UrlModule } from './url/url.module';

@Module({
  imports: [TypeOrmModule.forRoot(DbConfig()), UrlModule],
  providers: [AppService],
})
export class AppModule { }
