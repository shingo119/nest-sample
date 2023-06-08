import { DataSource } from 'typeorm';
import { User } from './src/entities/user.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'test',
  password: 'test',
  database: 'test',
  synchronize: true,
  logging: true,
  entities: [User],
  migrations: ['src/migrations/*.ts'],
});
