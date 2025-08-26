import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProjectModule } from './projects/project.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ProjectModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      process.env.MONGO_URL_CONNECTION ?? '',
      { dbName: process.env.DATABASE_NAME ?? '' }
    ),
  ],
})
export class AppModule {}
