import { DataSource } from 'typeorm';
// import { User } from './src/user/entities/user.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'test',
  password: 'test',
  database: 'test',
  synchronize: false,
  logging: true,
  entities: ['src/user/entities/*.ts'],
  migrations: ['src/migrations/*.ts'],
});
