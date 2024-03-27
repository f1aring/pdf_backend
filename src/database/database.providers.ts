import { Sequelize } from 'sequelize-typescript';
import { Pdf } from './pdf/pdf.model';

export const databaseProviders = [
    {
      provide: 'SEQUELIZE',
      useFactory: async () => {
        const sequelize = new Sequelize({
          dialect: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'postgres',
          password: '123',
          database: 'test',
        });
        sequelize.addModels([Pdf]);
        await sequelize.sync();
        return sequelize;
      },
    },
  ];