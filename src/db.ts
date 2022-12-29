import { DataSource } from "typeorm";
import * as entities from '../src/entities'

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  database: 'type_orm_test',
  entities: Object.values(entities),
  synchronize: true,
  logging: false,
})
export default AppDataSource