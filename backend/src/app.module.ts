import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProjectModule } from './projects/project.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Module({
  imports: [
    ProjectModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      process.env.MONGO_URL_CONNECTION ?? '',
      { dbName: process.env.DATABASE_NAME ?? '',
        onConnectionCreate: (connection: Connection) => {
          connection.on('connected', () => console.log('Mongo connected'))
          connection.on('open', () => console.log('Mongo on'))
          connection.on('disconnected', () => console.log('Mongo disconnected'));
          connection.on('reconnected', () => console.log('Mongo reconnected'));

          return connection
        }
       },
    ),
  ],
})
export class AppModule {}
