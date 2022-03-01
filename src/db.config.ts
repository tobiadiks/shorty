import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export function DbConfig(): TypeOrmModuleOptions {
  return {
    type: 'postgres',
    host:'ec2-54-172-219-6.compute-1.amazonaws.com',
    port: 5432,
    username: 'gwotbokckzedgl',
    password:'41772f6537a4840e07618f1f96c2b5f78328d16de149d8c5eac2f59b07084bab',
    database: 'd42emqkemkdc71',
    synchronize: true,
    autoLoadEntities: true,
    ssl:{ rejectUnauthorized: false }
        
  };
}
